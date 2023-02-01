import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import toastr from "toastr";
import authHelpers from "../../services/helpers";
import { authenticateAPI } from "../../services/authorized-api";
import { usersAPI } from "../../services/identity/users";
import { companyAPI } from "../../services/identity/company";
import Cookies from "js-cookie";
import jwt from "jwt-decode";
import { Formik, Form } from "formik";
import InputField from "../../components/ModalCreate/InputField";
import styles from "../CreateAccount/CreateAccount.module.css";
import { crmPlatform } from "src/services/identity";
import axios from "axios";
import Select from "react-select";
import { EMP_COUNT_ENUM } from "../Site/constants";

const servicesAuthenticateAPI = new authenticateAPI();
const servicesUsersAPI = new usersAPI();
const servicescompanyAPI = new companyAPI();

const SigninContainer = () => {
  const Router = useRouter();
  const [showMultiCompany, setShowMultiCompany] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [listCompany, setListCompany] = useState<any[]>([]);
  const isCrmToken = Cookies.get("crm_token");
  const companyName = Cookies.get("companyName");
  const [companyNameSingle, setCompanyNameSingle] = useState("");
  const [errorDomainName, setErrorDomainName] = useState("");
  // if (isCrmToken !== undefined && companyName) {
  //   Router.replace(`/${companyName}/dashboard`);
  // }

  const CompanyEmployeeCountEnum = [];

  const onChooseCompany = async (
    id: string,
    name: string,
    companyName: string
  ) => {
    Cookies.set("companyID", id);
    Cookies.set("companyName", name);
    Cookies.set("companyNameString", companyName);
    const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");
    servicesUsersAPI.lastAccessCompany(accountInfo?.uuid, id).then((res) => {
      Router.replace(`/${name}/dashboard`);
    });
  };

  const handleCreateCompany = async (values: any) => {
    try {
      if (values) {
        const body = {
          employeeCount: values.employeeCount,
          description: values.description,
          name: values.name,
          accessLink: values.accessLink,
          phoneNumber: String(values.phoneNumber),
          website: values.website,
          address: values.address,
        };
        servicescompanyAPI.createCompany(body).then((res) => {
          const accountInfo = JSON.parse(
            localStorage.getItem("accounts") ?? "{}"
          );
          servicesUsersAPI.getDetailUser(accountInfo?.uuid).then((res) => {
            const listCompany = res.data?.roles;
            setListCompany(listCompany);
            setShowMultiCompany(true);
            setShowForm(false);
          });
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const validateDomain = async (domain: string) => {
    try {
      const response = await axios.get(
        `${crmPlatform}/companies/is-accesslink-available/${domain}`
      );
      if (response.status === 200) {
        if (response.data === false) {
          setErrorDomainName(
            "The access URL you have chosen already exists. Please try another access URL."
          );
        } else {
          setErrorDomainName("");
        }
        return response.data;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: ({ username, password }) => {
      let body = {
        username: username,
        password: password,
      };
      servicesAuthenticateAPI
        .checkAuthenticate(body)
        .then((res) => {
          if (!res.error) {
            if (res.data.platformAccess.crm) {
              authHelpers.storeAccessToken("logged-in");
              const userInfo = jwt(res.data.accessToken);
              const userID = userInfo;
              localStorage.setItem("accounts", JSON.stringify(userInfo));
              Cookies.set("crm_token", res.data.accessToken);
              servicesUsersAPI.getDetailUser(userID?.uuid).then((res) => {
                const accountInfo = JSON.parse(
                  localStorage.getItem("accounts") ?? "{}"
                );
                const listCompany = res.data?.roles;
                accountInfo.roles = listCompany;
                localStorage.setItem("accounts", JSON.stringify(accountInfo));
                if (listCompany && listCompany.length > 1) {
                  setShowMultiCompany(true);
                  setListCompany(listCompany);
                  Cookies.set("isAuthenticated", "1");
                } else {
                  // SETUP FOR 1 COMPANY
                  if (listCompany && listCompany.length == 1) {
                    Cookies.set(
                      "companyName",
                      res.data.roles[0]["company"]["accessLink"]
                    );
                    Cookies.set(
                      "companyID",
                      res.data.roles[0]["company"]["id"]
                    );
                    Cookies.set("isAuthenticated", "1");
                    setCompanyNameSingle(
                      res.data.roles[0]["company"]["accessLink"]
                    );
                    setShowMultiCompany(true);
                    // Router.replace(
                    //   `${res.data.roles[0]["company"]["accessLink"]}/dashboard`
                    // );
                  } else {
                    Cookies.set("isAuthenticated", "0");
                    Router.replace(`/setup`);
                  }
                }
              });
            } else {
              toastr.error("No permission");
            }
          } else {
            const message = res.error;
            toastr.error(message);
          }
        })
        .catch(function (error) {});
    },
  });

  useEffect(() => {
    authHelpers.clearTokens();
  }, []);

  const createCompanyValidate = Yup.object().shape({
    accessLink: Yup.string()
      .required("required")
      .min(4, "at least 4 characters")
      .max(30, "up to 30 characters"),
    name: Yup.string().required("required"),
  });

  return (
    <section id="wrapper">
      <div className="login-register">
        <div className="login-box card">
          <div className="card-body">
            {showMultiCompany ? (
              <div>
                {listCompany.length > 1 ? (
                  <div>
                    <h3 className="text-center m-b-20">Select company</h3>
                    <ul className="listCompany">
                      {listCompany.map((company: any) => (
                        <li>
                          <a
                            onClick={() => {
                              onChooseCompany(
                                company.companyId,
                                company.company.accessLink,
                                company.company.name
                              );
                            }}
                          >
                            {company.company.name}
                            <i className="fas fa-arrow-alt-circle-right"></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                    <button
                      className="btn btn-info d-lg-block mt-4"
                      onClick={() => {
                        setShowForm(true);
                      }}
                    >
                      Create new company
                    </button>
                  </div>
                ) : (
                  <div className="d-flex">
                    <button
                      className="btn btn-info d-lg-block mt-4"
                      onClick={() => {
                        setShowForm(true);
                      }}
                    >
                      Create new company
                    </button>
                    <button
                      className="btn btn-info d-lg-block mt-4 ml-3"
                      onClick={() => {
                        Router.replace(`${companyNameSingle}/dashboard`);
                      }}
                    >
                      Skip
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <form
                  className="form-horizontal form-material"
                  id="loginform"
                  onSubmit={formik.handleSubmit}
                >
                  <h3 className="text-center m-b-20">Sign In ABC</h3>
                  <div className="form-group ">
                    <div className="col-xs-12">
                      <input
                        className="form-control"
                        type="text"
                        name="username"
                        required
                        placeholder="Username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-12">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        required
                        placeholder="Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <div className="d-flex no-block align-items-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label className="custom-control-label">
                            Remember me
                          </label>
                        </div>
                        <div className="ml-auto">
                          <a href="" id="to-recover" className="text-muted">
                            <i className="fas fa-lock m-r-5"></i> Forgot pwd?
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group text-center">
                    <div className="col-xs-12 p-b-20">
                      <button
                        className="btn btn-block btn-lg btn-info btn-rounded"
                        type="submit"
                      >
                        Log In
                      </button>
                    </div>
                  </div>

                  <div className="form-group m-b-0">
                    <div className="col-sm-12 text-center">
                      Don't have an account?
                      <a href="pages-register.html" className="text-info m-l-5">
                        <b>Sign Up</b>
                      </a>
                    </div>
                  </div>
                </form>
                <form
                  className="form-horizontal"
                  id="recoverform"
                  action="index.html"
                >
                  <div className="form-group ">
                    <div className="col-xs-12">
                      <h3>Recover Password</h3>
                      <p className="text-muted">
                        Enter your Email and instructions will be sent to you!
                      </p>
                    </div>
                  </div>
                  <div className="form-group ">
                    <div className="col-xs-12">
                      <input
                        className="form-control"
                        type="text"
                        required
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="form-group text-center m-t-20">
                    <div className="col-xs-12">
                      <button
                        className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light"
                        type="submit"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      {showForm ? (
        <div>
          <div className="mask-layer"></div>
          <div className={styles["create-account"]}>
            <h2 className={styles["create-account-title"]}>
              Create new company
            </h2>
            <Formik
              initialValues={{
                employeeCount: 0,
                description: "",
                name: "",
                accessLink: "",
                phoneNumber: "",
                website: "",
                address: "",
              }}
              validationSchema={createCompanyValidate}
              enableReinitialize={true}
              onSubmit={handleCreateCompany}
            >
              {({ setFieldValue }) => (
                <div>
                  <Form>
                    <div className="row mt-4">
                      <div className="col-12">
                        <InputField
                          label="Company"
                          name="name"
                          type="text"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <InputField
                          label="Website"
                          name="website"
                          type="text"
                        />
                      </div>

                      <div className="col-12">
                        <label>Employee count</label>
                        <Select
                          className="mt-2"
                          name="employeeCount"
                          options={EMP_COUNT_ENUM}
                        />
                      </div>

                      <div className="col-12 mt-3">
                        <InputField
                          label="Phone"
                          name="phoneNumber"
                          type="number"
                        />
                      </div>

                      <div className="col-12">
                        <InputField
                          label="Description"
                          name="description"
                          type="textarea"
                        />
                      </div>

                      <div className="col-12">
                        <InputField
                          label="Address"
                          name="address"
                          type="text"
                        />
                      </div>

                      <div className="col-12">
                        <InputField
                          label="Access link"
                          name="accessLink"
                          type="text"
                          prefix={process.env.REACT_DOMAIN_URL ?? ""}
                          required
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setFieldValue(
                              "accessLink",
                              e?.target?.value?.replace(
                                /[`~!@#$%^&*()|+\-=?;:'" ,.<>\{\}\[\]\\\/]/gi,
                                ""
                              )
                            );
                            validateDomain(
                              e?.target?.value?.replace(
                                /[`~!@#$%^&*()|+\-=?;:'" ,.<>\{\}\[\]\\\/]/gi,
                                ""
                              )
                            );
                          }}
                        />
                        <div className={`error invalid-feedback text-right`}>
                          {errorDomainName}
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <button
                        className={`btn btn-danger ml-3`}
                        onClick={() => {
                          setShowForm(false);
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className={`btn btn-danger ml-3 ${
                          errorDomainName !== "" ? `disabled` : ``
                        }`}
                        type="submit"
                      >
                        Complete
                      </button>
                    </div>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default SigninContainer;

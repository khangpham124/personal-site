import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";

import Select from "react-select";
import Paginate from "../../components/Paginate";
import { STATUS_PROJECT, QUARTER, YEAR_OPTIONS } from "./constants";
import Modal from "../../components/ModalCreate";
import InputField from "../../components/ModalCreate/InputField";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { TRootState } from "src/state-management/reducers";
import { fetchLeadsAction, uiActions } from "src/state-management/actions";
import { EPaginate } from "utils/types";
import { EProjectsActions } from "src/state-management/actions/projects/constants";

import {
  createProjectAction,
  fetchProjectsAction,
} from "src/state-management/actions/projects";
import axios from "axios";
import Location from "../../services/identity/location";
import { useRouter } from "next/router";
import { ProjectAPI } from "../../services/identity/project-api";
import Cookies from "js-cookie";

const servicesProjectAPI = new ProjectAPI();
const ProjectsContainer: React.FC = () => {
  const dispatch = useDispatch();
  const Router = useRouter();
  const companyID = Cookies.get("companyID");
  const companyName = Cookies.get("companyName");
  const pageSizeProjects = useSelector(
    (state: TRootState) => state.projects.all?.pageSize
  );

  const pageIndexProjects = useSelector(
    (state: TRootState) => state.projects.all?.pageIndex
  );

  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(EPaginate.DEFAULT_PAGE_INDEX);
  const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");

  const [showStep1, setshowStep1] = useState(true);
  const [showStep2, setshowStep2] = useState(false);

  const [templChose, settemplChose] = useState("classic");

  const [showBtnNext, setshowBtnNext] = useState("disabled");
  const [errorDomainName, setErrorDomainName] = useState("");
  const [domainNameField, setDomainNameField] = useState("");

  const [numbProjects, setNumbProjects] = useState(0);
  const [projects, setProjects] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [wards, setWards] = useState<any[]>([]);

  const [city, setCity] = useState(null);
  const [district, setDistrict] = useState(null);
  const [ward, setWard] = useState(null);

  const validate = Yup.object({
    projectName: Yup.string()
      .max(100, "Project name must be at most 100 characters")
      .required("Required"),
    address: Yup.string().max(100, "Address must be at most 100 characters"),
    // domainName: Yup.string()
    //   .max(100, "Domain name must be at most 100 characters")
    //   .required("Required"),
    // .matches(/^[0-9\-]+$/, "Must be only digits, -"),
  });

  const handlePaginate = ({ selected }) => {
    setCurrentPage(selected);
    dispatch(
      fetchProjectsAction.request(
        selected,
        EPaginate.COMMON_PAGE_SIZE,
        String(companyID)
      )
    );
  };

  const fetchProjects = (
    pageIndex: number,
    pageSize: number,
    companyId: string
  ) => {
    servicesProjectAPI
      .fetchProjects(pageIndex, pageSize, companyId)
      .then((items) => {
        setProjects(items.items);
        setNumbProjects(Number(items.totalItems));
      });
  };

  const handleCreateProject = (values: any) => {
    const body = {
      name: values?.projectName,
      companyId: companyID,
      address: values?.address,
      cityId: city?.value,
      wardId: ward?.value,
      districtId: district?.value,
      email: values?.email,
      hotline: values?.hotline,
      workingHours: values?.workingHour,
      domainName: domainNameField,
      projectDescription: values?.projectDescription,
      projectOwnerIntroduction: values?.projectOwnerIntroduction,
      designType: templChose,
      status: values?.status,
      quarterCompletion: values?.quarterCompletion,
      yearCompletion: values?.yearCompletion,
    };

    console.log(body);
    dispatch(
      createProjectAction.request(body, (project) => {
        fetchProjects(
          EPaginate.DEFAULT_PAGE_INDEX,
          EPaginate.COMMON_PAGE_SIZE,
          String(companyID)
        );
        setShowModal(false);
        setshowStep2(false);
        setshowStep1(true);
        window.location.href = `/${companyName}/projects/${project.id}`;
      })
    );
  };

  const generateLink = (id: string, domainName: string) => {
    servicesProjectAPI.generateLink(id).then((res) => {
      Router.replace(
        `${process.env.REACT_DOMAIN_URL}/site/${res}&projectDomainName=${domainName}`
      );
    });
  };

  const validateDomain = (domain: string) => {
    const baseUrl = `${process.env.REACT_APP_API_SERVER}/crm`;
    let formatDomain = domain.replace(/ /g, "");
    axios
      .get(
        `${baseUrl}/crm-projects/is-project-domain-available/${formatDomain}`
      )
      .then((res) => {
        if (res.status === 200) {
          if (!res.data.isAvailable) {
            setErrorDomainName(
              "This domain name has been used, please choose different name."
            );
          } else {
            setErrorDomainName("");
            setDomainNameField(formatDomain);
          }
        }
      })
      .catch(function (error) {
        setDomainNameField("");
        setErrorDomainName("Domain is required");
      });
  };

  const handleGetList = (
    nameOfList: string,
    cityId?: number,
    districtId?: number
  ) => {
    if (nameOfList === "cities") {
      Location.fetchCities()
        .then((res) => {
          if (res && res.cities) {
            const arrCities: [any?] = [];
            res.cities.map((item) => {
              arrCities.push({
                value: Number(item.id),
                label: item.name,
              });
            });
            setCities(arrCities);
          }
        })
        .catch((err) => console.log(err));
    } else if (nameOfList === "districts") {
      Location.fetchDistricts(Number(cityId))
        .then((res) => {
          if (res && res.districts) {
            let arrDistricts: [any?] = [];
            res.districts.map((item) => {
              arrDistricts.push({
                value: Number(item.id),
                label: item.name,
              });
            });
            setDistricts(arrDistricts);
          }
        })
        .catch((err) => console.log(err));
    } else {
      Location.fetchWards(Number(districtId))
        .then((res) => {
          if (res && res.wards) {
            const arrWards: [any?] = [];
            res.wards.map((item) => {
              arrWards.push({
                value: Number(item.id),
                label: item.name,
              });
            });
            setWards(arrWards);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetchProjects(
      EPaginate.DEFAULT_PAGE_INDEX,
      EPaginate.COMMON_PAGE_SIZE,
      String(companyID)
    );
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(uiActions.resetActionStatus(EProjectsActions.FETCH_PROJECTS));
      dispatch(uiActions.resetActionStatus(EProjectsActions.CREATE_PROJECT));
    };
  }, [dispatch]);

  useEffect(() => {
    if (district) {
      setWard(null);
      setWards([]);
      handleGetList("wards", 0, Number(district?.value));
    }
  }, [district]);

  useEffect(() => {
    if (city) {
      setDistrict(null);
      setWard(null);
      setDistricts([]);
      setWards([]);
      handleGetList("districts", Number(city?.value));
    }
  }, [city]);

  useEffect(() => {
    handleGetList("cities");
  }, []);

  const emptyStarte = (
    <div className="emptyState">
      <p>
        Create interesting project site at ease with
        <br />
        Dreamland template
      </p>
      <button
        type="button"
        className="btn btn-info mt-4"
        onClick={() => setShowModal(true)}
      >
        Create Now
      </button>
    </div>
  );
  const colourStyles = {
    menu: (styles: any) => {
      return {
        ...styles,
        zIndex: 1000,
        marginBottom: 10
      };
    },
    menuList: (styles: any) => {
      return {
        ...styles,
        background: "white",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        maxHeight: 200,
        borderRadius: 4,
        boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"
      };
    },
  };
  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row page-titles">
            <div className="col-md-5 align-self-center">
              <h4 className="text-themecolor">Projects</h4>
            </div>
            <div className="col-md-7 align-self-center text-right">
              <div className="d-flex justify-content-end align-items-center">
                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15"
                  onClick={() => setShowModal(true)}
                >
                  <i className="fa fa-plus-circle"></i> Create New
                </button>
              </div>
            </div>
          </div>
          <Modal
            isOpen={showModal}
            onRequestClose={() => {
              setShowModal(false);
              setshowStep2(false);
              setshowStep1(true);
            }}
            modal_name="NEW PROJECT"
            label="Name"
          >
            <Formik
              initialValues={{
                projectName: "",
                address: "",
                email: "",
                hotline: "",
                workingHour: "",
                projectDescription: "",
                projectOwnerIntroduction: "",
                designType: "",
                status: "",
                yearCompletion: 1990,
                quarterCompletion: "",
              }}
              validationSchema={validate}
              enableReinitialize={true}
              onSubmit={handleCreateProject}
            >
              {(props) => {
                const { setFieldValue, handleChange } = props;
                return (
                  <div>
                    <Form>
                      <div className={`${showStep1 ? `step1` : `d-none`}`}>
                        <h4 className="font-weight-normal">
                          Project information
                        </h4>
                        <div className="mt-4">
                          {/* <div className="col-6"> */}
                          <InputField
                            label="Project name"
                            name="projectName"
                            type="text"
                            required
                          />
                          {/* </div> */}
                          {/* <div className="col-6">
                          <InputField
                            label="Address"
                            name="address"
                            type="text"
                          />
                        </div> */}
                        </div>
                        <div className="row mt-3">
                          <div className="col-6">
                            <InputField
                              label="Email"
                              name="email"
                              type="text"
                            />
                          </div>
                          <div className="col-6">
                            <InputField
                              label="Hotline"
                              name="hotline"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-6">
                            <InputField
                              label="Working hour"
                              name="workingHour"
                              type="text"
                            />
                          </div>
                          <div className="col-6">
                            <label
                              className="font-weight-normal"
                              htmlFor="domainName"
                            >
                              Domain
                              <span className={`text-err`}>*</span>
                            </label>
                            <input
                              className={`form-control shadow-none mt-2`}
                              name="domainName"
                              type="text"
                              required
                              value={domainNameField}
                              onChange={(e) => {
                                const domainFormat = e.currentTarget.value;
                                // removeSpace(domainFormat);
                                validateDomain(domainFormat);
                              }}
                            />
                            <div className={`error invalid-feedback`}>
                              {errorDomainName}
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-12">
                            <InputField
                              label="Project description"
                              name="projectDescription"
                              type="text"
                            />
                          </div>
                        </div>

                        <label
                          className="font-weight-normal mt-4"
                          htmlFor="domainName"
                        >
                          Time of completion
                          <span className={`text-err`}>*</span>
                        </label>
                        <div className="row mt-3">
                          <div className="col-6">
                            <Select
                              options={QUARTER}
                              className="mt-2"
                              name={"quarterCompletion"}
                              id="quarterCompletion"
                              onChange={(e: any) => {
                                setFieldValue("quarterCompletion", e.value);
                              }}
                              handleChange={handleChange}
                              placeholder="Quarter"
                              styles={colourStyles}
                            // defaultValue={activeStep}
                            // value={activeStep}
                            />
                          </div>
                          <div className="col-6">
                            <Select
                              options={YEAR_OPTIONS}
                              className="mt-2"
                              name={"yearCompletion"}
                              id="yearCompletion"
                              onChange={(e: any) => {
                                setFieldValue("yearCompletion", e.value);
                              }}
                              styles={colourStyles}
                              handleChange={handleChange}
                              placeholder="Year Completion"
                            // defaultValue={activeStep}
                            // value={activeStep}
                            />
                          </div>
                        </div>

                        <div className="row mt-3">
                          <div className="col-12">
                            <InputField
                              label="Lead developer introduction"
                              name="projectOwnerIntroduction"
                              type="text"
                            />
                          </div>
                        </div>

                        <div className="row mt-3">
                          <div className="col-12">
                            <label>
                              Status<span className={`text-err`}>*</span>
                            </label>
                            <Select
                              options={STATUS_PROJECT}
                              className="mt-2"
                              name={"status"}
                              id="status"
                              onChange={(e: any) => {
                                const step = {
                                  label: e.label,
                                  value: e.value,
                                };
                                setFieldValue("status", e.value);
                              }}
                              styles={colourStyles}
                              handleChange={handleChange}
                            // defaultValue={activeStep}
                            // value={activeStep}
                            />
                          </div>
                        </div>

                        <h4 className="font-weight-normal mt-4">Address</h4>
                        <div className="row mt-3">
                          <div className="col-6">
                            <label>City</label>
                            <Select
                              name="city"
                              onChange={(e) => setCity(e)}
                              options={cities}
                              value={city}
                              styles={{
                                menu: colourStyles.menu,
                                menuList: colourStyles.menuList,
                                control: (base) => ({
                                  ...base,
                                  border: `1px solid #e9ecef`,
                                  marginTop: "0.5rem",
                                }),
                              }}
                            />
                          </div>
                          <div className="col-6">
                            <label>District</label>
                            <Select
                              name="district"
                              onChange={(e) => setDistrict(e)}
                              options={districts}
                              value={district}
                              styles={{
                                menu: colourStyles.menu,
                                menuList: colourStyles.menuList,
                                control: (base) => ({
                                  ...base,
                                  border: `1px solid #e9ecef`,
                                  marginTop: "0.5rem",
                                }),
                              }}
                            />
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-6">
                            <label>Ward</label>
                            <Select
                              name="ward"
                              onChange={(e) => setWard(e)}
                              options={wards}
                              value={ward}
                              styles={{
                                menu: colourStyles.menu,
                                menuList: colourStyles.menuList,
                                control: (base) => ({
                                  ...base,
                                  border: `1px solid #e9ecef`,
                                  marginTop: "0.5rem",
                                }),
                              }}
                            />
                          </div>
                          <div className="col-6">
                            <InputField
                              label="Address"
                              name="address"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="text-center mt-3">
                          <button className="btn btn-dark" type="reset">
                            Reset
                          </button>
                          <a
                            className={`
                          ${$("input[name=projectName]").val()}
                          ${errorDomainName}
                          ${$("input[name=projectName]").val() !== "" &&
                                $("input[name=projectName]").val() !== undefined &&
                                $("input[name=domainName]").val() !== "" &&
                                $("input[name=domainName]").val() !== undefined &&
                                errorDomainName === ""
                                ? `notDisable`
                                : `disabled`
                              } btn btn-danger ml-3`}
                            onClick={(e) => {
                              setshowStep2(true);
                              setshowStep1(false);
                            }}
                          >
                            Next
                          </a>
                        </div>
                      </div>
                      <div className={`${showStep2 ? `step2` : `d-none`}`}>
                        <h4 className="font-weight-normal">
                          Project site template
                        </h4>
                        <div className="d-flex justify-content-between mt-4">
                          <div className="templateView w-48">
                            <div
                              className={`templateView-box ${templChose === "classic" ? `selected` : ``
                                }`}
                            >
                              <i className="ti-check-box"></i>
                              <div className="templateView--btn">
                                {/* <a className="btn btn-dark" type="reset">
                                  View
                                </a> */}
                                <a
                                  className="btn btn-danger ml-3"
                                  onClick={(e) => {
                                    settemplChose("classic");
                                  }}
                                >
                                  Select
                                </a>
                              </div>
                            </div>
                            <h5 className="text-center mt-3">Classic</h5>
                          </div>

                          <div className="templateView w-48">
                            <div
                              className={`templateView-box ${templChose === "modern" ? `selected` : ``
                                }`}
                            >
                              <i className="ti-check-box"></i>
                              <div className="templateView--btn">
                                {/* <a className="btn btn-dark" type="reset">
                                  View
                                </a> */}
                                <a
                                  className="btn btn-danger ml-3"
                                  onClick={(e) => {
                                    settemplChose("modern");
                                  }}
                                >
                                  Select
                                </a>
                              </div>
                            </div>
                            <h5 className="text-center mt-3">Modern</h5>
                          </div>
                        </div>

                        <div className="text-center mt-4">
                          <a
                            className="btn btn-dark"
                            type="reset"
                            onClick={(e) => {
                              setshowStep2(false);
                              setshowStep1(true);
                            }}
                          >
                            Back
                          </a>
                          <button className="btn btn-danger ml-3" type="submit">
                            Create
                          </button>
                        </div>
                      </div>
                    </Form>
                  </div>
                );
              }}
            </Formik>
          </Modal>

          <div className="row el-element-overlay">
            {numbProjects > 0
              ? projects?.map((project) => (
                <div key={project.id} className="col-lg-3 col-md-6">
                  <div className="card">
                    <div className="el-card-item">
                      <div className="el-card-avatar el-overlay-1">
                        <img
                          src={
                            project.thumbnail
                              ? project.thumbnail
                              : "/images/project-placeholder.jpg"
                          }
                          alt="user"
                        />
                        <div className="el-overlay">
                          <ul className="el-info">
                            <li>
                              <a
                                // target="_blank"
                                className="btn default btn-outline image-popup-vertical-fit"
                                // href={`https://dreamlands.vn/site/${project.domainName}`}
                                onClick={() =>
                                  generateLink(project.id, project.domainName)
                                }
                              >
                                <i className="fas fa-link"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                className="btn default btn-outline"
                                href={`projects/${project.id}`}
                              >
                                <i className="fas fa-cog"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="el-card-content">
                        <h3 className="box-title">{project.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))
              : emptyStarte}
          </div>
          <Paginate
            total={numbProjects}
            pageSize={Number(pageSizeProjects)}
            pageIndex={Number(pageIndexProjects)}
            onChange={handlePaginate}
          />
        </div>
      </div>

      <footer className="footer">© 2022 CRM Dreamland</footer>
    </div>
  );
};

export default ProjectsContainer;

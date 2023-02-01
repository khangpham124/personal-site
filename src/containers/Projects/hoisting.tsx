import React, { useState, useEffect } from "react";
import SelectField from "../../components/ModalCreate/SelectField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TRootState } from "src/state-management/reducers";
import axios from "axios";
import toastr from "toastr";
import { useDispatch, useSelector } from "react-redux";
import { updateProjectAction } from "src/state-management/actions/projects";
import { useRouter } from "next/router";
import { companyAPI } from "../../services/identity/company";
import { crmPlatform, baseUrl } from "src/services/identity";
import Cookies from "js-cookie";

const HoistingContainer: React.FC = () => {
  const [errorDomainName, setErrorDomainName] = useState("");
  const companyID = String(Cookies.get("companyID"));
  const projectDetail = useSelector(
    (state: TRootState) => state.projects.detail
  );
  const router = useRouter();
  const { projectDetail: projectId } = router.query;
  const dispatch = useDispatch();
  const servicesCompanyAPI = new companyAPI();

  const [domainNameField, setDomainNameField] = useState("");
  const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");
  useEffect(() => {
    servicesCompanyAPI.getDetailCompany(companyID).then((items) => {
      setListUsers(items?.data?.items);
      items.data.items.map((item: any) => ({
        value: item.uuid,
        label: item.firstName + " " + item.lastName,
      }));
    });
  }, []);
  const getDomainNameField = projectDetail?.domainName;
  const [listUsers, setListUsers] = useState<any[]>([]);

  const validateHoisting = Yup.object({
    domainName: Yup.string()
      .max(50, "Domain name must be at most 50 characters")
      .required("Required"),
    assign: Yup.mixed().required("Required").nullable(),
  });

  const optionAssign = listUsers?.map((item: any) => ({
    value: item.uuid,
    label: item.firstName + " " + item.lastName,
  }));

  const validateDomain = (domain: string) => {
    let formatDomain = domain.replace(/ /g, "");
    axios
      .get(
        `${baseUrl}${crmPlatform}/crm-projects/is-project-domain-available/${formatDomain}`
      )
      .then((res) => {
        if (res.status === 200) {
          if (!res.data.isAvailable) {
            setErrorDomainName(
              "This domain name has been used, please choose different name."
            );
            setDomainNameField(getDomainNameField);
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

  return (
    <div className="card-body tab-pane" id="hosting">
      {projectDetail && (
        <Formik
          initialValues={{
            domainName: projectDetail?.domainName,
            assign: "",
          }}
          // validationSchema={validateHoisting}
          onSubmit={(values) => {
            const body = {
              domainName:
                domainNameField !== projectDetail?.domainName
                  ? domainNameField
                  : projectDetail?.domainName,
              assign: values.assign,
              companyId: companyID,
            };

            dispatch(
              updateProjectAction.request(projectId as string, body, () => {
                toastr.success("Save successfully");
              })
            );
          }}
        >
          {(props) => {
            const { handleBlur } = props;
            const prefixDomain = "www.dreamlands.vn/site/";

            return (
              <div>
                <Form>
                  <div className="row">
                    <div className="col-12">
                      {/* <InputField
                              label="System Generated Domain"
                              name="domainName"
                              type="text"
                              prefix={prefixDomain}
                              onChange={(e) => {
                                const domainFormat = e.currentTarget.value;
                                domainFormat.indexOf(" ") >= 0
                                  ? setErrorDomainName(
                                      "Domain name must not have space"
                                    )
                                  : setErrorDomainName("");
                                validateDomain(domainFormat);
                              }}
                            /> */}
                      <label>System Generated Domain</label>
                      <div className="d-flex align-items-center">
                        <div>www.dreamlands.vn/site/</div>
                        <input
                          className={`form-control shadow-none mt-2 ml-2`}
                          name="domainName"
                          type="text"
                          required
                          value={
                            domainNameField !== ""
                              ? domainNameField
                              : getDomainNameField
                          }
                          onChange={(e) => {
                            const domainFormat = e.currentTarget.value;
                            validateDomain(domainFormat);
                          }}
                        />
                        <a
                          target="_blank"
                          className="btn default btn-outline image-popup-vertical-fit"
                          href={`${process.env.REACT_DOMAIN_URL}/site/${getDomainNameField}`}
                        >
                          <i className="fas fa-link"></i>
                        </a>
                      </div>

                      <div className={`error invalid-feedback`}>
                        {errorDomainName}
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-12">
                      <SelectField
                        label="Assign lead owner to"
                        name="assign"
                        options={optionAssign}
                      />
                    </div>
                  </div>

                  <p>
                    This user will be assigned as the lead owner when a customer
                    leaves his/her information at the form in the project site
                  </p>
                  <div className="text-left mt-3">
                    <button className="btn btn-danger" type="submit">
                      Create
                    </button>
                  </div>
                </Form>
              </div>
            );
          }}
        </Formik>
      )}
    </div>
  );
};

export default HoistingContainer;

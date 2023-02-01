import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import InputField from "../../components/ModalCreate/InputField";
import { Formik, Form } from "formik";
import { TRootState } from "src/state-management/reducers";
import { updateProjectAction } from "src/state-management/actions/projects";
import toastr from "toastr";
import Modal from "../../components/ModalCreate";
import serviceProjectsAPI from "src/services/identity/projects";
import Select from "react-select";
import { STATUS_PROJECT, QUARTER, YEAR_OPTIONS } from "./constants";
import SelectField from "../../components/ModalCreate/SelectField";
import { TUpdateProjectBody } from "services/identity/projects/types";
import Cookies from "js-cookie";

const GeneralContainer: React.FC = () => {
  const { t: translator } = useTranslation();

  const dispatch = useDispatch();
  const router = useRouter();
  const { projectDetail: projectId } = router.query;
  const projectDetail = useSelector(
    (state: TRootState) => state.projects.detail
  );

  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");
  const companyID = Cookies.get("companyID");
  const handleDeleteProject = () => {
    if (projectId) {
      serviceProjectsAPI.deleteProject(String(projectId)).then(() => {
        toastr.success(
          `${translator("project_page.text_delete_project_successfully")}`
        );
        setShowModalDelete(false);
        setTimeout(() => {
          router.push(`/projects`);
        }, 1000);
      });
    }
  };

  let defaultStatusLabel =
    projectDetail?.status === "NEW"
      ? `New`
      : projectDetail?.status === "IN_PROGRESS"
      ? `In progress`
      : projectDetail?.status === "HANDED_OVER"
      ? `Handed over`
      : projectDetail?.status === "UNDER_CONSTRUCTION"
      ? `Under construction`
      : projectDetail?.status === "STOPPED"
      ? `Stopped`
      : ``;

  const defaultStatus = {
    label: defaultStatusLabel,
    value: projectDetail?.status,
  };

  const defaultQuarter = {
    label: projectDetail?.quarterCompletion
      ? `Quarter ${projectDetail?.quarterCompletion}`
      : "",
    value: projectDetail?.quarterCompletion
      ? projectDetail?.quarterCompletion
      : "",
  };

  const defaultYear = {
    label: projectDetail?.yearCompletion ? projectDetail?.yearCompletion : ``,
    value: projectDetail?.yearCompletion ? projectDetail?.yearCompletion : ``,
  };

  return (
    <div className="card-body tab-pane active" id="general">
      {projectDetail && (
        <Formik
          initialValues={{
            projectName: projectDetail?.name,
            address: `${projectDetail?.address ? projectDetail?.address : ""} ${
              projectDetail?.ward?.name ? "," + projectDetail?.ward?.name : ""
            } ${
              projectDetail.district?.name
                ? "," + projectDetail.district?.name
                : ""
            } ${projectDetail.city?.name ? projectDetail.city?.name : ""}`,
            email: projectDetail?.email,
            hotline: projectDetail?.hotline,
            workingHour: projectDetail?.workingHours,
            projectDescription: projectDetail?.projectDescription,
            projectOwnerIntroduction: projectDetail?.projectOwnerIntroduction,
            status: projectDetail?.status.toLowerCase,
            quarterCompletion: projectDetail?.quarterCompletion,
            yearCompletion: projectDetail?.yearCompletion,
          }}
          // validationSchema={validateProjectDetail}
          onSubmit={(values) => {
            const body: TUpdateProjectBody = {
              name: values.projectName,
              address: values.address,
              email: values.email,
              hotline: values.hotline,
              workingHours: values.workingHour,
              projectDescription: values.projectDescription,
              projectOwnerIntroduction: values.projectOwnerIntroduction,
              status: values.status,
              companyId: companyID,
              quarterCompletion: values?.quarterCompletion,
              yearCompletion: values?.yearCompletion,
            };

            dispatch(
              updateProjectAction.request(projectId as string, body, () => {
                toastr.success("Save successfully");
              })
            );
          }}
        >
          {(props) => {
            const { handleBlur, handleChange, setFieldValue } = props;
            return (
              <Form>
                <h4 className="text-themecolor">Projects</h4>
                <div className="mt-4">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <InputField
                        label="Project name"
                        name="projectName"
                        type="text"
                        handleBlur={handleBlur}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Status</label>
                      <Select
                        options={STATUS_PROJECT}
                        className="mt-2"
                        name={"status"}
                        onChange={(e) => {
                          const step = {
                            label: e.label,
                            value: e.value,
                          };
                          setFieldValue("status", e.value);
                        }}
                        handleChange={handleChange}
                        defaultValue={defaultStatus}
                        // value={activeStep}
                      />
                      {/* <SelectField
                        label={`status`}
                        name="status"
                        // value={selectLeadOwner}
                        options={STATUS_PROJECT}
                      /> */}
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <InputField
                        label="Hotline"
                        name="hotline"
                        type="text"
                        handleBlur={handleBlur}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <InputField
                        label="Email"
                        name="email"
                        type="text"
                        handleBlur={handleBlur}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <InputField
                        label="Working hour"
                        name="workingHour"
                        type="text"
                        handleBlur={handleBlur}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <InputField
                        label="Address"
                        name="address"
                        type="text"
                        handleBlur={handleBlur}
                      />
                    </div>
                  </div>

                  <label>Time of completion</label>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <Select
                        options={YEAR_OPTIONS}
                        className="mt-2"
                        name={"yearCompletion"}
                        id="yearCompletion"
                        onChange={(e: any) => {
                          setFieldValue("yearCompletion", e.value);
                        }}
                        handleChange={handleChange}
                        placeholder="Year Completion"
                        defaultValue={defaultYear}
                        // defaultValue={activeStep}
                        // value={activeStep}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <Select
                        options={QUARTER}
                        className="mt-2"
                        name={"quarterCompletion"}
                        onChange={(e: any) => {
                          const step = {
                            label: e.label,
                            value: e.value,
                          };
                          setFieldValue("quarterCompletion", e.value);
                        }}
                        handleChange={handleChange}
                        defaultValue={defaultQuarter ? defaultQuarter : null}
                        placeholder="Quarter"
                        // value={activeStep}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <InputField
                        label="Project description"
                        name="projectDescription"
                        type="text"
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <InputField
                        label="Project Owner Introduction"
                        name="projectOwnerIntroduction"
                        type="text"
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-info mt-3">
                    <i className="fa fa-plus-circle"></i> Update
                  </button>
                  <button
                    className="btn btn-dark ml-3 mt-3"
                    type="reset"
                    onClick={() => {
                      setShowModalDelete(true);
                    }}
                  >
                    {translator("lead_page.btn_delete")}
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}

      <Modal
        isOpen={showModalDelete}
        onRequestClose={() => setShowModalDelete(false)}
        modal_name={`${translator("lead_page.btn_delete")} project`}
        label="Name"
      >
        <h5 className="mt-3">
          {`${translator("project_page.text_delete_project")}`}{" "}
          <strong>{projectDetail?.name}</strong> ?
        </h5>
        <div className="text-center mt-4">
          <button
            className="btn btn-dark"
            type="reset"
            onClick={() => {
              setShowModalDelete(false);
            }}
          >
            {translator("lead_page.btn_no")}
          </button>
          <button
            className="btn btn-danger ml-3"
            onClick={() => {
              handleDeleteProject();
            }}
          >
            {translator("lead_page.btn_delete")}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default GeneralContainer;

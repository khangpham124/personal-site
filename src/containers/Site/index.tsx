import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Select from "react-select";
import Paginate from "../../components/Paginate";
import { LEAD_STATUSES, LEAD_SOURCES } from "./constants";
import Modal from "../../components/ModalCreate";
import InputField from "../../components/ModalCreate/InputField";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import SelectField from "../../components/ModalCreate/SelectField";
import { TRootState } from "src/state-management/reducers";
import { fetchLeadsAction, uiActions } from "src/state-management/actions";
import { EPaginate } from "utils/types";
import { EProjectsActions } from "src/state-management/actions/projects/constants";
import { createLeadAction } from "src/state-management/actions/leads";
import { RATING } from "./constants";
import {
  createProjectAction,
  fetchProjectsAction,
} from "src/state-management/actions/projects";
import Cookies from "js-cookie";

const ProjectsContainer: React.FC = () => {
  const dispatch = useDispatch();
  const projects = useSelector(
    (state: TRootState) => state.projects.all?.items
  );

  const numbProjects = useSelector(
    (state: TRootState) => state.projects.all?.totalItems
  );

  const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");
  const companyID = String(Cookies.get("companyID"));

  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(EPaginate.DEFAULT_PAGE_INDEX);

  const validate = Yup.object({
    projectName: Yup.string()
      .max(100, "Project name must be at most 100 characters")
      .required("Required"),
    address: Yup.string()
      .max(100, "Address must be at most 100 characters")
      .required("Required"),
    email: Yup.string().email("Must be a valid email").required("Required"),
    hotline: Yup.string()
      .required("Required")
      .matches(/^[0-9\+\(\)]+$/, "Must be only digits, (, ), +"),
    workingHour: Yup.string()
      .max(100, "Working hour must be at most 100 characters")
      .required("Required"),
    domainName: Yup.string()
      .max(100, "Domain name must be at most 100 characters")
      .required("Required"),
    projectDescription: Yup.string().required("Required"),
    projectOwnerIntroduction: Yup.string().required("Required"),
  });

  // const handlePaginate = ({ selected }) => {
  //   setCurrentPage(selected);
  //   dispatch(
  //     fetchLeadsAction.request(selected, EPaginate.COMMON_PAGE_SIZE, companyID)
  //   );
  // };

  const fetchProjects = (
    pageIndex: number,
    pageSize: number,
    companyId: string
  ) => {
    dispatch(fetchProjectsAction.request(pageIndex, pageSize, companyID));
  };

  const handleCreateProject = (values: any) => {
    const body = {
      name: values?.projectName,
      address: values?.address,
      email: values?.email,
      hotline: values?.hotline,
      workingHours: values?.workingHour,
      domainName: values?.domainName,
      projectDescription: values?.projectDescription,
      projectOwnerIntroduction: values?.projectOwnerIntroduction,
      companyId: companyID,
    };

    dispatch(
      createProjectAction.request(body, () => {
        fetchProjects(
          EPaginate.DEFAULT_PAGE_INDEX,
          EPaginate.COMMON_PAGE_SIZE,
          companyID
        );
        setShowModal(false);
      })
    );
  };

  useEffect(() => {
    fetchProjects(
      EPaginate.DEFAULT_PAGE_INDEX,
      EPaginate.COMMON_PAGE_SIZE,
      companyID
    );
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(uiActions.resetActionStatus(EProjectsActions.FETCH_PROJECTS));
      dispatch(uiActions.resetActionStatus(EProjectsActions.CREATE_PROJECT));
    };
  }, [dispatch]);

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
            onRequestClose={() => setShowModal(false)}
            modal_name="NEW PPROJECT"
            label="Name"
          >
            <Formik
              initialValues={{
                projectName: "",
                address: "",
                email: "",
                hotline: "",
                workingHour: "",
                domainName: "",
                projectDescription: "",

                projectOwnerIntroduction: "",
              }}
              validationSchema={validate}
              onSubmit={handleCreateProject}
            >
              {() => (
                <div>
                  <Form>
                    <h4 className="font-weight-normal">Product information</h4>
                    <div className="row">
                      <div className="col-6">
                        <InputField
                          label="Project name"
                          name="projectName"
                          type="text"
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
                    <div className="row">
                      <div className="col-6">
                        <InputField label="Email" name="email" type="text" />
                      </div>
                      <div className="col-6">
                        <InputField
                          label="Hotline"
                          name="hotline"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-6">
                        <InputField
                          label="Working hour"
                          name="workingHour"
                          type="text"
                        />
                      </div>
                      <div className="col-6">
                        <InputField
                          label="Domain name"
                          name="domainName"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <InputField
                          label="Project description"
                          name="projectDescription"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <InputField
                          label="Project owner description"
                          name="projectOwnerIntroduction"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="text-center mt-3">
                      <button className="btn btn-dark" type="reset">
                        Reset
                      </button>
                      <button className="btn btn-danger ml-3">
                        Save &amp; New
                      </button>
                      <button className="btn btn-danger ml-3" type="submit">
                        Create
                      </button>
                    </div>
                  </Form>
                </div>
              )}
            </Formik>
          </Modal>

          <div className="row el-element-overlay">
            {Number(numbProjects) > 0
              ? projects?.map((project) => (
                  <div key={project.id} className="col-lg-3 col-md-6">
                    <div className="card">
                      <div className="el-card-item">
                        <div className="el-card-avatar el-overlay-1">
                          <img
                            src="/images/project-placeholder.jpg"
                            alt="user"
                          />
                          <div className="el-overlay">
                            <ul className="el-info">
                              <li>
                                <a
                                  className="btn default btn-outline image-popup-vertical-fit"
                                  href="../assets/images/users/1.jpg"
                                >
                                  <i className="far fa-eye"></i>
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
        </div>
      </div>

      <footer className="footer">© 2022 CRM Dreamland</footer>
    </div>
  );
};

export default ProjectsContainer;

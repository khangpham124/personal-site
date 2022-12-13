import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../components/ModalCreate/InputField";
import Router from "next/router";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import SelectField from "../../components/ModalCreate/SelectField";
import { uiActions } from "src/state-management/actions";
import { EPaginate } from "utils/types";
import { ELeadsActions } from "src/state-management/actions/leads/constants";
import { TRootState } from "src/state-management/reducers";
import { fetchProjectsAction } from "src/state-management/actions/projects";
import {
  convertLeadToCustomerAction,
  fetchLeadAction,
  updateLeadAction,
} from "src/state-management/actions/leads";
import { GENDERS_EN, GENDERS_VN, RATING_EN, RATING_VN } from "./constants";
import {
  LEAD_SOURCES_EN,
  LEAD_SOURCES_VN,
  LEAD_STATUSES_EN,
  LEAD_STATUSES_VN,
} from "./constants";
import DatePickerField from "components/ModalCreate/DatePicker";
import moment from "moment";
import {
  createLogCallAction,
  fetchLogCallsAction,
} from "src/state-management/actions/log-calls";
import { ELogCallsActions } from "src/state-management/actions/log-calls/constants";
import { FileUploader } from "react-drag-drop-files";
import Select from "react-select";
import toastr from "toastr";
import Cookies from "js-cookie";
import Modal from "../../components/ModalCreate";
import { useTranslation } from "react-i18next";
import {
  createCommentAction,
  fetchCommentsByIdAction,
} from "src/state-management/actions/comments";
import { ECommentsActions } from "src/state-management/actions/comments/constants";
import axios from "axios";
import { LeadAPI } from "../../services/identity/lead-api";
import ReactTooltip from "react-tooltip";
import serviceProductsAPI from "src/services/identity/products";
import { baseUrl } from "src/services/identity";
import { ProjectAPI } from "../../services/identity/project-api";
import { companyAPI } from "../../services/identity/company";
const servicesProjectAPI = new ProjectAPI();
const servicesLeadAPI = new LeadAPI();

type TLeadsContainerProps = {};

const LeadDetailContainer: React.FC<TLeadsContainerProps> = () => {
  const router = useRouter();
  const { leadDetail: leadId } = router.query;
  const { t: translator } = useTranslation();
  const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");
  const langCookies = Cookies.get("lang");
  const companyID = Cookies.get("companyID");
  const companyName = Cookies.get("companyName");
  const dispatch = useDispatch();
  const [showSplitNameFields, setShowSplitNameFields] = useState(false);
  const [projectArr, setProjectArr] = useState<any[]>([]);
  const [listUsers, setListUsers] = useState<any[]>([]);
  const [selectLeadOwnerLabel, setSelectLeadOwnerLabel] = useState("");
  const [selectLeadOwnerValue, setSelectLeadOwnerValue] = useState("");

  const [valueProjectInterested, setValueProjectInterested] = useState({
    label: "",
    value: "",
  });
  const [valueProductInterest, setValueProductInterest] = useState("");
  const servicesCompanyAPI = new companyAPI();
  const [projectList, setProjectList] = useState<any[]>([]);

  const fetchProjects = (
    pageIndex: number,
    pageSize: number,
    companyId: string
  ) => {
    servicesProjectAPI
      .fetchProjects(pageIndex, pageSize, companyId)
      .then((items) => {
        setProjectList(items.items);
      });
  };

  const leadById = useSelector((state: TRootState) => state.leads.leadById);
  const logCalls = useSelector((state: TRootState) => state.logCalls.all);

  const [selectedLeadOwner, setSelectedLeadOwner] = useState(null);

  const [listAttachments, setlistAttachments] = useState<any[]>([]);

  const [showSub, setShowSub] = useState("");
  const [showSubLabelThird, setShowSubLabelThird] = useState("");
  const [showSubLabelFourd, setShowSubLabelFourd] = useState("");
  const [activeStatus, setActiveStatus] = useState("");

  useEffect(() => {
    let currrentURL = window.location.href;
    let leadIdUrl = currrentURL.split("/");
    let leadId = leadIdUrl[leadIdUrl.length - 1];
    servicesLeadAPI.getDetailLead(leadId).then((items) => {
      setlistAttachments(items?.attachments);
    });

    servicesCompanyAPI.getDetailCompany(String(companyID)).then((items) => {
      setListUsers(items?.data?.items);
      items.data.items.map((item: any) => ({
        value: item.uuid,
        label: `${item.firstName !== null ? item.firstName : ""} ${
          item.lastName !== null ? item.lastName : ``
        }`,
      }));
    });
  }, []);

  const optionLeadOwner = listUsers
    ?.filter((item) => item.user !== null)
    .map((item: any) => ({
      value: item.user?.id,
      label: `${item.user?.firstName !== null ? item.user?.firstName : ""} ${
        item.user?.lastName !== null ? item.user?.lastName : ""
      }`,
    }));

  const selectLeadOwner = listUsers
    .filter((item) => item.user?.id === leadById?.leadOwner?.id)
    .map((item: any) => ({
      value: item.user?.id,
      label: `${item.user?.firstName !== null ? item.user?.firstName : ""} ${
        item.user?.lastName !== null ? item.user?.lastName : ""
      }`,
    }));

  const comments = useSelector(
    (state: TRootState) => state.comments.fetchCommentsByIdResponse
  )?.items;

  const validate = Yup.object({
    // leadOwner: Yup.mixed().required("Required").nullable(),
    phone: Yup.number()
      .typeError("Only allow integer number")
      .integer("Please enter a valid amount without decimal values")
      .required("Required"),
    name: Yup.string().required("Required"),
    firstName: Yup.string().required("Required"),
    // createdBy: Yup.string().required("Required"),
    // lastModified: Yup.string().required("Required"),
    // dateOfBirth: Yup.string().required("Required"),
    // email: Yup.string().email("Must be a valid email").required("Required"),
    // rating: Yup.mixed().required("Required").nullable(),
    // status: Yup.mixed().required("Required").nullable(),
    // productInterest: Yup.string().required("Required"),
    // note: Yup.string().max(1000).required("Required"),
    // street: Yup.string().required("Required"),
    // ward: Yup.string().required("Required"),
    // district: Yup.string().required("Required"),
    // city: Yup.string().required("Required"),
    // socialMedia: Yup.string().max(250).required("Required"),
    // gender: Yup.mixed().required("Required").nullable(),
  });

  const validateFormAddLogCall = Yup.object({
    minute: Yup.string().required("Required"),
    second: Yup.string().required("Required"),
    note: Yup.string().required("Required"),
  });

  const validateComment = Yup.object({
    comment: Yup.string()
      .max(500, "Maximum 500 characters")
      .required("Required"),
  });

  const handleBlur = function (value: any) {
    let fieldName = value.target.name;
    let fieldValue = value.target.defaultValue;
    console.log(fieldName, fieldValue);
  };

  useEffect(() => {
    if (leadId) {
      dispatch(fetchLeadAction.request(leadId as string));
      dispatch(fetchLogCallsAction.request("lead", leadId as string, 1, 500));
      dispatch(
        fetchCommentsByIdAction.request(leadId as string, {
          pageIndex: 1,
          pageSize: 500,
        })
      );
    }
  }, [leadId]);

  useEffect(() => {
    return () => {
      dispatch(uiActions.resetActionStatus(ELeadsActions.FETCH_LEAD));
      dispatch(uiActions.resetActionStatus(ELogCallsActions.FETCH_LOG_CALLS));
      dispatch(uiActions.resetActionStatus(ELogCallsActions.CREATE_LOG_CALL));
      dispatch(
        uiActions.resetActionStatus(ECommentsActions.FETCH_COMMENTS_BY_ID)
      );
    };
  }, [dispatch]);

  const [file, setFile] = useState<any[]>([]);

  function formatDate(date: any) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("-");
  }

  const handleFileChange = (file: any) => {
    const attachments = file.target;

    let fileName = file.name;
    let fileSize = file.size;
    if (fileSize < 20480000) {
      let fileDate = formatDate(file.lastModifiedDate);
      let fileNameArr = fileName.split(".");
      let fileType = fileNameArr[fileNameArr.length - 1];
      let item = {
        name: fileName,
        fileSize: fileSize,
        fileDate: fileDate,
        fileType: fileType,
      };
      listAttachments.push(item);
      setFile(file);
      setlistAttachments(listAttachments);
      setErrUpload("");
      const bodyForm = new FormData();
      bodyForm.append("file", file);
      // for (var pair of bodyForm.entries()) {
      //   console.log("bodyForm", pair[0] + ", " + pair[1]);
      // }
      axios
        .post(`${baseUrl}/crm/leads/attachment/${leadId}`, bodyForm, {
          headers: {
            Authorization: `Bearer ${Cookies.get("crm_token")}`,
          },
        })
        .then((response) => {
          servicesLeadAPI.getDetailLead(leadId).then((items) => {
            setlistAttachments(items?.attachments);
          });
        })
        .catch(function (error) {
          toastr.error("System has failed");
        });
    } else {
      setErrUpload("Uploaded files must be smaller than 20mb");
    }

    // postLeadAttachment(String(leadId), bodyForm);
  };

  const [errUpload, setErrUpload] = useState("");
  const onSizeError = (file: any) => {
    setErrUpload("Uploaded files must be smaller than 20mb");
  };

  const removeAttachment = (index: number) => {
    let list = [...listAttachments];
    list.splice(index, 1);
    setlistAttachments(list);
    setFile(listAttachments);
  };

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [initialDataExisted, setInitialDataExisted] = useState<boolean>(false);
  const [steps, setSteps] = useState<any[]>([]);
  const [subSteps, setSubSteps] = useState<any[]>([]);
  const [selectSubSteps, setSelectSubSteps] = useState<any[]>([]);
  const [activeStep, setActiveStep] = useState<any>({ label: "", value: "" });
  const [activeSubStep, setActiveSubStep] = useState<any>({
    label: "",
    value: "",
  });
  const [productOptions, setProductOptions] = useState<any[]>([]);
  const [showSelectSub, setShowSelectSub] = useState(false);

  const changeStatusLead = ({ label, value, parent }) => {
    if (value !== "30CONSULTING" && value !== "40TRANSACTED") {
      setInitialDataExisted(true);
      if (value !== activeStep?.value) {
        const newSteps = [...steps].map((step) => ({ ...step, active: false }));
        const stepNeedUpdateIndex = newSteps.findIndex(
          (step) => step.value === value
        );

        const subStepActive = selectSubSteps.findIndex(
          (step) => step.value === value
        );

        newSteps[
          stepNeedUpdateIndex !== -1 ? stepNeedUpdateIndex : parent
        ].active = true;

        setSteps(newSteps);
        setActiveStep(
          newSteps[stepNeedUpdateIndex !== -1 ? stepNeedUpdateIndex : parent]
        );
        setActiveSubStep(selectSubSteps[subStepActive]);
        setActiveStatus(value);
      }
      setShowSub("");
    } else {
      setShowSub(value);
      setShowSelectSub(true);
      let parentCode = 0;
      if (value === "30CONSULTING") {
        parentCode = 3;
      }

      if (value === "40TRANSACTED") {
        parentCode = 4;
      }
      const optionsSubSteps = subSteps
        .filter((item) => item.parent === parentCode)
        .map((subStep: any) => ({
          label: subStep.label,
          value: subStep.value,
          parent: subStep.parent,
        }));
      setSelectSubSteps(optionsSubSteps);
    }
  };

  const handleDeleteLead = () => {
    servicesLeadAPI.deleteLead(String(leadById?.id)).then(() => {
      toastr.success(
        `${translator("lead_page.text_delete_lead_successfully")}`
      );
      setShowModalDelete(false);
      setTimeout(() => {
        Router.push(`/leads`);
      }, 5000);
    });
  };

  const stepStatus = [
    {
      label: translator("lead_page.stt_new_lead"),
      value: "00NEW",
      active: leadById?.leadStatus === "00NEW",
      code: 0,
    },
    {
      label: translator("lead_page.stt_contacted"),
      value: "10CONTACTED",
      active: leadById?.leadStatus === "10CONTACTED",
      code: 1,
    },
    {
      label: translator("lead_page.stt_appointed"),
      value: "20APPOINTED",
      active: leadById?.leadStatus === "20APPOINTED",
      code: 2,
    },
    {
      label: translator("lead_page.stt_consulting"),
      value: "30CONSULTING",
      active:
        leadById?.leadStatus === "30CONSULTING" ||
        leadById?.leadStatus === "31ONEONONE" ||
        leadById?.leadStatus === "32GOTOPJLOCATION",
      code: 3,
    },
    {
      label: translator("lead_page.stt_transacted"),
      value: "40TRANSACTED",
      active:
        leadById?.leadStatus === "40TRANSACTED" ||
        leadById?.leadStatus === "41BOOKED" ||
        leadById?.leadStatus === "42DEPOSITED",
      code: 4,
    },
  ];

  const subStepStatus = [
    {
      label: "One On One",
      value: "31ONEONONE",
      active: leadById?.leadStatus === "30CONSULTING",
      parent: 3,
    },
    {
      label: "Go To Project Location",
      value: "32GOTOPJLOCATION",
      active: leadById?.leadStatus === "30CONSULTING",
      parent: 3,
    },
    {
      label: "Booked",
      value: "41BOOKED",
      active: leadById?.leadStatus === "40TRANSACTED",
      parent: 4,
    },
    {
      label: "Deposited",
      value: "42DEPOSITED",
      active: leadById?.leadStatus === "40TRANSACTED",
      parent: 4,
    },
  ];

  useEffect(() => {
    setSteps(stepStatus);
    setSubSteps(subStepStatus);
    if (leadById) {
      if (
        leadById?.leadStatus === `31ONEONONE` ||
        leadById?.leadStatus === `32GOTOPJLOCATION`
      ) {
        setActiveStep(stepStatus[3]);
        setShowSelectSub(true);
        const optionsSubSteps = subStepStatus
          .filter((item) => item.parent === 3)
          .map((subStep: any) => ({
            label: subStep.label,
            value: subStep.value,
            parent: subStep.parent,
          }));
        setSelectSubSteps(optionsSubSteps);

        setActiveSubStep(
          leadById?.leadStatus
            ? optionsSubSteps[
                optionsSubSteps.findIndex(
                  (step) => step.value === leadById?.leadStatus
                )
              ]
            : 1
        );
      } else if (
        leadById?.leadStatus === `41BOOKED` ||
        leadById?.leadStatus === `42DEPOSITED`
      ) {
        setActiveStep(stepStatus[4]);
        setShowSelectSub(true);
        const optionsSubSteps = subStepStatus
          .filter((item) => item.parent === 4)
          .map((subStep: any) => ({
            label: subStep.label,
            value: subStep.value,
            parent: subStep.parent,
          }));

        setSelectSubSteps(optionsSubSteps);
        setActiveSubStep(
          leadById?.leadStatus
            ? optionsSubSteps[
                optionsSubSteps.findIndex(
                  (step) => step.value === leadById?.leadStatus
                )
              ]
            : 1
        );
      } else {
        setActiveStep(
          leadById?.leadStatus
            ? stepStatus[
                steps.findIndex((step) => step.value === leadById?.leadStatus)
              ]
            : 1
        );
      }

      if (leadById?.leadStatus === "31ONEONONE") {
        setShowSubLabelThird("One On One");
      }

      if (leadById?.leadStatus === "32GOTOPJLOCATION") {
        setShowSubLabelThird("Go To Project Location");
      }

      if (leadById?.leadStatus === "41BOOKED") {
        setShowSubLabelFourd("BOOKED");
      }

      if (leadById?.leadStatus === "42DEPOSITED") {
        setShowSubLabelFourd("Deposited");
      }

      const productArr: [any?] = [];
      serviceProductsAPI
        .fetchProducts(
          1,
          1000,
          {
            projectId: leadById?.projectInterest?.id,
          },
          companyID
        )
        .then((res) => {
          if (res?.items?.length > 0) {
            res.items.map((i: any) => {
              productArr.push({
                value: i.id,
                label: i.productName,
              });
            });
          }
          setProductOptions(productArr);
        });
    }
  }, [leadById]);

  useEffect(() => {
    if (activeStep && initialDataExisted && leadId) {
      const leadStatus = activeStatus;
      // steps.findIndex((step) => step.value === activeStep.value) + 1;
      dispatch(
        updateLeadAction.request(
          leadId as string,
          { leadStatus: leadStatus },
          () => {
            toastr.success("Changed status successfully");
          },
          () => {
            toastr.error("Something went wrong");
          }
        )
      );
    }
  }, [activeStep]);

  useEffect(() => {
    if (projectList?.length > 0) {
      const projectArr: [any?] = [];
      projectList.map((item) => {
        projectArr.push({
          value: item.id,
          label: item.name,
        });
      });
      setProjectArr(projectArr);
    }
  }, [projectList]);

  useEffect(() => {
    setValueProductInterest("");
    if (valueProjectInterested) {
      const productArr: [any?] = [];
      serviceProductsAPI
        .fetchProducts(
          1,
          1000,
          {
            projectId: valueProjectInterested.value,
          },
          companyID
        )
        .then((res) => {
          if (res?.items?.length > 0) {
            res.items.map((i: any) => {
              productArr.push({
                value: i.id,
                label: i.productName,
              });
            });
          }
        });
      setProductOptions(productArr);
    }
  }, [valueProjectInterested]);

  useEffect(() => {
    fetchProjects(
      EPaginate.DEFAULT_PAGE_INDEX,
      EPaginate.COMMON_PAGE_SIZE,
      String(companyID)
    );
  }, [dispatch]);

  console.log(leadById);

  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-10">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    {leadById?.personalInfo?.firstName}{" "}
                    {leadById?.personalInfo?.lastName}
                  </h4>
                  <div className="row">
                    <div className="col-md-3 col-xs-6 b-r">
                      <strong>{translator("lead_page.col_phone")}</strong>
                      <p className="text-muted">
                        {leadById?.personalInfo?.phoneNumber}
                      </p>
                    </div>
                    <div className="col-md-3 col-xs-6 b-r">
                      <strong>Email</strong>
                      <p className="text-muted">
                        {leadById?.personalInfo?.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <button
                className="btn btn-danger ml-3"
                type="submit"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                {translator("lead_page.btn_convert")}
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ul id="progress">
                {steps.map((step, index) => (
                  <li
                    className={`
                      ${index}
                      ${step.active ? `active` : ``}
                    `}
                  >
                    <p
                      onClick={() => {
                        if (step.value !== 7) {
                          changeStatusLead(step);
                        } else {
                          setShowModal(true);
                        }
                      }}
                    >
                      {step.label}
                      {step.value === "30CONSULTING"
                        ? showSubLabelThird !== ""
                          ? ` (${showSubLabelThird})`
                          : null
                        : null}

                      {showSubLabelFourd !== "" && step.value === "40TRANSACTED"
                        ? ` (${showSubLabelFourd})`
                        : null}
                    </p>
                    {showSub === step.value ? (
                      <ul>
                        {subSteps
                          .filter((item) => item.parent === step.code)
                          .map((item: any) => (
                            <li
                              onClick={() => {
                                // console.log(item);
                                changeStatusLead(item);
                                if (item.parent === 3) {
                                  setShowSubLabelThird(item.label);
                                  setShowSubLabelFourd("");
                                } else if (item.parent === 4) {
                                  setShowSubLabelFourd(item.label);
                                  setShowSubLabelThird("");
                                }
                              }}
                            >
                              <p>{item.label}</p>
                            </li>
                          ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-8 col-xlg-9 col-md-7">
              <div className="card">
                <ul className="nav nav-tabs profile-tab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                    >
                      {`${translator("lead_page.text_detail")}`}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#attachments"
                      role="tab"
                    >
                      {`${translator("lead_page.text_attachments")}`}
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div className="tab-pane active" id="profile" role="tabpanel">
                    <div className={`card-body`}>
                      {leadById && leadById.id === leadId && steps.length > 0 && (
                        <Formik
                          initialValues={{
                            leadOwner: selectLeadOwner[0],
                            phone: leadById?.personalInfo?.phoneNumber,
                            name: `${leadById?.personalInfo?.firstName} ${leadById?.personalInfo?.lastName}`,
                            firstName: leadById?.personalInfo?.firstName,
                            lastName: leadById?.personalInfo?.lastName,
                            email: leadById?.personalInfo?.email,
                            gender:
                              langCookies === "vi"
                                ? GENDERS_VN[leadById?.personalInfo?.gender]
                                : GENDERS_EN[leadById?.personalInfo?.gender],
                            rating:
                              langCookies === "vi"
                                ? RATING_VN[leadById?.rating]
                                : RATING_EN[leadById?.rating],
                            status: activeStep,
                            leadSource:
                              langCookies === "vi"
                                ? LEAD_SOURCES_VN[leadById?.leadSource]
                                : LEAD_SOURCES_EN[leadById?.leadSource],
                            productInterest: {
                              label: leadById?.productInterest?.productName,
                              value: leadById?.productInterest?.id,
                            },
                            projectInterest: leadById?.projectInterest
                              ? {
                                  label: leadById.projectInterest.name,
                                  value: leadById.projectInterest.id,
                                }
                              : null,
                            socialMedia: leadById?.personalInfo?.socialMediaUrl,
                            createdByReal: `${leadById?.createdByUser?.firstName} ${leadById?.createdByUser?.lastName}`,
                            createdBy: moment(
                              new Date(leadById?.createdAt).getTime()
                            ).format("YYYY-MM-DD HH:mm:ss"),
                            lastModified: moment(
                              new Date(leadById?.updatedAt).getTime()
                            ).format("YYYY-MM-DD HH:mm:ss"),
                            dateOfBirth:
                              leadById?.personalInfo?.dateOfBirth !== null
                                ? moment(
                                    leadById?.personalInfo?.dateOfBirth
                                  ).toDate()
                                : "",
                            note: leadById?.note,
                            street: leadById?.address?.street,
                            ward: leadById?.address?.ward,
                            district: leadById?.address?.district,
                            city: leadById?.address?.city,
                          }}
                          validationSchema={validate}
                          onSubmit={(values) => {
                            const body = {
                              userId: accountInfo.uuid,
                              rating: Number(values?.rating?.value),
                              leadSource: Number(values?.leadSource?.value),
                              leadStatus: activeStatus,
                              leadOwnerUuid: values?.leadOwner?.value,
                              productInterest: {
                                id: values?.productInterest?.value,
                              },
                              projectInterest: {
                                id: values.projectInterest?.value,
                              },
                              note: values.note,
                              address: {
                                city: values.city,
                                district: values.district,
                                ward: values.ward,
                                street: values.street,
                              },
                              personalInfo: {
                                gender: Number(values.gender?.value),
                                firstName: values.firstName,
                                lastName: values.lastName,
                                email: values.email,
                                phoneNumber: Number(values.phone),
                                dateOfBirth: values.dateOfBirth
                                  ? values.dateOfBirth
                                  : null,
                                socialMediaUrl: values.socialMedia,
                              },
                            };

                            dispatch(
                              updateLeadAction.request(
                                leadId as string,
                                body as any
                              )
                            );
                            toastr.success("Update successfully");
                          }}
                        >
                          {(props) => {
                            const { handleBlur, values } = props;
                            return (
                              <div>
                                <Form>
                                  <h4>Lead information</h4>
                                  <div className="row mt-4">
                                    <div className="col-6">
                                      <SelectField
                                        label={`${translator(
                                          "lead_page.col_lead_owner"
                                        )}`}
                                        name="leadOwner"
                                        options={optionLeadOwner}
                                      />
                                    </div>

                                    <div className="col-6">
                                      <InputField
                                        label={`${translator(
                                          "lead_page.col_phone"
                                        )}`}
                                        name="phone"
                                        handleBlur={handleBlur}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="row mt-4">
                                    <div className="col-6">
                                      {showSplitNameFields ? (
                                        <div className="row">
                                          <div className="col-6">
                                            <InputField
                                              label={`${translator(
                                                "lead_page.col_first_name"
                                              )}`}
                                              name="firstName"
                                              type="text"
                                              handleBlur={handleBlur}
                                              required
                                            />
                                          </div>
                                          <div className="col-6">
                                            <InputField
                                              label={`${translator(
                                                "lead_page.col_last_name"
                                              )}`}
                                              name="lastName"
                                              type="text"
                                              handleBlur={handleBlur}
                                            />
                                          </div>
                                        </div>
                                      ) : (
                                        <InputField
                                          label={`${translator(
                                            "lead_page.col_full_name"
                                          )}`}
                                          name="name"
                                          type="text"
                                          handleBlur={handleBlur}
                                          onFocus={() =>
                                            setShowSplitNameFields(true)
                                          }
                                        />
                                      )}
                                    </div>
                                    <div className="col-6">
                                      <InputField
                                        label="Email"
                                        name="email"
                                        type="text"
                                        handleBlur={handleBlur}
                                      />
                                    </div>
                                  </div>

                                  <div className="row mt-4">
                                    <div className="col-6">
                                      <SelectField
                                        label={`${translator(
                                          "lead_page.col_gender"
                                        )}`}
                                        name="gender"
                                        options={
                                          langCookies === "vi"
                                            ? GENDERS_VN
                                            : GENDERS_EN
                                        }
                                      />
                                    </div>
                                    <div className="col-6">
                                      <SelectField
                                        label={`${translator(
                                          "lead_page.project_interested"
                                        )}`}
                                        name="projectInterest"
                                        placeholder={`${translator(
                                          "lead_page.project_interested_placeholder"
                                        )}`}
                                        options={projectArr}
                                        setValueProp={setValueProjectInterested}
                                      />
                                    </div>
                                  </div>
                                  <div className="row mt-4">
                                    <div className="col-6">
                                      {values.projectInterest &&
                                      productOptions.length > 0 ? (
                                        // <InputField
                                        //   label={`${translator(
                                        //     "lead_page.product_interest"
                                        //   )}`}
                                        //   name="productInterest"
                                        //   type="text"
                                        //   value={valueProductInterest}
                                        //   onChange={(e) => {
                                        //     setValueProductInterest(
                                        //       e.target.value
                                        //     );
                                        //   }}
                                        // />
                                        <SelectField
                                          label={`${translator(
                                            "lead_page.product_interest"
                                          )}`}
                                          name="productInterest"
                                          placeholder={`${translator(
                                            "lead_page.project_interested_placeholder"
                                          )}`}
                                          options={productOptions}
                                        />
                                      ) : (
                                        <div
                                          data-tip={
                                            values.projectInterest
                                              ? ""
                                              : `${translator(
                                                  "lead_page.tooltip_product_interest"
                                                )}`
                                          }
                                        >
                                          <InputField
                                            label={`${translator(
                                              "lead_page.product_interest"
                                            )}`}
                                            name="productInterest"
                                            type="text"
                                            disabled
                                            value={null}
                                          />
                                          <ReactTooltip />
                                        </div>
                                      )}
                                    </div>
                                    <div className="col-6">
                                      <label
                                        className="font-weight-normal"
                                        htmlFor="status"
                                      >
                                        {`${translator(
                                          "lead_page.col_lead_status"
                                        )}`}
                                      </label>
                                      <Select
                                        options={steps}
                                        className="mt-2"
                                        name={"status"}
                                        onChange={(e) => {
                                          const step = {
                                            label: e.label,
                                            value: e.value,
                                            parent: "",
                                          };

                                          changeStatusLead(step);
                                        }}
                                        defaultValue={activeStep}
                                        value={activeStep}
                                      />
                                      {showSelectSub ? (
                                        <Select
                                          options={selectSubSteps}
                                          className="mt-2"
                                          name={"status"}
                                          onChange={(e) => {
                                            const step = {
                                              label: e.label,
                                              value: e.value,
                                              parent: e.parent,
                                            };
                                            changeStatusLead(step);
                                            if (e.parent === 3) {
                                              setShowSubLabelThird(e.label);
                                              setShowSubLabelFourd("");
                                            } else if (e.parent === 4) {
                                              setShowSubLabelFourd(e.label);
                                              setShowSubLabelThird("");
                                            }
                                          }}
                                          defaultValue={activeSubStep}
                                          value={activeSubStep}
                                        />
                                      ) : null}
                                    </div>
                                  </div>
                                  <div className="row mt-4">
                                    <div className="col-6">
                                      <SelectField
                                        label={`${translator(
                                          "lead_page.col_lead_source"
                                        )}`}
                                        name="leadSource"
                                        options={
                                          langCookies === "vi"
                                            ? LEAD_SOURCES_VN
                                            : LEAD_SOURCES_EN
                                        }
                                      />
                                    </div>
                                    <div className="col-6">
                                      <SelectField
                                        label={`${translator(
                                          "lead_page.col_rating"
                                        )}`}
                                        name="rating"
                                        options={
                                          langCookies === "vi"
                                            ? RATING_VN
                                            : RATING_EN
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="row mt-4">
                                    <div className="col-12">
                                      <InputField
                                        label={`${translator(
                                          "lead_page.col_note"
                                        )}`}
                                        name="note"
                                        type="text"
                                        handleBlur={handleBlur}
                                      />
                                    </div>
                                  </div>

                                  <div className="row mt-4">
                                    <div className="col-6">
                                      <InputField
                                        label={`${translator(
                                          "lead_page.col_created_by"
                                        )}`}
                                        name="createdByReal"
                                        type="text"
                                        handleBlur={handleBlur}
                                        disabled
                                      />
                                    </div>
                                    <div className="col-6">
                                      <InputField
                                        label={`${translator(
                                          "lead_page.col_last_modified"
                                        )}`}
                                        name="lastModified"
                                        type="text"
                                        handleBlur={handleBlur}
                                        disabled
                                      />
                                    </div>
                                  </div>

                                  <div className="row mt-4">
                                    <div className="col-6">
                                      <InputField
                                        label={`${translator(
                                          "lead_page.col_created_date"
                                        )}`}
                                        name="createdBy"
                                        type="text"
                                        handleBlur={handleBlur}
                                        disabled
                                      />
                                    </div>
                                  </div>

                                  <div className="row mt-4">
                                    <div className="col-6">
                                      <DatePickerField
                                        maxDate={new Date()}
                                        name="dateOfBirth"
                                        label={`${translator(
                                          "lead_page.col_dob"
                                        )}`}
                                      />
                                    </div>
                                    <div className="col-6" />
                                  </div>
                                  <div className="row mt-4">
                                    <div className="col-6">
                                      <InputField
                                        label={`${translator(
                                          "lead_page.col_social"
                                        )}`}
                                        name="socialMedia"
                                        type="text"
                                        handleBlur={handleBlur}
                                      />
                                    </div>
                                  </div>

                                  <h4 className="mt-5">{`${translator(
                                    "lead_page.col_address_info"
                                  )}`}</h4>
                                  <div className="row mt-4">
                                    <div className="col-6">
                                      <InputField
                                        label={`${translator(
                                          "lead_page.col_street"
                                        )}`}
                                        name="street"
                                        type="text"
                                        handleBlur={handleBlur}
                                      />
                                    </div>
                                    <div className="col-6">
                                      <InputField
                                        label={`${translator(
                                          "lead_page.col_ward"
                                        )}`}
                                        name="ward"
                                        type="text"
                                        handleBlur={handleBlur}
                                      />
                                    </div>
                                  </div>
                                  <div className="row mt-4">
                                    <div className="col-6">
                                      <InputField
                                        label={`${translator(
                                          "lead_page.col_district"
                                        )}`}
                                        name="district"
                                        type="text"
                                        handleBlur={handleBlur}
                                      />
                                    </div>
                                    <div className="col-6">
                                      <InputField
                                        label={`${translator(
                                          "lead_page.col_city"
                                        )}`}
                                        name="city"
                                        type="text"
                                        handleBlur={handleBlur}
                                      />
                                    </div>
                                  </div>
                                  <div className="row mt-4">
                                    <div className="col-12">
                                      <button
                                        className="btn btn-success"
                                        type="submit"
                                      >
                                        {`${translator(
                                          "lead_page.btn_update"
                                        )}`}
                                      </button>
                                      <button
                                        className="btn btn-dark ml-3"
                                        type="reset"
                                        onClick={() => {
                                          setShowModalDelete(true);
                                        }}
                                      >
                                        {translator("lead_page.btn_delete")}
                                      </button>
                                    </div>
                                  </div>
                                </Form>
                              </div>
                            );
                          }}
                        </Formik>
                      )}
                    </div>
                  </div>
                  <div className="tab-pane" id="attachments" role="tabpanel">
                    <div className="card-body">
                      <div className="dropify-wrapper">
                        <FileUploader
                          handleChange={handleFileChange}
                          name="file"
                          maxSize={20}
                          children={
                            <p className="d-flex align-items-center">
                              <i className="ti-cloud-up fz-20"></i>
                              {`${translator("lead_page.text_upload")}`}
                            </p>
                          }
                          onSizeError={onSizeError}
                        />
                      </div>
                      <p className="text-err mt-3">{errUpload}</p>
                      <div className="d-flex flex-wrap justify-content-between">
                        {listAttachments?.map((file, index) => (
                          <div
                            key={index}
                            className="w-48 border p-3 mt-4 d-flex align-items-center justify-content-between"
                          >
                            <div className="w-80 d-flex align-items-center">
                              <i className="ti-zip fz-30"></i>
                              <div className="pd-left-15">
                                <div className="">
                                  {String(file.originalName).split(".")[0]}
                                </div>
                                <div className="text-note mt-1 fz-12">
                                  {new Date(file.createdAt).toDateString()} .{" "}
                                  {file.size}kb .{" "}
                                  {String(file.ext).substring(1)}
                                </div>
                              </div>
                            </div>

                            <div className="w-15 d-flex align-items-center">
                              <i
                                className="ti-trash icon-cursor"
                                onClick={() => removeAttachment(index)}
                              ></i>
                              <i className="ti-download ml-3 mr-3"></i>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xlg-3 col-md-5">
              <div className="card">
                <div className="card-body"></div>
              </div>

              <div className="card">
                <div className="card-body">
                  <ul className="nav nav-tabs profile-tab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#activity"
                        role="tab"
                      >
                        {`${translator("lead_page.col_activity")}`}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#comment"
                        role="tab"
                      >
                        {`${translator("lead_page.text_comment")}`}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#script"
                        role="tab"
                      >
                        {`${translator("lead_page.text_script")}`}
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      id="activity"
                      role="tabpanel"
                    >
                      <div className="mt-4">
                        <ul className="nav nav-tabs" role="tablist">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              data-toggle="tab"
                              href="#logcall"
                              role="tab"
                            >
                              <span className="hidden-sm-up">
                                <i className="ti-home"></i>
                              </span>
                              <span className="hidden-xs-down">{`${translator(
                                "lead_page.text_log_call"
                              )}`}</span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-toggle="tab"
                              href="#email"
                              role="tab"
                            >
                              <span className="hidden-sm-up">
                                <i className="ti-user"></i>
                              </span>
                              <span className="hidden-xs-down">Email</span>
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content tabcontent-border">
                          <div
                            className="tab-pane active"
                            id="logcall"
                            role="tabpanel"
                          >
                            <div className="p-20">
                              <Formik
                                initialValues={{
                                  minute: 0,
                                  second: 0,
                                  note: "",
                                }}
                                validationSchema={validateFormAddLogCall}
                                onSubmit={(values, { resetForm }) => {
                                  const body = {
                                    minute: Number(values.minute)
                                      ? Number(values.minute)
                                      : 0,
                                    second: Number(values.second)
                                      ? Number(values.second)
                                      : 0,
                                    note: values.note,
                                  };

                                  dispatch(
                                    createLogCallAction.request(
                                      "lead",
                                      leadId as string,
                                      body,
                                      () => {
                                        dispatch(
                                          fetchLogCallsAction.request(
                                            "lead",
                                            leadId as string,
                                            1,
                                            500
                                          )
                                        );
                                        toastr.success(
                                          "Add log call successfully"
                                        );
                                        resetForm();
                                      }
                                    )
                                  );
                                }}
                              >
                                {(formik) => (
                                  <div>
                                    <Form>
                                      <div className="d-flex">
                                        <Field
                                          name={`minute`}
                                          type="number"
                                          className="form-control col"
                                          placeholder="Minutes"
                                          onChange={(e) => {
                                            formik.handleChange(e);
                                          }}
                                        />
                                        <Field
                                          name={`second`}
                                          className="form-control col ml-3"
                                          placeholder="Seconds"
                                          onChange={(e) => {
                                            let secondInput = Number(
                                              e.currentTarget.value
                                            );
                                            let minute = Math.floor(
                                              (secondInput % 3600) / 60
                                            );
                                            let second = Math.floor(
                                              secondInput - minute * 60
                                            );
                                            formik.handleChange(e);
                                            let currMinute =
                                              formik.values.minute;
                                            if (secondInput > 60) {
                                              e.currentTarget.value = second;
                                              formik.setFieldValue(
                                                "second",
                                                second
                                              );
                                              formik.setFieldValue(
                                                "minute",
                                                Number(currMinute) +
                                                  Number(minute)
                                              );
                                            }
                                          }}
                                        />
                                        <button
                                          className="btn btn-success ml-3"
                                          type="submit"
                                        >
                                          {`${translator(
                                            "lead_page.btn_save"
                                          )}`}
                                        </button>
                                      </div>
                                      <div className="mt-4">
                                        <Field
                                          as="textarea"
                                          name={`note`}
                                          className="form-control"
                                          onChange={formik.handleChange}
                                        />
                                      </div>
                                      -
                                      <div className="mt-4 bg-cyan px-3 py-2 text-light">
                                        {translator("lead_page.text_you_call")}
                                      </div>
                                      <div className="fix-box">
                                        <div className="table-responsive">
                                          <table className="table fz-12 tabel-small">
                                            <thead>
                                              <tr>
                                                <th className="w-15 text-nowrap">
                                                  {translator(
                                                    "lead_page.text_actor"
                                                  )}
                                                </th>
                                                <th className="w-25">
                                                  {translator(
                                                    "lead_page.text_time"
                                                  )}
                                                </th>
                                                <th className="w-15 text-nowrap">
                                                  {translator(
                                                    "lead_page.text_duration"
                                                  )}
                                                </th>
                                                <th className="w-45">
                                                  {translator(
                                                    "lead_page.col_note"
                                                  )}
                                                </th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {logCalls?.items?.map(
                                                (logCall) => (
                                                  <tr key={logCall._id}>
                                                    <td>
                                                      {`${
                                                        leadById?.createdByUser
                                                          .firstName !== null
                                                          ? leadById
                                                              ?.createdByUser
                                                              .firstName
                                                          : ""
                                                      } ${
                                                        leadById?.createdByUser
                                                          .lastName !== null
                                                          ? leadById
                                                              ?.createdByUser
                                                              .lastName
                                                          : ""
                                                      }`}
                                                    </td>
                                                    <td>
                                                      {moment(
                                                        new Date(
                                                          logCall?.createdAt
                                                        ).getTime()
                                                      ).format(
                                                        "YYYY-MM-DD HH:mm:ss"
                                                      )}
                                                    </td>
                                                    <td>
                                                      {logCall.minute}m
                                                      {logCall.second}s
                                                    </td>
                                                    <td>{logCall.note}</td>
                                                  </tr>
                                                )
                                              )}
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                      <div
                                        className="text-bottom px-3 py-2"
                                        id="total"
                                      >
                                        {translator("lead_page.text_total")}:{" "}
                                        {logCalls?.totalDuration}
                                      </div>
                                    </Form>
                                  </div>
                                )}
                              </Formik>
                            </div>
                          </div>

                          <div
                            className="tab-pane  p-20"
                            id="email"
                            role="tabpanel"
                          >
                            Email
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab-pane" id="comment" role="tabpanel">
                      <div>
                        <Formik
                          initialValues={{
                            comment: "",
                          }}
                          validationSchema={validateComment}
                          onSubmit={(values) => {
                            console.log(values);
                          }}
                        >
                          {(props) => {
                            const { values, setValues } = props;
                            return (
                              <div>
                                <Form
                                  className="overflow-x--hidden my-4"
                                  onSubmit={(e) => {
                                    e.preventDefault();
                                    dispatch(
                                      createCommentAction.request(
                                        leadId as string,
                                        {
                                          content: values.comment,
                                        },
                                        () => {
                                          dispatch(
                                            fetchCommentsByIdAction.request(
                                              leadId as string,
                                              {
                                                pageIndex: 1,
                                                pageSize: 500,
                                              }
                                            )
                                          );
                                          setValues({ comment: "" });
                                        }
                                      )
                                    );
                                  }}
                                >
                                  <div className="row ">
                                    <div className="col-9">
                                      <InputField
                                        placeholder={`${translator(
                                          "lead_page.text_share_update"
                                        )}`}
                                        name="comment"
                                      />
                                    </div>
                                    <div className="col-3">
                                      <button
                                        className="btn btn-info mt-2"
                                        type="submit"
                                      >
                                        {translator("lead_page.btn_share")}
                                      </button>
                                    </div>
                                  </div>
                                </Form>
                              </div>
                            );
                          }}
                        </Formik>
                        {comments?.map((data, index) => (
                          <table className="table mb-0">
                            <tr key={data.id}>
                              <td>
                                <p className="font-weight-normal">
                                  {`${
                                    data?.createdByUser.firstName !== null
                                      ? data?.createdByUser.firstName
                                      : ""
                                  } ${
                                    data?.createdByUser.lastName !== null
                                      ? data?.createdByUser.lastName
                                      : ""
                                  }`}
                                </p>
                                <p className="text-muted">
                                  {moment(
                                    new Date(data.updatedAt).getTime()
                                  ).format("YYYY-MM-DD HH:mm:ss")}
                                </p>
                                <p>{data.content}</p>
                              </td>
                            </tr>
                          </table>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        modal_name={translator("lead_page.text_convert_customer")}
        label="Name"
      >
        <Formik
          initialValues={{
            newCustomer: `${leadById?.personalInfo?.firstName} ${leadById?.personalInfo?.lastName}`,
            ownerOfNewCustomer: selectLeadOwner,
          }}
          onSubmit={(values) => {
            dispatch(
              convertLeadToCustomerAction.request(
                leadId as string,
                (customer) => {
                  window.location.href = `/${companyName}/customers/${customer.id}`;
                }
              )
            );
          }}
        >
          {() => (
            <div>
              <Form>
                <div className="row mt-4">
                  <div className="col-12">
                    <InputField
                      label={translator("lead_page.text_create_customer")}
                      name="newCustomer"
                      type="text"
                      disabled
                    />
                  </div>
                  <div className="col-12 mt-4">
                    <SelectField
                      label={translator("lead_page.text_owner_customer")}
                      name="ownerOfNewCustomer"
                      options={optionLeadOwner}
                    />
                  </div>
                </div>

                <div className="text-center mt-3">
                  <button
                    className="btn btn-danger ml-3"
                    onClick={() => setShowModal(false)}
                  >
                    {translator("lead_page.text_cancel")}
                  </button>
                  <button className="btn btn-danger ml-3" type="submit">
                    {translator("lead_page.text_convert")}
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </Modal>

      <Modal
        isOpen={showModalDelete}
        onRequestClose={() => setShowModalDelete(false)}
        modal_name={`${translator("lead_page.btn_delete")} lead`}
        label="Name"
      >
        <h5 className="mt-3">
          {`${translator("lead_page.text_delete_lead")}`}{" "}
          <strong>{`${leadById?.personalInfo?.firstName} ${leadById?.personalInfo?.lastName}`}</strong>{" "}
          ?
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
              handleDeleteLead();
            }}
          >
            {translator("lead_page.btn_delete")}
          </button>
        </div>
      </Modal>

      <footer className="footer">© 2022 CRM Dreamland</footer>
    </div>
  );
};

export default LeadDetailContainer;

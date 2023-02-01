import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import jwt from "jwt-decode";
import InputField from "../../components/ModalCreate/InputField";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SelectField from "../../components/ModalCreate/SelectField";
import { uiActions, fetchLeadsAction } from "src/state-management/actions";
import { TRootState } from "src/state-management/reducers";
import {
  LEAD_SOURCES_EN,
  LEAD_SOURCES_VN,
  OPTION_ID_TYPE_VN,
  OPTION_ID_TYPE_EN,
  OPTION_GENDER_EN,
  OPTION_GENDER_VN,
} from "./constants";
import { fetchProjectsAction } from "src/state-management/actions/projects";
import { ECustomersActions } from "src/state-management/actions/customers/constants";
import {
  fetchCustomerAction,
  updateCustomerAction,
} from "src/state-management/actions/customers";
import DatePickerField from "components/ModalCreate/DatePicker";
import CurrencyInput from "components/ModalCreate/CurrencyInput";
import {
  createLogCallAction,
  fetchLogCallsAction,
} from "src/state-management/actions/log-calls";
import { EPaginate } from "utils/types";
import { ELogCallsActions } from "src/state-management/actions/log-calls/constants";
import toastr from "toastr";
import moment from "moment";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { companyAPI } from "../../services/identity/company";
import serviceCustomersAPI from "../../services/identity/customers";
import CommentTab from "./comment";
import ProductsTab from "./products";
import AttachmentsContainer from "./attachments";

import Modal from "../../components/ModalCreate";

// test

const CustomerDetailContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const langCookies = Cookies.get("lang");
  const companyID = Cookies.get("companyID");
  const { t: translator } = useTranslation();
  const { customerDetail: customerId } = router.query;
  const userData: any = jwt(Cookies.get("crm_token"));

  const [showSplitNameFields, setShowSplitNameFields] = useState(false);
  const [listUsers, setListUsers] = useState<any[]>([]);

  const [projectArr, setProjectArr] = useState<any[]>([]);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);

  const servicesCompanyAPI = new companyAPI();
  const projectList = useSelector(
    (state: TRootState) => state.projects?.all?.items
  );
  const customerById = useSelector(
    (state: TRootState) => state.customers.customerById
  );

  const optionCustomerOwner = listUsers
    ?.filter((item) => item.user !== null)
    .map((item: any) => ({
      value: item.user?.id,
      label: item.user?.firstName
        ? item.user?.firstName
        : "" + " " + item.user?.lastName
        ? item.user?.lastName
        : "",
    }));

  const logCalls = useSelector((state: TRootState) => state.logCalls.all);

  const selectCustomerOwner = listUsers
    ?.filter((item) => item.user?.id === customerById?.customerOwner?.id)
    .map((item: any) => ({
      value: item.user?.id,
      label: item.user?.firstName
        ? item.user?.firstName
        : "" + " " + item.user?.lastName
        ? item.user?.lastName
        : "",
    }));

  const optionGender = [
    {
      value: 0,
      label: "Male",
    },
    {
      value: 1,
      label: "Female",
    },
    {
      value: 2,
      label: "Other",
    },
  ];
  const validate = Yup.object({
    phone: Yup.number()
      .typeError("Only allow integer number")
      .integer("Please enter a valid amount without decimal values")
      .required("Required"),
    name: Yup.string().required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    // email: Yup.string().email("Must be a valid email").required("Required"),
    // note: Yup.string().required("Required"),
    // street: Yup.string().required("Required"),
    // ward: Yup.string().required("Required"),
    // district: Yup.string().required("Required"),
    // city: Yup.string().required("Required"),
    // dateOfBirth: Yup.string().required("Required"),
    // idType: Yup.mixed().required("Required").nullable(),
    // idNumber: Yup.string().required("Required"),
    // industry: Yup.string().required("Required"),
    // position: Yup.string().required("Required"),
    // estimatedIncome: Yup.string().required("Required"),
    // socialMediaUrl: Yup.string().required("Required"),
  });

  const validateFormAddLogCall = Yup.object({
    minute: Yup.string().required("Required"),
    second: Yup.string().required("Required"),
    note: Yup.string().required("Required"),
  });

  const handleBlur = function (value: any) {
    let fieldName = value.target.name;
    let fieldValue = value.target.defaultValue;
  };

  const handleChangeDropdown = function (e) {
    let fieldName = e.label;
    let fieldValue = e.value;
    console.log(fieldName, fieldValue);
  };

  const handleDeleteCustomer = () => {
    if (customerId) {
      serviceCustomersAPI.deleteCustomer(String(customerId)).then(() => {
        toastr.success(
          `${translator("customer_page.text_delete_customer_successfully")}`
        );
        setShowModalDelete(false);
        setTimeout(() => {
          router.push(`/customers`);
        }, 1000);
      });
    }
  };

  // const handleFileChange = (file: any) => {
  //   const attachments = file.target;

  //   let fileName = file.name;
  //   let fileSize = file.size;
  //   if (fileSize < 20480000) {
  //     let fileDate = formatDate(file.lastModifiedDate);
  //     let fileNameArr = fileName.split(".");
  //     let fileType = fileNameArr[fileNameArr.length - 1];
  //     let item = {
  //       name: fileName,
  //       fileSize: fileSize,
  //       fileDate: fileDate,
  //       fileType: fileType,
  //     };
  //     listAttachments.push(item);
  //     setFile(file);
  //     setlistAttachments(listAttachments);
  //     setErrUpload("");
  //     const bodyForm = new FormData();
  //     bodyForm.append("file", file);
  //     axios
  //       .post(`${baseUrl}/crm/customer/attachment/${leadId}`, bodyForm, {
  //         headers: {
  //           Authorization: `Bearer ${Cookies.get("crm_token")}`,
  //         },
  //       })
  //       .then((response) => {
  //         servicesLeadAPI.getDetailLead(leadId).then((items) => {
  //           setlistAttachments(items?.attachments);
  //         });
  //       })
  //       .catch(function (error) {
  //         toastr.error("System has failed");
  //       });
  //   } else {
  //     setErrUpload("Uploaded files must be smaller than 20mb");
  //   }
  //   // postLeadAttachment(String(leadId), bodyForm);
  // };

  useEffect(() => {
    if (customerId) {
      dispatch(fetchCustomerAction.request(customerId as string));
      dispatch(
        fetchLogCallsAction.request("customer", customerId as string, 1, 500)
      );
    }
  }, [customerId]);

  useEffect(() => {
    return () => {
      dispatch(uiActions.resetActionStatus(ECustomersActions.FETCH_CUSTOMER));
      dispatch(uiActions.resetActionStatus(ELogCallsActions.FETCH_LOG_CALLS));
      dispatch(uiActions.resetActionStatus(ELogCallsActions.CREATE_LOG_CALL));
    };
  }, [dispatch]);

  const fetchProjects = (
    pageIndex: number,
    pageSize: number,
    companyId: string
  ) => {
    dispatch(fetchProjectsAction.request(pageIndex, pageSize, companyId));
  };

  const fetchLeads = (
    pageIndex: number,
    pageSize: number,
    companyID?: string
  ) => {
    dispatch(fetchLeadsAction.request(pageIndex, pageSize, companyID));
  };

  useEffect(() => {
    if (projectList?.length > 0) {
      const projectArr = projectList.map((item: any, index: number) => ({
        value: item.id,
        label: item.name,
      }));
      setProjectArr(projectArr);
    }

    fetchLeads(
      EPaginate.DEFAULT_PAGE_INDEX,
      EPaginate.COMMON_PAGE_SIZE,
      companyID
    );
  }, [projectList]);

  useEffect(() => {
    fetchProjects(
      EPaginate.DEFAULT_PAGE_INDEX,
      EPaginate.COMMON_PAGE_SIZE,
      String(companyID)
    );
  }, [dispatch]);

  useEffect(() => {
    servicesCompanyAPI.getDetailCompany(String(companyID)).then((items) => {
      setListUsers(items?.data?.items);
      items?.data?.items.map((item: any) => ({
        value: item.userId,
        label: item.email,
      }));
    });
  }, []);

  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    {customerById?.personalInfo.firstName}{" "}
                    {customerById?.personalInfo.lastName}
                  </h4>
                  <div className="row">
                    <div className="col-md-3 col-xs-6 b-r">
                      <strong>{translator("customer_page.col_phone")}</strong>
                      <p className="text-muted">
                        {customerById?.personalInfo?.phoneNumber}
                      </p>
                    </div>
                    <div className="col-md-3 col-xs-6 b-r">
                      <strong>Email</strong>
                      <p className="text-muted">
                        {customerById?.personalInfo?.email}
                      </p>
                    </div>
                    <div className="col-md-3 col-xs-6 b-r"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
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
                      <strong>{translator("customer_page.text_detail")}</strong>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#products"
                      role="tab"
                    >
                      {translator("customer_page.text_products")}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#marketing"
                      role="tab"
                    >
                      {translator("customer_page.text_marketing")}
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#attachments"
                      role="tab"
                    >
                      {translator("customer_page.text_attachments")}
                    </a>
                  </li> */}
                </ul>

                <div className="tab-content">
                  <div className="tab-pane active" id="profile" role="tabpanel">
                    <div className="card-body">
                      {customerById && customerById.id === customerId && (
                        <Formik
                          initialValues={{
                            customerOwnerUuid: selectCustomerOwner[0],
                            phone: customerById?.personalInfo?.phoneNumber,
                            projectInterested: {
                              value: customerById?.projectInterest?.id,
                              label: customerById?.projectInterest?.name,
                            },
                            name: `${customerById?.personalInfo?.firstName} ${customerById?.personalInfo?.lastName}`,
                            firstName: customerById?.personalInfo?.firstName,
                            lastName: customerById?.personalInfo?.lastName,
                            email: customerById?.personalInfo?.email,
                            gender: (langCookies === "vi"
                              ? OPTION_GENDER_VN
                              : OPTION_GENDER_EN
                            ).find(
                              (gend) =>
                                gend.value ===
                                customerById?.personalInfo?.gender
                            ),
                            leadSource:
                              langCookies === "vi"
                                ? LEAD_SOURCES_VN[customerById?.leadSource]
                                : LEAD_SOURCES_EN[customerById?.leadSource],
                            note: customerById?.note,
                            street: customerById?.address?.street,
                            ward: customerById?.address?.ward,
                            district: customerById?.address?.district,
                            city: customerById?.address?.city,
                            dateOfBirth: customerById?.personalInfo?.dateOfBirth
                              ? new Date(
                                  customerById?.personalInfo?.dateOfBirth
                                )
                              : null,
                            idType:
                              langCookies === "vi"
                                ? OPTION_ID_TYPE_VN[
                                    customerById?.personalInfo?.idType
                                  ]
                                : OPTION_ID_TYPE_EN[
                                    customerById?.personalInfo?.idType
                                  ],

                            idNumber: customerById?.personalInfo?.idNumber,
                            industry: customerById?.workingInfo?.industry,
                            position: customerById?.workingInfo?.position,
                            estimatedIncome:
                              customerById?.workingInfo?.estimatedIncome,
                            customerBudget: customerById?.workingInfo?.budget,
                            socialMediaUrl:
                              customerById?.personalInfo?.socialMediaUrl,
                            createdBy: `${
                              customerById?.createdByUser?.firstName !== null
                                ? customerById?.createdByUser?.firstName
                                : ``
                            } ${
                              customerById?.createdByUser?.lastName !== null
                                ? customerById?.createdByUser?.lastName
                                : ""
                            }`,
                            lastModified: moment(
                              new Date(customerById?.updatedAt).getTime()
                            ).format("YYYY-MM-DD HH:mm:ss"),
                            createdAt: moment(
                              new Date(customerById?.createdAt).getTime()
                            ).format("YYYY-MM-DD HH:mm:ss"),
                          }}
                          validationSchema={validate}
                          onSubmit={(values) => {
                            // console.log(values.owner);
                            const body = {
                              customerOwnerUuid:
                                values.customerOwnerUuid?.value,
                              leadSource: Number(values.leadSource?.value),
                              note: values.note ? values.note : null,
                              projectInterest: {
                                id: values.projectInterested?.value,
                              },
                              address: {
                                street: values.street ? values.street : null,
                                city: values.city ? values.city : null,
                                district: values.district
                                  ? values.district
                                  : null,
                                ward: values.ward ? values.ward : null,
                              },
                              personalInfo: {
                                socialMediaUrl: values.socialMediaUrl,
                                gender: Number(values.gender?.value),
                                firstName: values.firstName,
                                lastName: values.lastName,
                                email: values.email,
                                phoneNumber: Number(values.phone),
                                dateOfBirth: values.dateOfBirth,
                                idType: Number(values.idType?.value),
                                idNumber: values.idNumber,
                              },
                              workingInfo: {
                                estimatedIncome: Number(values.estimatedIncome),
                                industry: values.industry
                                  ? values.industry
                                  : "",
                                position: values.position
                                  ? values.position
                                  : "",
                                budget: Number(values.customerBudget),
                              },
                              userId: userData?.uuid || "",
                            };
                            dispatch(
                              updateCustomerAction.request(
                                customerId as string,
                                body
                              )
                            );
                            toastr.success("Update successfully");
                          }}
                        >
                          {(formik) => (
                            <div>
                              <Form>
                                <h4>
                                  {translator(
                                    "customer_page.text_customer_info"
                                  )}
                                </h4>
                                <div className="row mt-4">
                                  <div className="col-6">
                                    <SelectField
                                      label={`${translator(
                                        "customer_page.col_lead_owner"
                                      )}`}
                                      name="customerOwnerUuid"
                                      options={optionCustomerOwner}
                                    />
                                  </div>
                                  <div className="col-6">
                                    <InputField
                                      label={`${translator(
                                        "customer_page.col_phone"
                                      )}`}
                                      name="phone"
                                      type="text"
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
                                              "customer_page.col_first_name"
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
                                              "customer_page.col_last_name"
                                            )}`}
                                            name="lastName"
                                            type="text"
                                            handleBlur={handleBlur}
                                            required
                                          />
                                        </div>
                                      </div>
                                    ) : (
                                      <InputField
                                        label={`${translator(
                                          "customer_page.col_full_name"
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
                                    />
                                  </div>
                                </div>

                                <div className="row mt-4">
                                  <div className="col-6">
                                    <SelectField
                                      label={`${translator(
                                        "customer_page.col_gender"
                                      )}`}
                                      name="gender"
                                      options={
                                        langCookies === "vi"
                                          ? OPTION_GENDER_VN
                                          : OPTION_GENDER_EN
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="row mt-4">
                                  <div className="col-12">
                                    <InputField
                                      label={`${translator(
                                        "customer_page.col_note"
                                      )}`}
                                      name="note"
                                      type="text"
                                      handleBlur={handleBlur}
                                    />
                                  </div>
                                </div>

                                <div className="row mt-4">
                                  <div className={`col-6 `}>
                                    <InputField
                                      label={`${translator(
                                        "lead_page.col_created_by"
                                      )}`}
                                      name="createdBy"
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
                                        "lead_page.col_created_by"
                                      )}`}
                                      name="createdAt"
                                      type="text"
                                      handleBlur={handleBlur}
                                      disabled
                                    />
                                  </div>
                                </div>

                                <h4 className="mt-5">
                                  {translator("customer_page.col_address_info")}
                                </h4>
                                <div className="row mt-4">
                                  <div className="col-6">
                                    <InputField
                                      label={`${translator(
                                        "customer_page.col_street"
                                      )}`}
                                      name="street"
                                      type="text"
                                      handleBlur={handleBlur}
                                    />
                                  </div>
                                  <div className="col-6">
                                    <InputField
                                      label={`${translator(
                                        "customer_page.col_ward"
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
                                        "customer_page.col_district"
                                      )}`}
                                      name="district"
                                      type="text"
                                      handleBlur={handleBlur}
                                    />
                                  </div>
                                  <div className="col-6">
                                    <InputField
                                      label={`${translator(
                                        "customer_page.col_city"
                                      )}`}
                                      name="city"
                                      type="text"
                                      handleBlur={handleBlur}
                                    />
                                  </div>
                                </div>

                                <h4 className="mt-5">
                                  {translator(
                                    "customer_page.additional_information"
                                  )}
                                </h4>
                                <div className="row mt-4">
                                  <div className="col-6">
                                    <DatePickerField
                                      name="dateOfBirth"
                                      maxDate={new Date()}
                                      label={`${translator(
                                        "customer_page.col_dob"
                                      )}`}
                                    />
                                  </div>
                                  <div className="col-6">
                                    <InputField
                                      label={`${translator(
                                        "customer_page.col_social"
                                      )}`}
                                      name="socialMediaUrl"
                                      type="text"
                                    />
                                  </div>
                                </div>
                                <div className="row mt-4">
                                  <div className="col-6">
                                    <CurrencyInput
                                      label={`${translator(
                                        "customer_page.col_customers_budget"
                                      )}`}
                                      name="customerBudget"
                                      handleBlur={handleBlur}
                                    />
                                  </div>
                                  <div className="col-6">
                                    <CurrencyInput
                                      label={`${translator(
                                        "customer_page.col_est_come"
                                      )}`}
                                      name="estimatedIncome"
                                      handleBlur={handleBlur}
                                    />
                                  </div>
                                </div>

                                <div className="row mt-4">
                                  <div className="col-6">
                                    <SelectField
                                      label={`${translator(
                                        "customer_page.col_id_type"
                                      )}`}
                                      name="idType"
                                      options={
                                        langCookies === "vi"
                                          ? OPTION_ID_TYPE_VN
                                          : OPTION_ID_TYPE_EN
                                      }
                                    />
                                  </div>
                                  <div className="col-6">
                                    <InputField
                                      label={`${translator(
                                        "customer_page.col_id_number"
                                      )}`}
                                      name="idNumber"
                                      type="text"
                                      handleBlur={handleBlur}
                                    />
                                  </div>
                                </div>
                                <div className="row mt-4">
                                  <div className="col-6">
                                    <InputField
                                      label={`${translator(
                                        "customer_page.text_industry"
                                      )}`}
                                      name="industry"
                                      type="text"
                                      handleBlur={handleBlur}
                                    />
                                  </div>
                                  <div className="col-6">
                                    <InputField
                                      label={`${translator(
                                        "customer_page.text_position"
                                      )}`}
                                      name="position"
                                      type="text"
                                      handleBlur={handleBlur}
                                    />
                                  </div>
                                </div>
                                <div className="row mt-4">
                                  <div className="col-6">
                                    <SelectField
                                      label={`${translator(
                                        "customer_page.col_lead_source"
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
                                        "lead_page.project_interested"
                                      )}`}
                                      name="projectInterested"
                                      placeholder={`${translator(
                                        "lead_page.project_interested_placeholder"
                                      )}`}
                                      options={projectArr}
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
                                        "customer_page.btn_update"
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
                          )}
                        </Formik>
                      )}
                    </div>
                  </div>

                  {/* <div className="tab-pane" id="attachments" role="tabpanel">
                    <div className="card-body">
                      <div className="profiletimeline">
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
                                      {new Date(file.createdAt).toDateString()}{" "}
                                      . {file.size}kb .{" "}
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
                  </div> */}
                  <ProductsTab />
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
                        {translator("customer_page.text_activity")}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#comment"
                        role="tab"
                      >
                        {translator("customer_page.text_comment")}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#script"
                        role="tab"
                      >
                        {translator("customer_page.text_script")}
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
                              <span className="hidden-xs-down">
                                {translator("customer_page.text_log_call")}
                              </span>
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
                                onSubmit={(values) => {
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
                                      "customer",
                                      customerId as string,
                                      body,
                                      () => {
                                        dispatch(
                                          fetchLogCallsAction.request(
                                            "customer",
                                            customerId as string,
                                            1,
                                            500
                                          )
                                        );
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
                                            let minuteInput = Number(
                                              e.currentTarget.value
                                            );
                                            let minute = Math.floor(
                                              minuteInput
                                            );
                                            let second =
                                              (minuteInput - minute) * 60;
                                            formik.handleChange(e);
                                          }}
                                        />
                                        <Field
                                          name={`second`}
                                          className="form-control col ml-3"
                                          placeholder="Seconds"
                                          onChange={(e: any) => {
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
                                          }}
                                        />
                                        <button className="btn btn-success ml-3">
                                          {translator("customer_page.btn_save")}
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

                                      <div className="mt-4 bg-cyan px-3 py-2 text-light">
                                        {translator(
                                          "customer_page.text_you_call"
                                        )}
                                      </div>
                                      <div className="fix-box">
                                        <div className="table-responsive">
                                          <table className="table fz-12 tabel-small">
                                            <thead>
                                              <tr>
                                                <th className="w-15">
                                                  {translator(
                                                    "customer_page.text_actor"
                                                  )}
                                                </th>
                                                <th className="w-25">
                                                  {translator(
                                                    "customer_page.text_time"
                                                  )}
                                                </th>
                                                <th className="w-15">
                                                  {translator(
                                                    "customer_page.text_duration"
                                                  )}
                                                </th>
                                                <th className="w-45">
                                                  {translator(
                                                    "customer_page.col_note"
                                                  )}
                                                </th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {logCalls?.items?.map(
                                                (logCall) => (
                                                  <tr key={logCall._id}>
                                                    <td>
                                                      {logCall.createdByUser
                                                        ?.firstName !== null
                                                        ? logCall.createdByUser
                                                            ?.firstName
                                                        : ``}{" "}
                                                      {logCall.createdByUser
                                                        ?.lastName !== null
                                                        ? logCall.createdByUser
                                                            ?.lastName
                                                        : ``}
                                                    </td>
                                                    <td>
                                                      {moment(
                                                        new Date(
                                                          String(
                                                            logCall.createdAt
                                                          )
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
                                        {translator("customer_page.text_total")}
                                        : {logCalls?.totalDuration}
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
                    <CommentTab
                      customerName={`${
                        customerById?.personalInfo.firstName
                      }${" "}${customerById?.personalInfo.lastName}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModalDelete}
        onRequestClose={() => setShowModalDelete(false)}
        modal_name={`${translator("lead_page.btn_delete")} customer`}
        label="Name"
      >
        <h5 className="mt-3">
          {`${translator("customer_page.text_delete_customer")}`}{" "}
          <strong>
            {customerById?.personalInfo.firstName}{" "}
            {customerById?.personalInfo.lastName}
          </strong>{" "}
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
              handleDeleteCustomer();
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

export default CustomerDetailContainer;

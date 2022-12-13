import React, { useState, useEffect } from "react";
import Modal from "../../components/ModalCreate";
import InputField from "../../components/ModalCreate/InputField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SelectField from "../../components/ModalCreate/SelectField";
import DatePickerField from "../../components/ModalCreate/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import CurrencyInput from "../../components/ModalCreate/CurrencyInput";
import {
  createCustomerAction,
  fetchCustomersAction,
} from "src/state-management/actions/customers";
import { EPaginate } from "utils/types";
import { TRootState } from "src/state-management/reducers";
import { fetchProjectsAction } from "src/state-management/actions/projects";
import {
  OPTION_GENDER_EN,
  OPTION_GENDER_VN,
  OPTION_ID_TYPE_VN,
  OPTION_ID_TYPE_EN,
  LEAD_SOURCES_EN,
  LEAD_SOURCES_VN,
} from "./constants";
import toastr from "toastr";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import jwt from "jwt-decode";
import { CustomerAPI } from "../../services/identity/customer-api";
import { ProjectAPI } from "../../services/identity/project-api";
import { companyAPI } from "../../services/identity/company";
import LeadsInstance from "services/identity/leads";

type Props = {
  currentPage: number;
  showModal: boolean;
  setShowModal: Function;
};

const CreateContainer: React.FC<Props> = ({
  currentPage,
  showModal,
  setShowModal,
}) => {
  const dispatch = useDispatch();
  const { t: translator } = useTranslation();
  const langCookies = Cookies.get("lang");
  const companyID = String(Cookies.get("companyID"));
  const servicesProjectAPI = new ProjectAPI();
  const [projectArr, setProjectArr] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");
  const servicesCusromerAPI = new CustomerAPI();
  const servicesCompanyAPI = new companyAPI();
  const [customers, setCustomers] = useState<any>([]);
  const [projectList, setProjectList] = useState<any>([]);
  const [listUsers, setListUsers] = useState<any[]>([]);

  const validate = Yup.object({
    gender: Yup.mixed().required("Required").nullable(),
    firstName: Yup.string()
      .max(100, "First name must be at most 100 characters")
      .required("Required"),
    lastName: Yup.string()
      .max(100, "Last name must be at most 100 characters")
      .required("Required"),
    phoneNumber: Yup.string()
      .required("Required")
      .matches(/^[0-9]+$/, "Must be only digits"),
  });

  const fetchCustomers = (
    pageIndex: number,
    pageSize: number,
    companyId: string,
    optionalParams?: any
  ) => {
    servicesCusromerAPI
      .fetchCustomers(pageIndex, pageSize, companyId, optionalParams)
      .then((items) => {
        setCustomers(items.data.items);
      });
  };

  const handleCreateCustomer = (values: any) => {
    let dateOfBirth = values.dateOfBirth;
    // const dateOfBirth =
    //   (getdateOfBirth.getDate() > 9
    //     ? getdateOfBirth.getDate()
    //     : "0" + getdateOfBirth.getDate()) +
    //   "/" +
    //   (getdateOfBirth.getMonth() > 8
    //     ? getdateOfBirth.getMonth() + 1
    //     : "0" + (getdateOfBirth.getMonth() + 1)) +
    //   "/" +
    //   getdateOfBirth.getFullYear();

    const userData = jwt(Cookies.get("crm_token") ?? "");

    const body = {
      customerOwnerUuid: values.customerOwnerUuid.value,
      leadSource: Number(values.leadSource.value),
      // productInterest: values.productInterest,
      projectInterest: {
        id: values.projectInterested?.value,
      },
      note: values.note,
      address: {
        street: values.street,
        city: values.city,
        district: values.district,
        ward: values.ward,
      },
      personalInfo: {
        socialMediaUrl: values.socialMediaUrl,
        gender: Number(values.gender.value),
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email ? values.email : null,
        phoneNumber: Number(values.phoneNumber),
        dateOfBirth: dateOfBirth ? dateOfBirth : null,
        idType: Number(values.idType.value),
        idNumber: values.idNumber,
      },
      workingInfo: {
        estimatedIncome: Number(values.estimatedIncome),
        budget: Number(values.budget),
        industry: values.industry ? values.industry : "",
        position: values.position ? values.position : "",
      },
      userId: userData?.uuid ?? "",
      companyId: companyID,
    };
    const element = document.getElementById("div");
    servicesCusromerAPI.createCustomer(body).then((res) => {
      toastr.success("Create successfully");
      fetchCustomers(currentPage, EPaginate.COMMON_PAGE_SIZE, companyID);
      setShowModal(false);
    });
  };

  const onSaveAndNew = () => {
    console.log("clcik");
    setShowModal(true);
  };

  const fetchProjects = (
    pageIndex: number,
    pageSize: number,
    companyId: string
  ) => {
    servicesProjectAPI
      .fetchProjects(pageIndex, pageSize, companyId)
      .then((items) => {
        const projectArr: [any?] = [];
        items.items.map((item: any) => {
          projectArr.push({
            value: item.id,
            label: item.name,
          });
        });
        setProjectArr(projectArr);
      });
  };

  const optionCustomerOwner = listUsers
    ?.filter((item) => item.user !== null)
    .map((item: any) => ({
      value: item.user?.id,
      label: item.user?.firstName + " " + item.user?.lastName,
    }));

  useEffect(() => {
    LeadsInstance.fetchLeads(1, 1000, companyID).then((leads) => {
      setLeads(leads.items);
    });

    fetchProjects(
      EPaginate.DEFAULT_PAGE_INDEX,
      EPaginate.COMMON_PAGE_SIZE,
      companyID
    );

    servicesCompanyAPI
      .getDetailCompany(String(companyID))
      .then((items: any) => {
        setListUsers(items?.data?.items);
        items?.data?.items.map((item: any) => ({
          value: item.userId,
          label: item.email,
        }));
      });
  }, []);

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
      modal_name={`${translator("customer_page.text_new_customer")}`}
      label="Name"
    >
      <Formik
        initialValues={{
          customerOwnerUuid: "",
          leadSource: "",
          // productInterest: "",
          note: "",
          street: "",
          city: "",
          district: "",
          ward: "",
          gender: "",
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          dateOfBirth: "",
          idType: "",
          idNumber: "",
          estimatedIncome: "",
          budget: "",
          industry: "",
          position: "",
          socialMediaUrl: "",
        }}
        validationSchema={validate}
        onSubmit={handleCreateCustomer}
        enableReinitialize={true}
      >
        {(formik) => (
          <div>
            <Form>
              <h4 className="font-weight-normal">
                {`${translator("customer_page.text_customer_info")}`}
              </h4>
              <div className="row mt-4">
                <div className="col-6">
                  <SelectField
                    label={`${translator("customer_page.col_customer_owner")}`}
                    name="customerOwnerUuid"
                    options={optionCustomerOwner}
                  />
                </div>
                <div className="col-6">
                  <InputField
                    label={`${translator("customer_page.col_phone")}`}
                    name="phoneNumber"
                    type="text"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <SelectField
                    label={`${translator("customer_page.col_gender")}`}
                    name="gender"
                    options={
                      langCookies === "vi" ? OPTION_GENDER_VN : OPTION_GENDER_EN
                    }
                  />
                </div>
                <div className="col-6">
                  <InputField label="Email" name="email" type="text" />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-6">
                  <InputField
                    label={`${translator("customer_page.col_first_name")}`}
                    name="firstName"
                    type="text"
                  />
                </div>
                <div className="col-6">
                  <InputField
                    label={`${translator("customer_page.col_last_name")}`}
                    name="lastName"
                    type="text"
                  />
                </div>
              </div>
              <h4 className="font-weight-normal m-t-15">
                {translator("customer_page.col_address_info")}
              </h4>
              <div className="row mt-4">
                <div className="col-6">
                  <InputField
                    label={`${translator("customer_page.col_street")}`}
                    name="street"
                    type="text"
                  />
                </div>
                <div className="col-6">
                  <InputField
                    label={`${translator("customer_page.col_ward")}`}
                    name="ward"
                    type="text"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <InputField
                    label={`${translator("customer_page.col_district")}`}
                    name="district"
                    type="text"
                  />
                </div>
                <div className="col-6">
                  <InputField
                    label={`${translator("customer_page.col_city")}`}
                    name="city"
                    type="text"
                  />
                </div>
              </div>

              <h4 className="font-weight-normal m-t-15">
                {translator("customer_page.additional_information")}
              </h4>
              <div className="row mt-4">
                <div className="col-6">
                  <DatePickerField
                    name="dateOfBirth"
                    label={`${translator("customer_page.col_dob")}`}
                    maxDate={new Date()}
                  />
                </div>
                <div className="col-6">
                  <InputField
                    label={`${translator("customer_page.col_social")}`}
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
                    name="budget"
                  />
                </div>
                <div className="col-6">
                  <CurrencyInput
                    label={`${translator("customer_page.col_est_come")}`}
                    name="estimatedIncome"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <SelectField
                    label={`${translator("customer_page.col_id_type")}`}
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
                    label={`${translator("customer_page.col_id_number")}`}
                    name="idNumber"
                    type="text"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <InputField
                    label={translator("customer_page.text_industry")}
                    name="industry"
                    type="text"
                  />
                </div>
                <div className="col-6">
                  <InputField
                    label={translator("customer_page.text_position")}
                    name="position"
                    type="text"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <SelectField
                    label={translator("customer_page.col_lead_source")}
                    name="leadSource"
                    options={
                      langCookies === "vi" ? LEAD_SOURCES_VN : LEAD_SOURCES_EN
                    }
                  />
                </div>
                <div className="col-6">
                  <SelectField
                    label={`${translator("lead_page.project_interested")}`}
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
                  <InputField
                    label={translator("customer_page.col_note")}
                    name="note"
                    type="text"
                  />
                </div>
              </div>

              <div className="text-center mt-3">
                <button className="btn btn-dark" type="reset">
                  {translator("customer_page.btn_reset")}
                </button>
                <button className="btn btn-danger ml-3" onClick={onSaveAndNew}>
                  {translator("customer_page.btn_save_new")}
                </button>
                <button className="btn btn-danger ml-3" type="submit">
                  {translator("customer_page.btn_create")}
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateContainer;

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LEAD_STATUSES_EN,
  LEAD_STATUSES_VN,
  LEAD_SOURCES_EN,
  LEAD_SOURCES_VN,
  GENDERS_EN,
  GENDERS_VN,
  RATING_EN,
  RATING_VN,
} from "./constants";
import Modal from "../../components/ModalCreate";
import InputField from "../../components/ModalCreate/InputField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SelectField from "../../components/ModalCreate/SelectField";
import { TRootState } from "src/state-management/reducers";
import { fetchLeadsAction } from "src/state-management/actions";
import { EPaginate } from "utils/types";
import { createLeadAction } from "src/state-management/actions/leads";
import DatePickerField from "components/ModalCreate/DatePicker";
import toastr from "toastr";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import serviceProductsAPI from "src/services/identity/products";
import { companyAPI } from "../../services/identity/company";
import { ProjectAPI } from "../../services/identity/project-api";
import Select from "react-select";

const servicesProjectAPI = new ProjectAPI();

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
  const langCookies = Cookies.get("lang");
  const companyID = Cookies.get("companyID");
  const servicesCompanyAPI = new companyAPI();
  const leads = useSelector((state: TRootState) => state.leads.data);
  const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");
  const [listUsers, setListUsers] = useState<any[]>([]);
  const [projectArr, setProjectArr] = useState<any[]>([]);
  const [valueProjectInterested, setValueProjectInterested] = useState<any>(
    null
  );
  const [valueProductInterest, setValueProductInterest] = useState({
    label: "",
    value: "",
  });
  const [productOptions, setProductOptions] = useState<any[]>([]);
  const [projectList, setProjectList] = useState<any[]>([]);

  useEffect(() => {
    servicesCompanyAPI.getDetailCompany(String(companyID)).then((items) => {
      setListUsers(items?.data?.items);
      items?.data?.items?.map((item: any) => ({
        value: item.user?.id,
        label: item.user?.firstName + " " + item.user?.lastName,
      }));
    });
  }, []);

  const { t: translator } = useTranslation();

  const optionLeadOwner = listUsers
    ?.filter((item) => item.user !== null)
    .map((item: any) => ({
      value: item.user?.id,
      label: `${item.user?.firstName ? item.user?.firstName : ""} ${item.user?.lastName ? item.user?.lastName : ""
        }`,
    }));

  const validate = Yup.object({
    gender: Yup.mixed().required("Required").nullable(),
    firstName: Yup.string()
      .max(100, "First name must be at most 100 characters")
      .required("Required"),
    phoneNumber: Yup.string()
      .required("Required")
      .matches(/^[0-9]+$/, "Must be only digits"),
  });

  const fetchLeads = (
    pageIndex: number,
    pageSize: number,
    companyId: string,
    optionalParams?: any
  ) => {
    dispatch(
      fetchLeadsAction.request(pageIndex, pageSize, companyId, optionalParams)
    );
  };

  const handleCreateLead = (values: any) => {
    const body = {
      userId: accountInfo.uuid,
      companyId: companyID,
      rating: Number(values.rating?.value),
      leadSource: Number(values.leadSource?.value),
      leadStatus: values.leadStatus?.value,
      leadOwnerUuid: values?.leadOwner?.value,
      productInterest: { id: valueProductInterest.value },
      projectInterest: { id: valueProjectInterested?.value },
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
        email: values.email ? values.email : null,
        phoneNumber: Number(values.phoneNumber),
        dateOfBirth: values.dateOfBirth,
        socialMediaUrl: values.socialMediaUrl,
      },
    };

    dispatch(
      createLeadAction.request(body, () => {
        const optionalParams = { sort: JSON.stringify({ createdAt: "DESC" }) };
        fetchLeads(
          currentPage,
          EPaginate.COMMON_PAGE_SIZE,
          companyID,
          optionalParams
        );
        setShowModal(false);
      })
    );
    toastr.success("Create successfully");
  };

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

  const changeProjectSelect = (value: any) => {
    const productArr: [any?] = [];
    serviceProductsAPI
      .fetchProducts(
        1,
        1000,
        {
          projectId: value.value,
        },
        companyID,
        value.value
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
    // setValueProductInterest({ ...valueProductInterest, label: "", value: "" });
    setValueProjectInterested(value);
    setProductOptions(productArr);
  };

  // useEffect(() => {
  //   setValueProductInterest({ ...valueProductInterest, label: "", value: "" });
  //   if (valueProjectInterested) {
  //     const productArr = [];
  //     serviceProductsAPI
  //       .fetchProducts(
  //         1,
  //         1000,
  //         {
  //           projectId: valueProjectInterested?.value,
  //         },
  //         companyID
  //       )
  //       .then((res) => {
  //         if (res?.items?.length > 0) {
  //           res.items.map((i) => {
  //             productArr.push({
  //               value: i.id,
  //               label: i.productName,
  //             });
  //           });
  //         }
  //       });
  //     setProductOptions(productArr);
  //   }
  // }, [valueProjectInterested]);

  useEffect(() => {
    if (projectList?.length > 0) {
      const projectArr: [any?] = [];
      projectList.map((item: any) => {
        projectArr.push({
          value: item.id,
          label: item.name,
        });
      });
      setProjectArr(projectArr);
    }
  }, [projectList]);

  useEffect(() => {
    const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");
    fetchProjects(
      EPaginate.DEFAULT_PAGE_INDEX,
      EPaginate.COMMON_PAGE_SIZE,
      String(companyID)
    );
  }, [dispatch]);

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
      modal_name={`${translator("lead_page.new_lead")}`}
      label="Name"
    >
      <Formik
        initialValues={{
          leadOwner: "",
          phoneNumber: "",
          gender: "",
          email: "",
          firstName: "",
          lastName: "",
          rating: "",
          status: "",
          leadSource: "",
          productInterest: "",
          projectInterested: "",
          note: "",
          street: "",
          ward: "",
          district: "",
          city: "",
        }}
        validationSchema={validate}
        onSubmit={handleCreateLead}
      >
        {({ values, setFieldValue }) => (
          <div>
            <Form>
              <h4 className="font-weight-normal">{`${translator(
                "lead_page.lead_information"
              )}`}</h4>
              <div className="row mt-4">
                <div className="col-6">
                  <SelectField
                    label={`${translator("lead_page.lead_owner")}`}
                    name="leadOwner"
                    options={optionLeadOwner}
                  />
                </div>
                <div className="col-6">
                  <InputField
                    label={`${translator("lead_page.phone")}`}
                    name="phoneNumber"
                    type="text"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <SelectField
                    label={`${translator("lead_page.gender")}`}
                    name="gender"
                    options={langCookies === "vi" ? GENDERS_VN : GENDERS_EN}
                  />
                </div>
                <div className="col-6">
                  <InputField label="Email" name="email" type="text" />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-6">
                  <InputField
                    label={`${translator("lead_page.first_name")}`}
                    name="firstName"
                    type="text"
                  />
                </div>
                <div className="col-6">
                  <InputField
                    label={`${translator("lead_page.last_name")}`}
                    name="lastName"
                    type="text"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  {/* <InputField
                              label="Rating"
                              name="rating"
                              type="text"
                            /> */}
                  <SelectField
                    label={`${translator("lead_page.rating")}`}
                    name="rating"
                    options={langCookies === "vi" ? RATING_VN : RATING_EN}
                  />
                </div>
                <div className="col-6">
                  <SelectField
                    label={`${translator("lead_page.lead_status")}`}
                    name="leadStatus"
                    options={
                      langCookies === "vi" ? LEAD_STATUSES_VN : LEAD_STATUSES_EN
                    }
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <SelectField
                    label={`${translator("lead_page.lead_source")}`}
                    name="leadSource"
                    options={
                      langCookies === "vi" ? LEAD_SOURCES_VN : LEAD_SOURCES_EN
                    }
                  />
                </div>
                <div className="col-6">
                  <label className="font-weight-normal">{`${translator(
                    "lead_page.project_interested"
                  )}`}</label>
                  <Select
                    name="projectInterested"
                    placeholder={`${translator(
                      "lead_page.project_interested_placeholder"
                    )}`}
                    options={projectArr}
                    onChange={(e: any) => {
                      changeProjectSelect(e);
                    }}
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <SelectField
                    label={`${translator("lead_page.product_interest")}`}
                    name="productInterest"
                    placeholder={`${translator(
                      "lead_page.project_interested_placeholder"
                    )}`}
                    value={valueProductInterest}
                    options={productOptions}
                    setValueProp={setValueProductInterest}
                  // disabled={productOptions.length > 0 ? false : true}
                  />
                </div>
                <div className="col-6">
                  <InputField
                    label={`${translator("lead_page.note")}`}
                    name="note"
                    type="text"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <DatePickerField
                    name="dateOfBirth"
                    label={`${translator("lead_page.date_of_birth")}`}
                    maxDate={new Date()}
                  />
                </div>
                <div className="col-6">
                  <InputField
                    label={`${translator("lead_page.social_media")}`}
                    name="socialMediaUrl"
                    type="text"
                  />
                </div>
              </div>
              <h4 className="font-weight-normal m-t-15">
                {`${translator("lead_page.address_information")}`}
              </h4>
              <div className="row mt-4">
                <div className="col-6">
                  <InputField
                    label={`${translator("lead_page.street")}`}
                    name="street"
                    type="text"
                  />
                </div>
                <div className="col-6">
                  <InputField
                    label={`${translator("lead_page.ward")}`}
                    name="ward"
                    type="text"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <InputField
                    label={`${translator("lead_page.district")}`}
                    name="district"
                    type="text"
                  />
                </div>
                <div className="col-6">
                  <InputField
                    label={`${translator("lead_page.city")}`}
                    name="city"
                    type="text"
                  />
                </div>
              </div>

              <div className="text-center mt-3">
                <button className="btn btn-dark" type="reset">
                  {`${translator("lead_page.btn_reset")}`}
                </button>
                <button className="btn btn-danger ml-3">
                  {`${translator("lead_page.btn_save_new")}`}
                </button>
                <button className="btn btn-danger ml-3" type="submit">
                  {`${translator("lead_page.btn_create")}`}
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

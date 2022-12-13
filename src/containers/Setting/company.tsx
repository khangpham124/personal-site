import React, { useEffect, useState } from "react";
import InputField from "../../components/ModalCreate/InputField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextAreaField from "components/ModalCreate/TextareaField";
import {
  EEmployeeCount,
  ICompany,
  IFormUpdateCompanyProfile,
} from "services/identity/company/types";
import { companyAPI } from "services/identity/company";
import toastr from "toastr";
import SelectField from "components/ModalCreate/SelectField";

import { useTranslation } from "react-i18next";
import Modal from "../../components/ModalCreate";
import { useRouter } from "next/router";
const servicesCompanyAPI = new companyAPI();

interface IOption {
  label: string;
  value: EEmployeeCount;
}
const emloyeeOptions: IOption[] = [
  {
    label: "0 - 10 employee",
    value: EEmployeeCount.MIN_0_MAX_10,
  },
  {
    label: "10 - 50 employee",
    value: EEmployeeCount.MIN_10_MAX_50,
  },
  {
    label: "50 - 100 employee",
    value: EEmployeeCount.MIN_50_MAX_100,
  },
  {
    label: "100 - 500 employee",
    value: EEmployeeCount.MIN_100_MAX_500,
  },
  {
    label: "500 - 1000 employee",
    value: EEmployeeCount.MIN_500_MAX_1000,
  },
  {
    label: "More than 1000 employees",
    value: EEmployeeCount.OVER_1000,
  },
];
interface IItemFormUpdate {
  elm?: "input" | "textarea" | "select";
  label: string;
  placeholder?: string;
  name: string;
  type?: string;
  required?: boolean;
  options?: IOption[];
}
const configUpdateForm: IItemFormUpdate[] = [
  {
    label: "Company name",
    name: "name",
    required: true,
  },
  {
    elm: "select",
    label: "Employee count",
    options: emloyeeOptions,
    name: "employeeCount",
    type: "number",
  },
  {
    label: "Phone",
    name: "phoneNumber",
  },
  {
    label: "Website",
    name: "website",
  },
  {
    elm: "textarea",
    label: "Description",
    name: "description",
  },
  {
    label: "Address",
    name: "address",
  },
];
const updateCompanySchema = Yup.object().shape({
  name: Yup.string()
    .max(100, "Max length is 100 characters.")
    .required("Required"),
  phoneNumber: Yup.string().matches(
    new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "i"),
    "Phone number Incorrect format"
  ),
  website: Yup.string().matches(
    new RegExp(
      /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "i"
    ),
    "The website is not in the correct format"
  ),
});
interface IProps {
  companyDetail: ICompany | null;
}

const CompanyContainer: React.FC<IProps> = ({ companyDetail }) => {
  const servicesCompany = new companyAPI();
  const Router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [companySelect, setCompanySelect] = useState("");
  const [companyNameSelect, setCompanyNameSelect] = useState("");
  const { t: translator } = useTranslation();
  const childFormElm = (item: IItemFormUpdate) => {
    switch (item.elm) {
      case "textarea":
        return (
          <TextAreaField
            placeholder={item.placeholder ?? ""}
            label={item.label}
            name={item.name}
            required={item.required ?? false}
          />
        );
      case "select":
        return (
          <SelectField
            options={emloyeeOptions}
            label={item.label}
            name={item.name}
            required={item.required ?? false}
          />
        );
      default:
        return (
          <InputField
            placeholder={item.placeholder ?? ""}
            label={item.label}
            name={item.name}
            type={item.type ?? "text"}
            required={item.required ?? false}
          />
        );
    }
  };

  const handleDeleteCompany = async (id: string) => {
    servicesCompanyAPI.deleteCompany(id).then((res) => {
      Router.replace(`/`);
    });
  };

  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid card">
          <div className="card-body">
            <h4 className="text-themecolor">Company Information</h4>
            <Formik
              initialValues={{
                name: companyDetail?.name ?? "",
                phoneNumber: companyDetail?.phoneNumber ?? "",
                website: companyDetail?.website ?? "",
                address: companyDetail?.address ?? "",
                description: companyDetail?.description ?? "",
                employeeCount:
                  emloyeeOptions.find(
                    (e) => e.value === companyDetail?.employeeCount
                  ) ?? null,
              }}
              validationSchema={updateCompanySchema}
              enableReinitialize={true}
              onSubmit={async (values) => {
                const body: IFormUpdateCompanyProfile = {
                  name: values?.name,
                  phoneNumber: values?.phoneNumber,
                  website: values?.website,
                  address: values?.address,
                  description: values?.description,
                  employeeCount: values?.employeeCount?.value,
                };
                try {
                  if (!companyDetail?.id) {
                    toastr.error("CompanyID not found");
                    return;
                  }
                  const update = await servicesCompany.UpdateCompanyProfileById(
                    companyDetail?.id,
                    body
                  );
                  if (update && update.data) {
                    toastr.success("Update company profile success");
                    return;
                  }
                  toastr.error(update.error);
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              {(props) => {
                // const { handleBlur, handleChange, errors, touched } = props;
                return (
                  <Form className="mt-4">
                    {configUpdateForm.map((elm, i) => {
                      return (
                        <div className="form-group" key={i}>
                          <div className="col-md-12">{childFormElm(elm)}</div>
                        </div>
                      );
                    })}
                    <div className="form-group">
                      <div className="col-sm-12">
                        <div className="mb-2">
                          <label className="font-weight-normal">
                            Project owner
                          </label>
                          <div className="mt-2">
                            {companyDetail?.companyOwner.firstName}
                            {companyDetail?.companyOwner.lastName}
                            <p>
                              <em>{companyDetail?.companyOwner.email}</em>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-12">
                          <button className="btn btn-success" type="submit">
                            Update
                          </button>

                          <a
                            className="btn btn-danger ml-3"
                            onClick={() => {
                              setShowModal(true);
                              setCompanySelect(String(companyDetail?.id));
                              setCompanyNameSelect(String(companyDetail?.name));
                            }}
                          >
                            Delete this company
                          </a>
                        </div>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        modal_name={`Delete company`}
        label={`Delete company`}
      >
        Are you sure to delete your company {companyNameSelect} ?
        <div className="text-center mt-3">
          <button
            className="btn btn-dark"
            type="reset"
            onClick={() => {
              setShowModal(false);
            }}
          >
            {`${translator("lead_page.btn_no")}`}
          </button>
          <a
            className="btn btn-danger ml-3"
            onClick={() => {
              handleDeleteCompany(companySelect);
            }}
          >
            {`${translator("lead_page.btn_delete")}`}
          </a>
        </div>
      </Modal>

      <footer className="footer">© 2022 CRM Dreamland</footer>
    </div>
  );
};

export default CompanyContainer;

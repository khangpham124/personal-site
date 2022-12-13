import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import toastr from "toastr";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { PRODUCT_STATUS_EN, PRODUCT_STATUS_VI } from "./constants";
import { TRootState } from "src/state-management/reducers";
import { EPaginate } from "utils/types";
import Modal from "../../components/ModalCreate";
import InputField from "../../components/ModalCreate/InputField";
import SelectField from "../../components/ModalCreate/SelectField";
import CurrencyInput from "../../components/ModalCreate/CurrencyInput";
import {
  createProductAction,
  fetchProductsAction,
} from "src/state-management/actions/products";
import Cookies from "js-cookie";
import { ProjectAPI } from "../../services/identity/project-api";
import { ProductstAPI } from "../../services/identity/products";
import { TCreateProductBody } from "services/identity/products/types";

type Props = {
  showModal: boolean;
  setShowModal: Function;
  getNewListProducts: () => void;
};

const CreateProductForm: React.FC<Props> = ({
  showModal,
  setShowModal,
  getNewListProducts,
}) => {
  const { t: translator } = useTranslation();
  const projects = useSelector(
    (state: TRootState) => state.projects.all?.items
  );
  const dispatch = useDispatch();
  const [listProject, setListProject] = useState<any[]>([]);
  const lang = Cookies.get("lang");
  const companyID = String(Cookies.get("companyID"));
  const servicesProjectAPI = new ProjectAPI();
  const servicesProductAPI = new ProductstAPI();

  const validate = Yup.object({
    productName: Yup.string()
      .max(
        100,
        `${translator("product_page.text_product_name")} ${translator(
          "product_page.validate_100_characters"
        )}`
      )
      .required("Required"),
    projectName: Yup.mixed().required("Required"),
    price: Yup.string().required("Required"),
    floor: Yup.string().matches(
      /^[a-zA-Z0-9]+$/,
      `${translator("product_page.text_floor_caution")}`
    ),
    block: Yup.string().max(
      100,
      `Block ${translator("product_page.validate_100_characters")}`
    ),
    note: Yup.string().max(
      1000,
      `${translator("product_page.text_note")} ${translator(
        "product_page.validate_1000_characters"
      )}`
    ),
  });

  const fetchProjects = (
    pageIndex: number,
    pageSize: number,
    companyId: string
  ) => {
    const projectsArr: [any?] = [];
    servicesProjectAPI
      .fetchProjects(pageIndex, pageSize, companyId)
      .then((items) => {
        items.items.map((i: any) => {
          projectsArr.push({
            value: i.id,
            label: i.name,
          });
        });

        setListProject(projectsArr);
      });
  };

  const handleCreateProduct = (values: any) => {
    const body: { [key: string]: string | number } = {
      productName: String(values.productName),
      projectId: values.projectName ? String(values.projectName.value) : "",
      productStatus: values.projectStatus
        ? String(values.projectStatus.value)
        : "",
      price: Number(values.price),
      block: String(values.block),
      floor: String(values.floor),
      note: String(values.note),
      companyId: companyID,
    };
    Object.keys(body).map(function (key) {
      if (body[key] === "") {
        delete body[key];
      }
    });

    // dispatch(
    //   createProductAction.request(body, () => {
    //     fetchProducts(EPaginate.DEFAULT_PAGE_INDEX, EPaginate.COMMON_PAGE_SIZE);
    //     toastr.success("Create successfully");
    //     setShowModal(false);
    //     if (functionHandle) functionHandle();
    //   })
    // );
    servicesProductAPI.createProduct(body as TCreateProductBody).then((res) => {
      toastr.success("Create successfully");
      getNewListProducts()
      setShowModal(false);
    });
  };

  useEffect(() => {
    fetchProjects(
      EPaginate.DEFAULT_PAGE_INDEX,
      EPaginate.COMMON_PAGE_SIZE,
      companyID
    );
  }, []);

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
      modal_name={`${translator("product_page.text_new_product")}`}
      label="Name"
    >
      <Formik
        initialValues={{
          productName: "",
          projectName: "",
          projectStatus: "",
          price: "",
          block: "",
          floor: "",
          note: "",
        }}
        validationSchema={validate}
        onSubmit={handleCreateProduct}
      >
        {() => (
          <div>
            <Form>
              <h4 className="font-weight-normal">{`${translator(
                "product_page.text_product_information"
              )}`}</h4>
              <div className="row mt-4">
                <div className="col-6">
                  <InputField
                    label={`${translator("product_page.text_product_name")}`}
                    name="productName"
                    type="text"
                  />
                </div>
                <div className="col-6">
                  <SelectField
                    label={`${translator("product_page.text_project_name")}`}
                    name="projectName"
                    options={listProject}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-6">
                  <SelectField
                    label={`${translator("product_page.text_product_status")}`}
                    name="projectStatus"
                    options={
                      lang === "vi" ? PRODUCT_STATUS_VI : PRODUCT_STATUS_EN
                    }
                  />
                </div>
                <div className="col-6">
                  <CurrencyInput
                    label={`${translator("product_page.text_price")}`}
                    name="price"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-6">
                  <InputField label="Block" name="block" type="text" />
                </div>
                <div className="col-6">
                  <InputField
                    label={`${translator("product_page.text_floor")}`}
                    name="floor"
                    type="text"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12">
                  <InputField
                    label={`${translator("product_page.text_note")}`}
                    name="note"
                    type="text"
                  />
                </div>
              </div>
              <div className="text-center mt-4">
                <button className="btn btn-dark" type="reset">
                  {`${translator("product_page.btn_reset")}`}
                </button>
                <button className="btn btn-danger ml-3">
                  {`${translator("product_page.btn_save_new")}`}
                </button>
                <button className="btn btn-danger ml-3" type="submit">
                  {`${translator("product_page.btn_create")}`}
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </Modal>
  );
};

export default CreateProductForm;

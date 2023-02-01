import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import Router from "next/router";
import * as Yup from "yup";
import { FileUploader } from "react-drag-drop-files";
import toastr from "toastr";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { TRootState } from "src/state-management/reducers";
import { PRODUCT_STATUS_VI, PRODUCT_STATUS_EN } from "./constants";
import InputField from "../../components/ModalCreate/InputField";
import SelectField from "../../components/ModalCreate/SelectField";
import CurrencyInput from "../../components/ModalCreate/CurrencyInput";
import {
  fetchProductAction,
  updateProductAction,
} from "src/state-management/actions/products";
import Cookies from "js-cookie";
import { ProjectAPI } from "../../services/identity/project-api";
import { ProductstAPI } from "../../services/identity/products";
import Select from "react-select";

type TProductsContainerProps = {};

type ProductType = {
  productName: string;
  price: string;
  projectStatus: any;
  projectName: any;
  block: string;
  floor: string;
  note: string;
};

const servicesProjectAPI = new ProjectAPI();
const servicesProductAPI = new ProductstAPI();
const ProductDetailContainer: React.FC<TProductsContainerProps> = ({}) => {
  const { t: translator } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const lang = Cookies.get("lang");
  const companyID = Cookies.get("companyID");
  const companyName = Cookies.get("companyName");

  const [file, setFile] = useState(null);
  const [listAttachments, setlistAttachments] = useState<any[]>([]);
  const [errUpload, setErrUpload] = useState("");
  const [listProject, setListProject] = useState<any[]>([]);
  const [projectNameSelect, setProjectNameSelect] = useState<any>({
    label: "",
    value: "",
  });
  const [projectStatusSelect, setProjectStatusSelect] = useState<any>({
    label: "",
    value: "",
  });

  const { productDetail: productId } = router.query;

  const [selectedProject, setSelectedProject] = useState<any>({
    label: "",
    value: "",
  });

  const productById = useSelector(
    (state: TRootState) => state.products.productById
  );
  const projects = useSelector(
    (state: TRootState) => state.projects.all?.items
  );

  const validate = Yup.object({
    productName: Yup.string()
      .max(
        100,
        `${translator("product_page.text_product_name")} ${translator(
          "product_page.validate_100_characters"
        )}`
      )
      .required("Required"),
    // floor: Yup.string().matches(
    //   /^[a-zA-Z0-9]+$/,
    //   `#${translator("product_page.text_floor_caution")}`
    // ),
    // block: Yup.string().max(
    //   100,
    //   `Block ${translator("product_page.validate_100_characters")}`
    // ),
    // note: Yup.string().max(
    //   1000,
    //   `${translator("product_page.text_note")} ${translator(
    //     "product_page.validate_1000_characters"
    //   )}`
    // ),
  });

  function formatDate(date: any) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("-");
  }

  const handleChange = (file: any) => {
    let fileName = file.name;
    let fileSize = file.size;
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
  };

  const onSizeError = () => {
    setErrUpload("Uploaded files must be smaller than 20mb");
  };

  const removeAttachment = (index: number) => {
    listAttachments.splice(index, 1);
    setlistAttachments(listAttachments);
    setFile(listAttachments as any);
  };

  const getInitProjectStatus = useMemo(() => {
    let projectStatusVal = null;
    let productList = lang === "vi" ? PRODUCT_STATUS_VI : PRODUCT_STATUS_EN;
    productList.map((item) => {
      if (productById?.productStatus === item.value) {
        projectStatusVal = item;
      }
    });
    return projectStatusVal;
  }, [productById, lang]);

  const onSubmit = (values: ProductType) => {
    const body = {
      productName: values.productName,
      price: Number(values.price),
      productStatus: String(values.projectStatus.value),
      projectId: selectedProject?.value
        ? selectedProject?.value
        : selectProject[0]["value"],
      block: String(values.block),
      floor: String(values.floor),
      note: String(values.note),
    };
    servicesProductAPI.updateProduct(body, String(productId)).then((res) => {
      if (res) {
        toastr.success("Update successfully");
      }
    });
  };

  const listProjectOptions = listProject.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const selectProject = listProject
    .filter((item) => item.id === productById?.projectId)
    .map((selected: any) => ({ label: selected.name, value: selected.id }));

  useEffect(() => {
    servicesProjectAPI.fetchProjects(1, 200, companyID).then((items) => {
      setListProject(items.items);
    });
    setSelectedProject(selectProject[0]);
  }, []);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductAction.request(productId as string));
    }
  }, [productId]);

  useEffect(() => {
    if (productById) {
      setProjectStatusSelect({
        ...projectStatusSelect,
        label: productById.productStatus,
        value: productById.productStatus,
      });
    }
  }, [productById]);

  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card-body">
                <div className="d-flex">
                  <div role="button">
                    <Link href={`/${companyName}/products`}>
                      <i className="fas fa-arrow-left"></i>
                    </Link>
                  </div>
                  <div className="p-l-10">
                    <h4 className="card-title">{productById?.productName}</h4>
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
                      {productById && productById.id === productId && (
                        <Formik
                          initialValues={{
                            productName: productById?.productName,
                            price: productById?.price,
                            block: productById?.block,
                            floor: productById?.floor,
                            note: productById?.note,
                            projectStatus: getInitProjectStatus,
                            projectName: selectedProject,
                          }}
                          onSubmit={onSubmit}
                          // validationSchema={validate}
                        >
                          {(props) => {
                            const { handleBlur } = props;
                            return (
                              <div>
                                <Form>
                                  <div className="row mt-4">
                                    <div className="col-6">
                                      <InputField
                                        label={`${translator(
                                          "product_page.text_product_name"
                                        )}`}
                                        name="productName"
                                        id="productName"
                                        type="text"
                                        handleBlur={handleBlur}
                                        required
                                      />
                                    </div>
                                    <div className="col-6">
                                      <label>
                                        {translator(
                                          "product_page.text_project_name"
                                        )}
                                      </label>
                                      <Select
                                        name="projectName"
                                        id="projectName"
                                        options={listProjectOptions}
                                        className="mt-2"
                                        onChange={(e: any) => {
                                          const step = {
                                            label: e.label,
                                            value: e.value,
                                          };
                                          setSelectedProject(step);
                                        }}
                                        defaultValue={selectProject[0]}
                                      />
                                    </div>
                                  </div>
                                  <div className="row mt-2">
                                    <div className="col-6">
                                      <SelectField
                                        label={`${translator(
                                          "product_page.text_product_status"
                                        )}`}
                                        name="projectStatus"
                                        id="projectStatus"
                                        options={
                                          lang === "vi"
                                            ? PRODUCT_STATUS_VI
                                            : PRODUCT_STATUS_EN
                                        }
                                      />
                                    </div>
                                    <div className="col-6">
                                      <CurrencyInput
                                        label={`${translator(
                                          "product_page.text_price"
                                        )}`}
                                        id="price"
                                        name="price"
                                        handleBlur={handleBlur}
                                      />
                                    </div>
                                  </div>
                                  <div className="row mt-2">
                                    <div className="col-6">
                                      <InputField
                                        label="Block"
                                        name="block"
                                        id="block"
                                        type="text"
                                        handleBlur={handleBlur}
                                      />
                                    </div>
                                    <div className="col-6">
                                      <InputField
                                        label={`${translator(
                                          "product_page.text_floor"
                                        )}`}
                                        name="floor"
                                        id="floor"
                                        type="text"
                                        handleBlur={handleBlur}
                                      />
                                    </div>
                                  </div>
                                  <div className="row mt-2">
                                    <div className="col-12">
                                      <InputField
                                        label={`${translator(
                                          "product_page.text_note"
                                        )}`}
                                        name="note"
                                        id="note"
                                        type="text"
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
                          handleChange={handleChange}
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
                        {listAttachments.map((file, index) => (
                          <div className="w-48 border p-3 mt-4 d-flex align-items-center justify-content-between">
                            <div className="w-80 d-flex align-items-center">
                              <i className="ti-zip fz-30"></i>
                              <div className="pd-left-15">
                                <div className="">{file.name}</div>
                                <div className="text-note mt-1 fz-12">
                                  {file.fileType} {file.fileSize}kb{" "}
                                  {file.fileDate}
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
          </div>
        </div>
      </div>

      <footer className="footer">© 2022 CRM Dreamland</footer>
    </div>
  );
};

export default ProductDetailContainer;

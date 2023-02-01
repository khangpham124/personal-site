import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import toastr from "toastr";
import Cookies from "js-cookie";
import { CSVLink } from "react-csv";
import { useTranslation } from "react-i18next";
import { TRootState } from "src/state-management/reducers";
import { fetchProjectsAction } from "src/state-management/actions/projects";
import { fetchProductsAction } from "src/state-management/actions/products";
import { EPaginate } from "utils/types";
import CreateProductForm from "./createProductForm";
import Paginate from "../../components/Paginate";
import FilterProduct from "./filterProduct";
import { ProductstAPI } from "../../services/identity/products";

import { ProjectAPI } from "../../services/identity/project-api";
const servicesProjectAPI = new ProjectAPI();

type FilterType = {
  productName: string;
  price: number;
  status: string;
  project: string;
  createdDate: string;
};

const ProductsContainer: React.FC = () => {
  const dispatch = useDispatch();
  const langCookies = Cookies.get("lang");
  const companyID = Cookies.get("companyID");
  const servicesProductAPI = new ProductstAPI();
  const { t: translator } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(EPaginate.DEFAULT_PAGE_INDEX);
  const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");

  //** Filter */
  const [activeFilter, setActiveFilter] = useState<boolean>(false);
  const [projectList, setProjectList] = useState<any[]>([]);
  const [searchFilterValue, setSearchFilterValue] = useState("");
  const [filters, setFilters] = useState({
    productName: {
      label: "Product name",
      type: "text",
      options: [],
    },
    price: {
      label: "Price",
      type: "number",
      options: [],
    },
    status: {
      label: "Status",
      type: "text",
      options: [],
    },
    project: {
      label: "Project",
      type: "text",
      options: [],
    },
    createdDate: {
      label: "Created date",
      type: "text",
      options: [],
    },
  });

  const [filtersAfterSearch, setFiltersAfterSearch] = useState(filters);

  const [filtersChecked, setFiltersChecked] = useState({
    productName: false,
    price: false,
    status: false,
    project: false,
    createdDate: false,
  });
  const [filterValues, setFilterValues] = useState<FilterType>({
    productName: "",
    price: 0,
    status: "",
    project: "",
    createdDate: "",
  });
  //** End of Filter */

  useEffect(() => {
    servicesProjectAPI.fetchProjects(1, 200, companyID).then((items) => {
      setProjectList(items.items);
    });
  }, []);

  const [checkedAll, setCheckedAll] = useState(false);
  const [selectedProductList, setSelectedProductList] = useState<any>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [dataExportFile, setDataExportFile] = useState<any>([]);
  const [products, setProducts] = useState<any>([]);

  const handleCreateProduct = (values: any) => {
    toastr.success("Create successfully");
  };

  const getStatusEn = (status: any) => {
    if (status) {
      if (status === "OpenForSale") {
        return "Open For Sale";
      } else {
        return "Turn Off Booking";
      }
    }
  };

  const getStatusVn = (status: any) => {
    if (status) {
      if (status === "OpenForSale") {
        return "Mở bán";
      } else {
        return "Tắt đặt chỗ";
      }
    }
  };

  const getProjectName = (projectId: string, projectList: any) => {
    let name = "";
    if (projectList?.length > 0) {
      projectList.forEach((item: any) => {
        if (item.id === projectId) {
          name = item.name;
        }
      });
    }
    return name;
  };

  const handlePaginate = ({ selected }: any) => {
    setCurrentPage(selected);
    const optionalParams = { sort: { createdAt: "DESC" } };

    servicesProductAPI
      .fetchProducts(
        selected,
        EPaginate.COMMON_PAGE_SIZE,
        optionalParams,
        companyID
      )
      .then((res) => {
        if (res?.items?.length > 0) {
          setTotalItems(Number(res.totalItems));
          setProducts(res.items);
        }
      });
  };

  const headersExportFile = [
    { label: "Product ID", key: "id" },
    { label: "Product Name", key: "productName" },
    { label: "Status", key: "status" },
    { label: "Price", key: "price" },
    { label: "Block", key: "block" },
    { label: "Floor", key: "floor" },
    { label: "Project name", key: "projectName" },
    { label: "Project ID", key: "projectId" },
    { label: "Note", key: "note" },
    { label: "Modified time", key: "updatedAt" },
    { label: "Modified by", key: "updatedBy" },
    { label: "Modified by ID", key: "updatedById" },
    { label: "Created date", key: "createdAt" },
    { label: "Created by", key: "createdBy" },
    { label: "Created by ID", key: "createdById" },
  ];

  const handleExportFile = async (ids: any) => {
    const arrDataExportFile = dataExportFile;
    const body = {
      ids: ids,
    };
    await servicesProductAPI.exportProduct(body).then((res) => {
      if (res) {
        const dataExp = res;
        dataExp.map((item: any) => {
          if (!selectedProductList.includes(item.id)) {
            arrDataExportFile.push(item);
          }
        });
      }
    });

    setDataExportFile(arrDataExportFile);
  };

  const getAllProducts = () => {
    servicesProductAPI
      .fetchProducts(1, 1000, null, companyID)
      .then((res) => {
        if (res?.items?.length > 0) {
          setTotalItems(Number(res.totalItems));
          setProducts(res.items);
        }
      })
      .then((error) => console.error(error));
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    // console.log("dataExportFile", dataExportFile);
  }, [dataExportFile]);

  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row page-titles">
            <div className="col-md-5 d-flex align-items-center">
              <h3 className="text-themecolor">{`${translator(
                "product_page.text_products"
              )}`}</h3>
            </div>
            <div className="col-md-7 align-self-center text-right">
              <div className="d-flex justify-content-end align-items-center">
                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15"
                  data-toggle="modal"
                  data-target="#responsive-modal"
                  onClick={() => setShowModal(true)}
                >
                  <i className="fa fa-plus-circle"></i>{" "}
                  {`${translator("product_page.text_new")}`}
                </button>
                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15"
                  onClick={() => {
                    if (selectedProductList.length === 0) {
                      toastr.error(`Please select product to export`);
                    }
                  }}
                >
                  {selectedProductList.length > 0 &&
                  dataExportFile.length === selectedProductList.length ? (
                    <CSVLink data={dataExportFile} headers={headersExportFile}>
                      <i className="fa fa-download" aria-hidden="true"></i>{" "}
                      {`${translator("product_page.text_export")}`}
                    </CSVLink>
                  ) : (
                    <>
                      <i className="fa fa-download" aria-hidden="true"></i>{" "}
                      {`${translator("product_page.text_export")}`}
                    </>
                  )}
                </button>

                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15"
                  onClick={() => setActiveFilter(!activeFilter)}
                >
                  <i className="fa fa-filter" aria-hidden="true"></i>{" "}
                  {`${translator("product_page.text_filter")}`}
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-subtitle">{totalItems} Đơn vị</h6>
                  <div className="table-wrapper">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="wd-50">
                              <input
                                type="checkbox"
                                checked={
                                  selectedProductList.length ===
                                    products?.totalItems || checkAll
                                }
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setCheckAll(true);
                                    const arr = products?.map(
                                      (product: any) => product.id
                                    );
                                    setSelectedProductList([arr]);
                                    handleExportFile(arr);
                                    // setDataExportFile(values);
                                  } else {
                                    setSelectedProductList([]);
                                    setDataExportFile([]);
                                    setCheckAll(false);
                                  }
                                }}
                              ></input>
                            </th>
                            <th className="wd-100">{`${translator(
                              "product_page.text_product_name"
                            )}`}</th>
                            <th className="wd-100">{`${translator(
                              "product_page.text_price"
                            )}`}</th>
                            <th className="wd-100">{`${translator(
                              "product_page.text_status"
                            )}`}</th>
                            <th className="wd-100">{`${translator(
                              "product_page.text_project"
                            )}`}</th>
                            <th className="wd-100">{`${translator(
                              "product_page.text_created_date"
                            )}`}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products?.map((product: any, index: number) => (
                            <tr key={index}>
                              <td>
                                <input
                                  type="checkbox"
                                  checked={
                                    selectedProductList.includes(product.id) ||
                                    checkAll
                                  }
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      if (
                                        selectedProductList.length > 0 &&
                                        selectedProductList.includes(product.id)
                                      ) {
                                        const arr = [
                                          ...selectedProductList,
                                        ].filter((i) => i !== product.id);
                                        setSelectedProductList([...arr]);
                                        handleExportFile(arr);
                                      } else {
                                        const arr = [
                                          ...selectedProductList,
                                          product.id,
                                        ];
                                        setSelectedProductList([...arr]);
                                        handleExportFile(arr);
                                      }
                                    } else {
                                      const posi = selectedProductList.indexOf(
                                        product.id
                                      );
                                      selectedProductList.splice(posi, 1);
                                      const arr = [...selectedProductList];
                                      setSelectedProductList(arr);
                                      handleExportFile(arr);
                                    }
                                  }}
                                />
                              </td>
                              <td>
                                <Link href={`/products/${product.id}`}>
                                  {product.productName}
                                </Link>
                              </td>
                              <td>
                                {product.price
                                  ? Number(product.price).toLocaleString(
                                      "it-IT",
                                      {
                                        style: "currency",
                                        currency: "VND",
                                      }
                                    )
                                  : "0 VND"}
                              </td>
                              <td>
                                {langCookies === "en"
                                  ? getStatusEn(product.productStatus)
                                  : getStatusVn(product.productStatus)}
                              </td>
                              <td>
                                {getProjectName(product.projectId, projectList)}
                              </td>
                              <td>
                                {new Date(
                                  product.createdAt
                                ).toLocaleDateString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <FilterProduct
                      activeFilter={activeFilter}
                      setCurrentPage={setCurrentPage}
                      // setActiveFilter={setActiveFilter}
                      // searchFilterValue={searchFilterValue}
                      // setSearchFilterValue={setSearchFilterValue}
                      // filters={filters}
                      // setFilters={setFilters}
                      // filtersAfterSearch={filtersAfterSearch}
                      // setFiltersAfterSearch={setFiltersAfterSearch}
                      // filtersChecked={filtersChecked}
                      // setFiltersChecked={setFiltersChecked}
                      // filterValues={filterValues}
                      // setFilterValues={setFilterValues}
                    />
                  </div>
                  <Paginate
                    total={products?.totalItems}
                    pageSize={products?.pageSize}
                    pageIndex={products?.pageIndex}
                    onChange={handlePaginate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateProductForm
        showModal={showModal}
        setShowModal={setShowModal}
        getNewListProducts={getAllProducts}
      />
      <footer className="footer">© 2022 CRM Dreamland</footer>
    </div>
  );
};

export default ProductsContainer;

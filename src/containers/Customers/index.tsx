import React, { useState } from "react";
import Modal from "../../components/ModalCreate";
import Paginate from "components/Paginate";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { EPaginate } from "utils/types";
import Link from "next/link";
import {
  OPTION_GENDER_EN,
  OPTION_GENDER_VN,
  LEAD_SOURCES_EN,
  LEAD_SOURCES_VN,
  ICustomerQuickFilterOptions,
  ECustomerQuickFilter,
  IColumnsBody,
} from "./constants";
import Cookies from "js-cookie";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "../../components/Column";
import { styled } from "@stitches/react";
import toastr from "toastr";
import { CSVLink } from "react-csv";
import { useTranslation } from "react-i18next";
import moment from "moment";
import FilterContainer from "./filter";
import CreateContainer from "./create";
import CustomersInstance from "services/identity/customers";
import {
  TCustomer,
  TFetchCustomersResponse,
} from "services/identity/customers/types";
import { CustomerAPI } from "../../services/identity/customer-api";

const CustomersContainer: React.FC = () => {
  const dispatch = useDispatch();
  const servicesCustomersAPI = new CustomerAPI();
  const { t: translator } = useTranslation();
  const langCookies = Cookies.get("lang");
  const companyID = Cookies.get("companyID");
  const companyName = String(Cookies.get("companyName"));
  const [customers, setCustomers] = useState<TFetchCustomersResponse>();
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(EPaginate.DEFAULT_PAGE_INDEX);
  const [dataExportFile, setDataExportFile] = useState<any>([]);
  const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");

  const handleQuickFilter = (value: ECustomerQuickFilter) => {
    const optionalParams = {
      sort: JSON.stringify({ createdAt: "ASC" }),
      quickFilter: value,
    };
    fetchCustomers(
      1,
      EPaginate.COMMON_PAGE_SIZE,
      String(companyID),
      optionalParams
    );
  };
  const handlePaginate = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    const optionalParams = { sort: { createdAt: "DESC" } };
    if (companyID) {
      fetchCustomers(
        selected,
        EPaginate.COMMON_PAGE_SIZE,
        companyID,
        optionalParams
      );
    }
  };

  const fetchCustomers = (
    pageIndex: number,
    pageSize: number,
    companyId: string,
    optionalParams?: any
  ) => {
    CustomersInstance.fetchCustomers(
      pageIndex,
      pageSize,
      companyId,
      optionalParams
    ).then((items) => {
      setCustomers(items);
    });
  };

  useEffect(() => {
    const optionalParams = { sort: JSON.stringify({ createdAt: "DESC" }) };
    if (companyID) {
      fetchCustomers(
        EPaginate.DEFAULT_PAGE_INDEX,
        EPaginate.COMMON_PAGE_SIZE,
        companyID,
        optionalParams
      );
    }
  }, [dispatch]);

  const [showColumn, setshowColumn] = useState(false);
  const StyledColumns = styled("div", {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    margin: "0px auto",
    width: "80%",
    gap: "8px",
  });
  let initialColumns: {
    [key: string]: {
      id: "show" | "hide";
      list: string[];
    };
  } = {
    hide: {
      id: "hide",
      list: [],
    },
    show: {
      id: "show",
      list: [
        "Phone",
        "Email",
        "Lead Source",
        "Street",
        "City",
        "Gender",
        "Estimated income",

        "Social media",
        "Created date",
        "Last modified by",
        "Customer's budget",
      ],
    },
  };

  const [columns, setColumns] = useState(initialColumns);
  const [hideEmail, setHideEmail] = useState(false);
  const [hidePhone, setHidePhone] = useState(false);
  const [hideLeadSource, setHideLeadSource] = useState(false);
  const [hideStreet, setHideStreet] = useState(false);
  const [hideCity, setHideCity] = useState(false);
  const [hideGender, setHideGender] = useState(false);
  const [hideEIC, setHideEIC] = useState(false);
  const [hideSocialMedia, setHideSocialMedia] = useState(false);
  const [hideCreatedDate, setHideCreatedDate] = useState(false);
  const [hideLastModifiedBy, setHideLastModifiedBy] = useState(false);
  const [hideCustomerBudget, setHideCustomerBudget] = useState(false);

  const [seqEmail, setSeqEmail] = useState(0);
  const [seqPhone, setSeqPhone] = useState(0);
  const [seqLeadSource, setSeqLeadSource] = useState(0);
  const [seqStreet, setSeqStreet] = useState(0);
  const [seqCity, setSeqCity] = useState(0);
  const [seqGender, setSeqGender] = useState(0);
  const [seqEIC, setSeqEIC] = useState(0);

  const [seqSocialMedia, setSeqSocialMedia] = useState(0);
  const [seqCreatedDate, setSeqCreatedDate] = useState(0);
  const [seqLastModifiedBy, setSeqLastModifiedBy] = useState(0);
  const [seqCustomerBudget, setSeqCustomerBudget] = useState(0);
  const [activeFilter, setActiveFilter] = useState(false);

  const [selectedCustomerList, setSelectedCustomerList] = useState<string[]>(
    []
  );
  const [totalItems, setTotalItems] = useState<any>([]);

  const [
    showDeleteMassCustomers,
    setShowDeleteMassCustomers,
  ] = useState<boolean>(false);

  useEffect(() => {
    const hideList = JSON.parse(localStorage.getItem("hide_customer") ?? "{}");
    const showList = JSON.parse(localStorage.getItem("show_customer") ?? "{}");
    let listInHide = hideList?.list ? hideList?.list : initialColumns.hide.list;
    let listInShow = showList?.list ? showList?.list : initialColumns.show.list;
    initialColumns.hide.list = listInHide;
    initialColumns.show.list = listInShow;
    // Set Show hide columm
    initialColumns.hide?.list?.includes("Email")
      ? setHideEmail(true)
      : setHideEmail(false);
    initialColumns.hide?.list?.includes("Phone")
      ? setHidePhone(true)
      : setHidePhone(false);

    initialColumns.hide?.list?.includes("Lead Source")
      ? setHideLeadSource(true)
      : setHideLeadSource(false);
    initialColumns.hide?.list?.includes("Street")
      ? setHideStreet(true)
      : setHideStreet(false);
    initialColumns.hide?.list?.includes("City")
      ? setHideCity(true)
      : setHideCity(false);
    initialColumns.hide?.list?.includes("Gender")
      ? setHideGender(true)
      : setHideGender(false);
    initialColumns.hide?.list?.includes("Estimated income")
      ? setHideEIC(true)
      : setHideEIC(false);

    initialColumns.hide?.list?.includes("Social media")
      ? setHideSocialMedia(true)
      : setHideSocialMedia(false);

    initialColumns.hide?.list?.includes("Created date")
      ? setHideCreatedDate(true)
      : setHideCreatedDate(false);

    initialColumns.hide?.list?.includes("Last modified by")
      ? setHideLastModifiedBy(true)
      : setHideLastModifiedBy(false);

    initialColumns.hide?.list?.includes("Customer's budget")
      ? setHideCustomerBudget(true)
      : setHideCustomerBudget(false);

    // Set SQ column
    setSeqPhone(initialColumns.show?.list?.indexOf("Phone"));
    setSeqEmail(initialColumns.show?.list?.indexOf("Email"));
    setSeqLeadSource(initialColumns.show?.list?.indexOf("Lead Source"));
    setSeqStreet(initialColumns.show?.list?.indexOf("Street"));
    setSeqCity(initialColumns.show?.list?.indexOf("City"));
    setSeqGender(initialColumns.show?.list?.indexOf("Gender"));
    setSeqEIC(initialColumns.show?.list?.indexOf("Estimated income"));

    setSeqSocialMedia(initialColumns.show?.list?.indexOf("Social media"));
    setSeqCreatedDate(initialColumns.show?.list?.indexOf("Created date"));
    setSeqLastModifiedBy(
      initialColumns.show?.list?.indexOf("Last modified by")
    );
    setSeqCustomerBudget(
      initialColumns.show?.list?.indexOf("Customer's budget")
    );
  }, []);

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (destination === undefined || destination === null) return null;
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];
    if (start === end) {
      const newList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      );

      newList.splice(destination.index, 0, start.list[source.index]);

      const newCol = {
        id: start.id,
        list: newList,
      };
      if (newCol.id === "show") {
        localStorage.setItem("show_customer", JSON.stringify(newCol));
        initialColumns.show = newCol;
      }
      setColumns((state) => ({ ...state, [newCol.id]: newCol }));

      return null;
    } else {
      const newStartList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      );

      const newStartCol = {
        id: start.id,
        list: newStartList,
      };

      const newEndList = end.list;

      newEndList.splice(destination.index, 0, start.list[source.index]);

      const newEndCol = {
        id: end.id,
        list: newEndList,
      };

      localStorage.setItem(
        newStartCol.id + "_customer",
        JSON.stringify(newStartCol)
      );
      localStorage.setItem(
        newEndCol.id + "_customer",
        JSON.stringify(newEndCol)
      );
      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
      return null;
    }
  };

  let setShowColumnHead = [
    {
      name: "Email",
      sq: seqEmail,
      hide: hideEmail,
    },
    {
      name: `${translator("customer_page.col_phone")}`,
      sq: seqPhone,
      hide: hidePhone,
    },
    {
      name: `${translator("customer_page.col_lead_source")}`,
      sq: seqLeadSource,
      hide: hideLeadSource,
    },
    {
      name: `${translator("customer_page.col_street")}`,
      sq: seqStreet,
      hide: hideStreet,
    },
    {
      name: `${translator("customer_page.col_city")}`,
      sq: seqCity,
      hide: hideCity,
    },
    {
      name: `${translator("customer_page.col_est_come")}`,
      sq: seqEIC,
      hide: hideEIC,
    },
    {
      name: `${translator("customer_page.col_gender")}`,
      sq: seqGender,
      hide: hideGender,
    },

    {
      name: `${translator("customer_page.col_social")}`,
      sq: seqSocialMedia,
      hide: hideSocialMedia,
    },

    {
      name: `${translator("customer_page.col_create_on")}`,
      sq: seqCreatedDate,
      hide: hideCreatedDate,
    },

    {
      name: `${translator("customer_page.col_last_modified")}`,
      sq: seqLastModifiedBy,
      hide: hideLastModifiedBy,
    },

    {
      name: `${translator("customer_page.col_customers_budget")}`,
      sq: seqCustomerBudget,
      hide: hideCustomerBudget,
    },
  ];
  setShowColumnHead.sort(function (a, b) {
    return a.sq - b.sq;
  });

  let setShowColumnBody: IColumnsBody[][] = [];
  let item: IColumnsBody[];

  customers?.items?.forEach((customer, index) => {
    item = [
      {
        sq: 0,
        hide: null,
        html: (
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                if (
                  selectedCustomerList.length > 0 &&
                  selectedCustomerList.find((i) => i === customer.id)
                ) {
                  const arr = [...selectedCustomerList].filter(
                    (i) => i !== customer.id
                  );
                  setSelectedCustomerList([...arr]);
                  const arrDataExportFile = [...dataExportFile].filter(
                    (i) => i.customerId !== customer.id
                  );
                  setDataExportFile(arrDataExportFile);
                } else {
                  const arr = [...selectedCustomerList, customer.id];
                  setSelectedCustomerList([...arr]);
                  handleExportFile(customer.id);
                }
              } else {
                const arr = [...selectedCustomerList].filter(
                  (i) => i !== customer.id
                );
                setSelectedCustomerList([...arr]);
                const arrDataExportFile = [...dataExportFile].filter(
                  (i) => i.customerId !== customer.id
                );
                setDataExportFile(arrDataExportFile);
              }
            }}
          />
        ),
      },
      {
        name: "Name",
        sq: 0,
        hide: null,
        html: index + 1,
      },
      {
        name: "Lead Name",
        sq: 0,
        hide: null,
        html: (
          <a href={`/${companyName}/customers/${customer.id}`}>
            {customer.personalInfo.firstName} {customer.personalInfo.lastName}
          </a>
        ),
      },
      {
        name: "Phone",
        sq: seqPhone,
        hide: hidePhone,
        html: customer.personalInfo.phoneNumber,
      },
      {
        name: "Email",
        sq: seqEmail,
        hide: hideEmail,
        html: customer.personalInfo.email,
      },
      {
        name: "Lead Source",
        sq: seqLeadSource,
        hide: hideLeadSource,
        html: (langCookies === "vi" ? LEAD_SOURCES_VN : LEAD_SOURCES_EN)[
          customer.leadSource
        ]?.label,
      },
      {
        name: "Street",
        sq: seqStreet,
        hide: hideStreet,
        html: customer.address?.street,
      },
      {
        name: "City",
        sq: seqCity,
        hide: hideCity,
        html: customer.address?.city,
      },
      {
        name: "Estimated income",
        sq: seqEIC,
        hide: hideEIC,
        html: customer.workingInfo?.estimatedIncome
          ? Number(customer.workingInfo?.estimatedIncome).toLocaleString(
              "it-IT",
              {
                style: "currency",
                currency: "VND",
              }
            )
          : "0 VND",
      },
      {
        name: "Gender",
        sq: seqGender,
        hide: hideGender,
        html: (langCookies === "vi" ? OPTION_GENDER_VN : OPTION_GENDER_EN)[
          customer.personalInfo.gender
        ]?.label,
      },
      {
        name: "Social media",
        sq: seqSocialMedia,
        hide: hideSocialMedia,
        html: customer.personalInfo.socialMediaUrl,
      },
      {
        name: "Created date",
        sq: seqCreatedDate,
        hide: hideCreatedDate,
        html: moment(new Date(customer.createdAt).getTime()).format(
          "YYYY-MM-DD HH:mm:ss"
        ),
      },
      {
        name: "Last modified by",
        sq: seqLastModifiedBy,
        hide: hideLastModifiedBy,
        html: moment(new Date(customer.updatedAt).getTime()).format(
          "YYYY-MM-DD HH:mm:ss"
        ),
      },
      {
        name: "Customer's budget",
        sq: seqCustomerBudget,
        hide: hideCustomerBudget,
        html: customer.workingInfo?.budget
          ? Number(customer.workingInfo?.budget).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })
          : "0 VND",
      },
    ];
    setShowColumnBody.push(item);
  });

  setShowColumnBody.map((lead) => {
    lead.sort((a, b) => {
      if (a?.sq && b?.sq) {
        return a.sq - b.sq;
      }
      return 0;
    });
  });

  const headersExportFile = [
    { label: "Customer ID", key: "customerId" },
    { label: "Customer Name", key: "customerName" },
    { label: "Customer Owner", key: "customerOwner" },
    { label: "Customer Owner ID", key: "customerOwnerId" },
    { label: "Phone", key: "phoneNumber" },
    { label: "Email", key: "email" },
    { label: "First name", key: "firstName" },
    { label: "Last name", key: "lastName" },
    { label: "Gender", key: "gender" },
    { label: "Street", key: "street" },
    { label: "Ward", key: "ward" },
    { label: "District", key: "district" },
    { label: "City", key: "city" },
    { label: "Date of birth", key: "dateOfBirth" },
    { label: "Social media", key: "socialMediaUrl" },
    { label: "Customer’s budget", key: "customerBudget" },
    { label: "Estimated income (Year)", key: "estimatedIncome" },
    { label: "ID type", key: "idType" },
    { label: "ID Number", key: "idNumber" },
    { label: "Industry", key: "industry" },
    { label: "Position", key: "position" },
    { label: "Lead source", key: "leadSource" },
    { label: "Converted LeadID", key: "convertedLeadId" },
    { label: "Project interested", key: "projectInterestedName" },
    { label: "Note", key: "note" },
    { label: "Modified time", key: "updatedAt" },
    { label: "Modified by", key: "updatedBy" },
    { label: "Modified by ID", key: "updatedById" },
    { label: "Created date", key: "createdAt" },
    { label: "Created by", key: "createdBy" },
    { label: "Created by ID", key: "createdById" },
  ];

  const handleExportFile = async (id: string) => {
    const arrDataExportFile = [...dataExportFile];
    await CustomersInstance.exportCustomer(id).then((res) => {
      if (res) {
        arrDataExportFile.push(res);
      }
    });
    setDataExportFile(arrDataExportFile);
  };

  const handleDeleteMassCustomers = () => {
    const customerIdList = selectedCustomerList.map((id: string) => ({ id }));
    servicesCustomersAPI.deleteMassCustomer({ customerIdList }).then(() => {
      setShowDeleteMassCustomers(false);
      toastr.success(
        `${translator("lead_page.text_delete_lead_successfully")}`
      );
      setSelectedCustomerList([]);
      const optionalParams = { sort: JSON.stringify({ createdAt: "DESC" }) };
      fetchCustomers(
        1,
        EPaginate.COMMON_PAGE_SIZE,
        String(companyID),
        optionalParams
      );
    });
  };

  const quickFilterOptions: ICustomerQuickFilterOptions[] = [
    {
      label: translator("customer_page.ALL"),
      value: ECustomerQuickFilter.ALL,
    },
    {
      label: translator("customer_page.MY_LIST"),
      value: ECustomerQuickFilter.MY_LIST,
    },
    {
      label: translator("customer_page.NEW_LAST_WEEK"),
      value: ECustomerQuickFilter.NEW_LAST_WEEK,
    },
    {
      label: translator("customer_page.NEW_THIS_WEEK"),
      value: ECustomerQuickFilter.NEW_THIS_WEEK,
    },
    {
      label: translator("customer_page.RECENTLY_CREATED"),
      value: ECustomerQuickFilter.RECENTLY_CREATED,
    },
    {
      label: translator("customer_page.RECENTLY_MODIFIED"),
      value: ECustomerQuickFilter.RECENTLY_MODIFIED,
    },
    // {
    //   label: translator("customer_page.UNREAD"),
    //   value: ECustomerQuickFilter.UNREAD,
    // },
  ];
  return (
    <div id="main-wrapper">
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row page-titles">
            <div className="col-md-5 d-flex align-items-center">
              <h3 className="text-themecolor">
                {translator("navibar.customers")}
              </h3>
              <div className="col-md-5">
                <select
                  className="form-control custom-select"
                  onChange={(e) => {
                    if (e?.target?.value) {
                      handleQuickFilter(e.target.value as ECustomerQuickFilter);
                    }
                  }}
                >
                  {quickFilterOptions.map((option) => {
                    return (
                      <option value={option.value ?? ""}>
                        {option.label ?? ""}
                      </option>
                    );
                  })}
                </select>
              </div>
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
                  {translator("customer_page.btn_create_new")}
                </button>

                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15"
                  onClick={() => {
                    if (selectedCustomerList.length === 0) {
                      toastr.error(`Please select customer to export`);
                    }
                  }}
                >
                  {selectedCustomerList.length > 0 &&
                  dataExportFile.length === selectedCustomerList.length ? (
                    <CSVLink data={dataExportFile} headers={headersExportFile}>
                      <i className="fa fa-download" aria-hidden="true"></i>{" "}
                      {translator("customer_page.btn_export")}
                    </CSVLink>
                  ) : (
                    <>
                      <i className="fa fa-download" aria-hidden="true"></i>{" "}
                      {translator("customer_page.btn_export")}
                    </>
                  )}
                </button>
                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15"
                  onClick={() => setshowColumn(true)}
                >
                  <i className="fa fa-list-ol" aria-hidden="true"></i>{" "}
                  {translator("customer_page.btn_column")}
                </button>
                <button
                  type="button"
                  className="btn btn-info d-none d-lg-block m-l-15"
                  onClick={() => setActiveFilter(!activeFilter)}
                >
                  <i className="fa fa-filter" aria-hidden="true"></i>{" "}
                  {translator("customer_page.btn_filter")}
                </button>
              </div>
              <Modal
                isOpen={showColumn}
                onRequestClose={() => setshowColumn(false)}
                modal_name={`${translator("customer_page.btn_column")}`}
                label={`${translator("customer_page.btn_column")}`}
              >
                <DragDropContext onDragEnd={onDragEnd}>
                  <StyledColumns>
                    {Object.values(columns).map((col) => (
                      <Column col={col} key={col.id} />
                    ))}
                  </StyledColumns>
                </DragDropContext>
              </Modal>

              <Modal
                isOpen={showDeleteMassCustomers}
                onRequestClose={() => setShowDeleteMassCustomers(false)}
                modal_name={`Please select the sub status`}
                label={`Please select the sub status`}
              >
                <div>
                  Are you sure to delete {selectedCustomerList.length} customer
                  {selectedCustomerList.length > 1 && "s"} ?
                </div>
                <div className="text-center mt-3">
                  <button
                    className="btn btn-dark"
                    type="reset"
                    onClick={() => {
                      setShowDeleteMassCustomers(false);
                    }}
                  >
                    {`${translator("lead_page.btn_no")}`}
                  </button>
                  <button
                    className="btn btn-danger ml-3"
                    type="submit"
                    onClick={handleDeleteMassCustomers}
                  >
                    {`${translator("lead_page.btn_delete")}`}
                  </button>
                </div>
              </Modal>
              <CreateContainer
                currentPage={currentPage}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-subtitle">
                    {customers?.totalItems}{" "}
                    {translator("customer_page.btn_items")}
                  </h6>

                  {selectedCustomerList.length > 0 && (
                    <div
                      className="font-weight-bold font-16"
                      style={{
                        borderTop: "1px solid #e9ecef",
                        padding: "10px 0 10px 0",
                      }}
                    >
                      {selectedCustomerList.length} records is selected
                      <button
                        className="btn btn-dark ml-3"
                        style={{ padding: "2px 10px" }}
                        onClick={() => {
                          setShowDeleteMassCustomers(true);
                        }}
                      >
                        {translator("lead_page.btn_delete")}
                      </button>
                    </div>
                  )}

                  <div className="table-wrapper">
                    <div className="table-responsive">
                      <table className="table width-table-full table-striped table-md">
                        <thead>
                          <tr className="text-center">
                            <th className="">
                              <input
                                type="checkbox"
                                checked={
                                  selectedCustomerList.length ===
                                  customers?.totalItems
                                }
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    const arr = totalItems?.map(
                                      (customer: TCustomer) => customer.id
                                    );
                                    setSelectedCustomerList([...arr]);
                                    Promise.all(
                                      arr?.map((id: string) =>
                                        CustomersInstance.exportCustomer(id)
                                      )
                                    ).then((values) => {
                                      setDataExportFile(values);
                                    });
                                  } else {
                                    setSelectedCustomerList([]);
                                    setDataExportFile([]);
                                  }
                                }}
                              />
                            </th>
                            <th className="">#</th>
                            <th className="">
                              {translator("navibar.customers")} (
                              {customers?.totalItems})
                            </th>
                            {setShowColumnHead.map((cols, index) =>
                              !cols.hide ? (
                                <th key={index}>{cols.name}</th>
                              ) : null
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {setShowColumnBody.map((customer, index) => {
                            return (
                              <tr key={index}>
                                {customer.map((cols, i) => {
                                  return cols.sq !== -1 ? (
                                    <td
                                      className="text-center"
                                      key={`col_${i}`}
                                    >
                                      {cols.html}
                                    </td>
                                  ) : null;
                                })}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <FilterContainer
                      activeFilter={activeFilter}
                      setCurrentPage={setCurrentPage}
                    />
                  </div>
                  <Paginate
                    total={customers?.totalItems ?? 0}
                    pageSize={customers?.pageSize ?? EPaginate.COMMON_PAGE_SIZE}
                    pageIndex={
                      customers?.pageIndex ?? EPaginate.DEFAULT_PAGE_INDEX
                    }
                    onChange={handlePaginate}
                  />
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

export default CustomersContainer;

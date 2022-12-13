import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { TRootState } from "src/state-management/reducers";
import {
  fetchAnalyticsLeadsAction,
  fetchAnalyticsLogcallsAction,
  fetchAnalyticsCustomersAction,
  fetchAnalyticsTotalDurationAction,
  fetchAnalyticsConversionRateAction,
} from "src/state-management/actions/analytics";
import moment from "moment";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "../CreateAccount/CreateAccount.module.css";
import toastr from "toastr";
import { usersAPI } from "../../services/identity/users";
import { companyAPI } from "../../services/identity/company";
import { useRouter } from "next/router";

import InputField from "../../components/ModalCreate/InputField";
import Cookies from "js-cookie";
import { crmPlatform } from "src/services/identity";
import "chart.js/auto";
import axios from "axios";
import DataTable from "./components/DataTable";
import {
  TAnalyticsResponse,
  TConversionRateResponse,
} from "services/identity/analytics/types";
import LeadsInstance from "services/identity/leads";
import { TFetchLeadsResponse } from "services/identity/leads/types";
import CustomersInstance from "services/identity/customers";
import { TFetchCustomersResponse } from "services/identity/customers/types";
import { ECustomerQuickFilter } from "containers/Customers/constants";
import { ELeadsQuickFilter } from "containers/Leads/constants";

interface IFormUpdateAccount {
  accessLink: string;
  companyName: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
}
export interface ITBodyData {
  id?: string | null;
  index?: number;
  nameLead?: string | null;
  email?: string | null;
  date?: string | null;
  leadOwner?: string | null;
  leadSourceName?: string | null;
  countLeads?: number | null;
  countLeadConvertedCustomer?: number | null;
  conversionRate?: string | null;
}
export enum ETableType {
  leadsRecent = "leadsRecent",
  leadsNew = "leadsNew",
  customers = "customers",
  chart = "chart",
  leadsUnread = "leadsUnread",
}
export interface IConfigTable {
  type: ETableType;
  title: string;
  thead: string[];
  tbody?: ITBodyData[];
  dataChart?: {
    leads: TAnalyticsResponse;
    logcalls: TAnalyticsResponse;
    customers: TAnalyticsResponse;
    totalDuration: TAnalyticsResponse;
    conversionRate: TConversionRateResponse;
  };
  onPageChange: (type: ETableType) => void;
}

const servicesUsersAPI = new usersAPI();

const DashboardContainer = () => {
  const { t: translator } = useTranslation();
  const Router = useRouter();
  const servicesCompanyAPI = new companyAPI();
  const companyID = Cookies.get("companyID");
  const companyName = Cookies.get("companyName");
  const dispatch = useDispatch();
  const analytics = useSelector((state: TRootState) => state.analytics);
  const accountInfo = JSON.parse(localStorage.getItem("accounts") ?? "{}");
  const [showSetup, setShowSetup] = useState(true);
  const [errorDomainName, setErrorDomainName] = useState<string | null>(null);
  const [leads, setLeads] = useState<TFetchLeadsResponse | null>(null);
  const [leadsUnread, setLeadsUnread] = useState<TFetchLeadsResponse | null>(
    null
  );
  const [pageIndexLeads, setPageIndexLeads] = useState(1);
  const [customers, setCustomers] = useState<TFetchCustomersResponse>();
  const [pageIndexCustomer, setPageIndexCustomer] = useState(1);

  const getResult = (val: number, digit: number) => {
    return (val / 3600).toFixed(digit);
  };
  const startOfMonth = moment().startOf("month").toISOString();
  const endOfMonth = moment().endOf("month").toISOString();

  const UpdateAccountSchema = Yup.object().shape({
    accessLink: Yup.string()
      .required("required")
      .min(4, "at least 4 characters")
      .max(30, "up to 30 characters"),
    companyName: Yup.string().required("required"),
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
  });

  const handleCreateRole = async (values: IFormUpdateAccount) => {
    try {
      if (values) {
        const isValid: boolean = await validateDomain(values.accessLink);
        if (!isValid) {
          return;
        }
        const updateAccount = await servicesUsersAPI.firstSetupUserDetail(
          accountInfo.uuid,
          values
        );
        if (!updateAccount || updateAccount.error) {
          toastr.error(updateAccount.error);
        } else {
          Cookies.set("companyID", updateAccount.data.roles[0].companyId);
          servicesCompanyAPI
            .getDetailCompanyById(String(updateAccount.data.roles[0].companyId))
            .then((res) => {
              accountInfo.roleList = res.data.roles;
              Cookies.set("companyName", res.data.accessLink);
              localStorage.setItem("accounts", JSON.stringify(accountInfo));
              toastr.success("Setup successfully");
              setShowSetup(false);
              Cookies.set("isAuthenticated", "1");
              Router.replace(`/${res.data.accessLink}/dashboard`);
            });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const validateDomain = async (domain: string) => {
    try {
      const response = await axios.get(
        `${crmPlatform}/companies/is-accesslink-available/${domain}`
      );
      if (response.status === 200) {
        if (response.data === false) {
          setErrorDomainName(
            "The access URL you have chosen already exists. Please try another access URL."
          );
        } else {
          setErrorDomainName(null);
        }
        return response.data;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const getLeads = async () => {
    try {
      const leadsResponse = await LeadsInstance.fetchLeads(
        pageIndexLeads,
        7,
        String(companyID),
        {
          sort: JSON.stringify({ createdAt: "DESC" }),
          quickFilter: ELeadsQuickFilter.RECENTLY_CREATED,
        }
      );
      if (!leadsResponse) {
        throw new Error("some thing wrong");
      }
      if (leads) {
        setLeads({
          ...leadsResponse,
          items: [...leads.items, ...leadsResponse.items],
        });
        return;
      }
      setLeads(leadsResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const getLeadsUnread = async () => {
    try {
      const leadsResponse = await LeadsInstance.fetchLeads(
        pageIndexLeads,
        7,
        String(companyID),
        {
          sort: JSON.stringify({ createdAt: "DESC" }),
          quickFilter: ELeadsQuickFilter.UNREAD,
        }
      );
      if (!leadsResponse) {
        throw new Error("some thing wrong");
      }
      if (leadsUnread) {
        setLeadsUnread({
          ...leadsResponse,
          items: [...leadsUnread.items, ...leadsResponse.items],
        });
        return;
      }
      setLeadsUnread(leadsResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const getCustomers = async () => {
    try {
      const customersResponse = await CustomersInstance.fetchCustomers(
        pageIndexCustomer,
        7,
        companyID ?? "",
        {
          sort: JSON.stringify({ createdAt: "DESC" }),
          quickFilter: ECustomerQuickFilter.RECENTLY_CREATED,
        }
      );
      if (!customersResponse) {
        throw new Error("some thing wrong");
      }
      if (customers) {
        setCustomers({
          ...customersResponse,
          items: [...customers.items, ...customersResponse.items],
        });
        return;
      }
      setCustomers(customersResponse);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCustomers();
  }, []);
  useEffect(() => {
    getLeads();
    getLeadsUnread();
  }, [pageIndexLeads]);
  useEffect(() => {
    const isAuthenticated = Cookies.get("isAuthenticated");
    const companyID = Cookies.get("companyID");
    if (isAuthenticated === "1") {
      setShowSetup(false);
    }
    if (companyID) {
      servicesCompanyAPI.getDetailCompanyById(String(companyID)).then((res) => {
        accountInfo.roleList = res.data.roles;
        localStorage.setItem("accounts", JSON.stringify(accountInfo));
      });
    }

    dispatch(
      fetchAnalyticsLeadsAction.request(
        startOfMonth,
        endOfMonth,
        "month",
        "leads",
        "new"
      )
    );
    dispatch(
      fetchAnalyticsLogcallsAction.request(
        startOfMonth,
        endOfMonth,
        "month",
        "logcalls",
        "new"
      )
    );
    dispatch(
      fetchAnalyticsCustomersAction.request(
        startOfMonth,
        endOfMonth,
        "month",
        "customers",
        "new"
      )
    );
    dispatch(
      fetchAnalyticsTotalDurationAction.request(
        startOfMonth,
        endOfMonth,
        "month",
        "logcalls",
        "total-duration"
      )
    );
    dispatch(
      fetchAnalyticsConversionRateAction.request(
        startOfMonth,
        endOfMonth,
        "month",
        "leads",
        "conversion-rate"
      )
    );
  }, [dispatch]);
  const onPageChange = (type: ETableType) => {
    switch (type) {
      case ETableType.leadsNew:
        if (leads?.hasNextPage === true) {
          setPageIndexLeads(pageIndexLeads + 1);
        }
        return;
      case ETableType.leadsUnread:
        if (leadsUnread?.hasNextPage === true) {
          setPageIndexLeads(pageIndexLeads + 1);
        }
        return;
      case ETableType.customers:
        if (customers?.hasNextPage === true) {
          setPageIndexCustomer(pageIndexCustomer + 1);
        }
        return;
      default:
        return;
    }
  };
  const configDataTable: IConfigTable[] = [
    {
      type: ETableType.leadsUnread,
      title: `${translator("dashboard_page.unread_lead")}`,
      thead: [
        "#",
        `${translator("dashboard_page.lead_name")}`,
        "Email",
        `${translator("dashboard_page.leads_owner")}`,
      ],
      tbody: [],
      onPageChange: () => {
        onPageChange(ETableType.leadsUnread);
      },
    },
    {
      type: ETableType.leadsNew,
      title: `${translator("dashboard_page.recently_created_leads")}`,
      thead: [
        "#",
        `${translator("dashboard_page.lead_name")}`,
        "Email",
        `${translator("dashboard_page.created_on")}`,
      ],
      tbody: leads?.items?.map((elm, i) => {
        return {
          index: i + 1,
          id: elm?.id,
          nameLead: `${elm.personalInfo.firstName ?? ""} ${
            elm.personalInfo.lastName ?? ""
          }`,
          email: elm.personalInfo.email,
          date: moment(new Date(elm.createdAt).getTime()).format(
            "YYYY-MM-DD HH:mm"
          ),
        };
      }),
      onPageChange: () => {
        onPageChange(ETableType.leadsNew);
      },
    },
    {
      type: ETableType.customers,
      title: `${translator("dashboard_page.recently_created_customers")}`,
      thead: [
        "#",
        `${translator("dashboard_page.lead_name")}`,
        "Email",
        `${translator("dashboard_page.created_on")}`,
      ],
      tbody: customers?.items?.map((elm, i) => {
        return {
          index: i + 1,
          id: elm?.id,
          nameLead: `${elm.personalInfo.firstName ?? ""} ${
            elm.personalInfo.lastName ?? ""
          }`,
          email: elm.personalInfo.email,
          date: moment(new Date(elm.createdAt).getTime()).format(
            "YYYY-MM-DD HH:mm"
          ),
        };
      }),
      onPageChange: () => {
        onPageChange(ETableType.customers);
      },
    },
    {
      type: ETableType.chart,
      title: "SALE FUNNEL BY LEAD SOURCE",
      thead: [
        "Lead Source",
        "LEAD CREATED",
        "TRIAL AGREEMENT",
        "Conversion Rate",
      ],
      tbody: analytics?.conversionRate?.result
        ?.map((item) => {
          return {
            leadSourceName: item.leadSourceName ?? "",
            countLeads: item.countLeads ?? 0,
            countLeadConvertedCustomer: item.countLeadConvertedCustomer ?? 0,
            conversionRate: item.conversionRate ?? "",
          };
        })
        .concat(analytics.conversionRate.total),
      dataChart: analytics,
      onPageChange: () => {
        onPageChange(ETableType.chart);
      },
    },
  ];

  return (
    <div id="main-wrapper">
      {showSetup ? (
        <div>
          <div className="mask-layer"></div>
          <div className={styles["create-account"]}>
            <h2 className={styles["create-account-title"]}>
              Welcome to Dreamland CRM
            </h2>
            <h4>Finish up your account and start using Dreamlands CRM now</h4>
            <Formik
              initialValues={{
                email: accountInfo.email,
                firstName: "",
                lastName: "",
                companyName: "",
                accessLink: "",
              }}
              validationSchema={UpdateAccountSchema}
              enableReinitialize={true}
              onSubmit={handleCreateRole}
            >
              {({ setFieldValue }) => (
                <div>
                  <Form>
                    <div className="row mt-4">
                      <div className="col-12">
                        <InputField
                          label="Email"
                          id="email"
                          name="email"
                          type="text"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-12">
                        <InputField
                          label="Company"
                          name="companyName"
                          type="text"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <InputField
                          label="First name"
                          name="firstName"
                          type="text"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <InputField
                          label="Last name"
                          name="lastName"
                          type="text"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <InputField
                          label="Access link"
                          name="accessLink"
                          type="text"
                          prefix={process.env.REACT_DOMAIN_URL ?? ""}
                          required
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setFieldValue(
                              "accessLink",
                              e?.target?.value?.replace(
                                /[`~!@#$%^&*()|+\-=?;:'" ,.<>\{\}\[\]\\\/]/gi,
                                ""
                              )
                            );
                          }}
                        />
                        <div className={`error invalid-feedback text-right`}>
                          {errorDomainName}
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <button className={`btn btn-danger ml-3`} type="submit">
                        Complete
                      </button>
                    </div>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </div>
      ) : null}

      <div className="page-wrapper page-wrapper-dashboard">
        <div className="container-fluid">
          <div className="row page-titles">
            <div className="col-md-5 align-self-center">
              <h4 className="text-themecolor">Welcome #user</h4>
            </div>
          </div>
          <div className="card-group">
            <div className="card">
              <a href="">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <h4>{translator("dashboard_page.lead_this_month")}</h4>
                      <div className="d-flex no-block align-items-center mt-3">
                        <h2>{analytics?.leads?.result?.query?.value}</h2>
                        <div className="text-up-number ml-3">
                          <i className="ti-arrow-up mr-2"></i>
                          {analytics?.leads?.result?.rate}
                        </div>
                      </div>
                      <h6 className="mt-3">
                        {translator("dashboard_page.last_month_relative")}:{" "}
                        {analytics?.leads?.result?.diff}
                      </h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="card">
              <a href="">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <h4>
                        {translator("dashboard_page.customer_this_month")}
                      </h4>
                      <div className="d-flex no-block align-items-center mt-3">
                        <h2>{analytics?.customers?.result?.query?.value}</h2>
                        <div className="text-up-number ml-3">
                          <i className="ti-arrow-up mr-2"></i>
                          {analytics?.customers?.result?.rate}
                        </div>
                      </div>
                      <h6 className="mt-3">
                        {translator("dashboard_page.last_month_relative")}:{" "}
                        {analytics?.customers?.result?.diff}
                      </h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="card">
              <a href="">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <h4>
                        {translator("dashboard_page.total_call_this_month")}
                      </h4>
                      <div className="d-flex no-block align-items-center mt-3">
                        <h2>{analytics?.logcalls?.result?.query?.value}</h2>
                        <div className="text-up-number ml-3">
                          <i className="ti-arrow-up mr-2"></i>
                          {analytics?.logcalls?.result?.rate}
                        </div>
                      </div>
                      <h6 className="mt-3">
                        {translator("dashboard_page.last_month_relative")}:{" "}
                        {analytics?.logcalls?.result?.diff}
                      </h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="card">
              <a href="">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <h4>
                        {translator("dashboard_page.call_duration_this_month")}
                      </h4>
                      <div className="d-flex no-block align-items-center mt-3">
                        <h2>
                          {getResult(
                            Number(
                              analytics?.totalDuration?.result?.query?.value
                            ),
                            2
                          )}
                        </h2>
                        <div className="text-down-number ml-3">
                          <i className="ti-arrow-down mr-2"></i>
                          {analytics?.totalDuration?.result?.rate}
                        </div>
                      </div>
                      <h6 className="mt-3">
                        {translator("dashboard_page.last_month_relative")}:{" "}
                        {getResult(
                          Number(analytics?.totalDuration?.result?.diff),
                          2
                        )}
                      </h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="row">
            {configDataTable.map((table, i) => {
              return (
                <div className="col-lg-6" key={i}>
                  <DataTable {...table} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <footer className="footer">© 2022 CRM Dreamland</footer>
    </div>
  );
};

export default DashboardContainer;

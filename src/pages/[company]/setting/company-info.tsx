import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import DashboardLayout from "commons/Layouts/Dashboard";
import LoadingIndicator from "components/LoadingIndicator";
import CompanyContainer from "containers/Setting/company";
import HeaderContainer from "commons/Headers";
import SidebarContainer from "commons/Sidebar";
import SidebarDashboard from "commons/SidebarDashboard";
import withAuth from "utils/hoc/withAuth";
import { companyAPI } from "services/identity/company";
import { IAccount } from "services/identity/auth/type";
import { ICompany } from "services/identity/company/types";
import Cookies from "js-cookie";

const servicesCompany = new companyAPI();

const DynamicImportScript = dynamic(
  () => import("containers/Dashboard/importScript"),
  { loading: () => <LoadingIndicator />, ssr: false }
);

const CompanyInfoPage = () => {
  const [companyDetail, setCompanyDetail] = useState<ICompany | null>(null);
  const accounts = localStorage.getItem("accounts");
  const companyID = String(Cookies.get("companyID"));
  const accountInfo: IAccount = accounts ? JSON.parse(accounts) : null;
  const getCompanyDetailById = async () => {
    try {
      if (!accountInfo || !companyID) {
        return;
      }
      const getCompanyDetailById = await servicesCompany.getDetailCompanyById(
        companyID
      );
      if (
        !getCompanyDetailById ||
        !getCompanyDetailById.data ||
        getCompanyDetailById.error
      ) {
        throw Error(getCompanyDetailById?.error);
      }
      setCompanyDetail(getCompanyDetailById.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (accountInfo && companyID) {
      getCompanyDetailById();
    }
  }, []);
  return (
    <>
      <Head>
        <meta name="description" content="Dashboard page" />
        <meta name="keywords" content="Dashboard page" />
        <title>Company Information - Persect CRM</title>
      </Head>

      <DashboardLayout layout={`has-sidebar`}>
        <HeaderContainer />
        <SidebarContainer />
        <div className="d-flex">
          <SidebarDashboard />
          <CompanyContainer companyDetail={companyDetail} />
        </div>
      </DashboardLayout>
      <DynamicImportScript />
    </>
  );
};
export default withAuth(CompanyInfoPage);

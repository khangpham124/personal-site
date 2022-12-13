import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import DashboardLayout from "commons/Layouts/Dashboard";
import LoadingIndicator from "components/LoadingIndicator";
import ListCompaniesContainer from "containers/Setting/list-company";
import HeaderContainer from "commons/Headers";
import SidebarContainer from "commons/Sidebar";
import SidebarDashboard from "commons/SidebarDashboard";
import withAuth from "utils/hoc/withAuth";

const DynamicImportScript = dynamic(
  () => import("containers/Dashboard/importScript"),
  { loading: () => <LoadingIndicator />, ssr: false }
);

const CompanyInfoPage = () => {
  const accounts = localStorage.getItem("accounts");

  return (
    <>
      <Head>
        <meta name="description" content="Dashboard page" />
        <meta name="keywords" content="Dashboard page" />
        <title>Comapies Listing - Persect CRM</title>
      </Head>

      <DashboardLayout layout={`has-sidebar`}>
        <HeaderContainer />
        <SidebarContainer />
        <div className="d-flex">
          <SidebarDashboard />
          <ListCompaniesContainer />
        </div>
      </DashboardLayout>
      <DynamicImportScript />
    </>
  );
};
export default withAuth(CompanyInfoPage);

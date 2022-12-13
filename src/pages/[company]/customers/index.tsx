import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import DashboardLayout from "commons/Layouts/Dashboard";
import LoadingIndicator from "components/LoadingIndicator";
import CustomersContainer from "containers/Customers";
import HeaderContainer from "commons/Headers";
import SidebarContainer from "commons/Sidebar";
import withAuth from "utils/hoc/withAuth";

const DynamicImportScript = dynamic(
  () => import("containers/Dashboard/importScript"),
  { loading: () => <LoadingIndicator />, ssr: false }
);

const CustomersPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Dashboard page" />
        <meta name="keywords" content="Dashboard page" />
        <title>Customers - Persect CRM</title>
      </Head>
      <DashboardLayout>
        <HeaderContainer />
        <SidebarContainer />
        <CustomersContainer />
      </DashboardLayout>
      <DynamicImportScript />
    </>
  );
};
export default withAuth(CustomersPage);

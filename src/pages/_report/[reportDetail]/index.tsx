import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import DashboardLayout from "commons/Layouts/Dashboard";
import LoadingIndicator from "components/LoadingIndicator";
import ReportContainerDetail from "containers/Report/detail";
import HeaderContainer from "commons/Headers";
import SidebarContainer from "commons/Sidebar";
import withAuth from "utils/hoc/withAuth";

const DynamicImportScript = dynamic(
  () => import("containers/Dashboard/importScript"),
  { loading: () => <LoadingIndicator />, ssr: false }
);

const ReportPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Dashboard page" />
        <meta name="keywords" content="Dashboard page" />
      </Head>

      <DashboardLayout>
        <HeaderContainer></HeaderContainer>
        <SidebarContainer></SidebarContainer>
        <ReportContainerDetail />
      </DashboardLayout>
      <DynamicImportScript />
    </>
  );
};
export default withAuth(ReportPage);
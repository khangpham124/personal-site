import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import DashboardLayout from "commons/Layouts/Dashboard";
import DashboardContainer from "containers/Dashboard";
import LoadingIndicator from "components/LoadingIndicator";
import HeaderContainer from "commons/Headers";
import SidebarContainer from "commons/Sidebar";
import withAuth from "utils/hoc/withAuth";

const DynamicImportScript = dynamic(
  () => import("containers/Dashboard/importScript"),
  { loading: () => <LoadingIndicator />, ssr: false }
);

const DashboardPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Dashboard page" />
        <meta name="keywords" content="Dashboard page" />

        <link href="/theme/node_modules/morrisjs/morris.css" rel="stylesheet" />
        <link
          href="/theme/node_modules/toast-master/css/jquery.toast.css"
          rel="stylesheet"
        />
        <link href="/theme/css/pages/dashboard.css" rel="stylesheet" />
        <title>Dashboard - Persect CRM</title>
      </Head>

      <DashboardLayout>
        <HeaderContainer />
        <SidebarContainer />
        <DashboardContainer />
      </DashboardLayout>
      <DynamicImportScript />
    </>
  );
};
export default withAuth(DashboardPage);

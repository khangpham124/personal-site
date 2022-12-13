import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import DashboardLayout from "commons/Layouts/Dashboard";
import LoadingIndicator from "components/LoadingIndicator";
import DetailRoleContainer from "containers/Role/detail";
import HeaderContainer from "commons/Headers";
import SidebarContainer from "commons/Sidebar";
import SidebarDashboard from "commons/SidebarDashboard";
import withAuth from "utils/hoc/withAuth";

const DynamicImportScript = dynamic(
  () => import("containers/Dashboard/ImportCustomScript"),
  { loading: () => <LoadingIndicator />, ssr: false }
);

const RolePage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Dashboard page" />
        <meta name="keywords" content="Dashboard page" />
        <title>Roles - Persect CRM</title>
      </Head>

      <DashboardLayout layout={`has-sidebar`}>
        <HeaderContainer></HeaderContainer>
        <SidebarContainer></SidebarContainer>
        <div className="d-flex">
          <SidebarDashboard></SidebarDashboard>
          <DetailRoleContainer />
        </div>
      </DashboardLayout>
      <DynamicImportScript />
    </>
  );
};
export default withAuth(RolePage);

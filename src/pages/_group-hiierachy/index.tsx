import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import DashboardLayout from "commons/Layouts/Dashboard";
import LoadingIndicator from "components/LoadingIndicator";
import HeaderContainer from "commons/Headers";
import SidebarContainer from "commons/Sidebar";
import SidebarDashboard from "commons/SidebarDashboard";
import GroupHiierachy from "containers/GroupHiierachy";
import withAuth from "utils/hoc/withAuth";

const DynamicImportScript = dynamic(
  () => import("containers/Dashboard/importScript"),
  { loading: () => <LoadingIndicator />, ssr: false }
);

const GroupHiierachyPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Dashboard page" />
        <meta name="keywords" content="Dashboard page" />
      </Head>

      <DashboardLayout layout={`has-sidebar`}>
        <HeaderContainer></HeaderContainer>
        <SidebarContainer></SidebarContainer>
        <div className="d-flex">
          <SidebarDashboard></SidebarDashboard>
          <GroupHiierachy />
        </div>
      </DashboardLayout>
      <DynamicImportScript />
    </>
  );
};
export default withAuth(GroupHiierachyPage);
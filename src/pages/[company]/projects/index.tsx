import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import dynamic from "next/dynamic";

import DashboardLayout from "commons/Layouts/Dashboard";
import LoadingIndicator from "components/LoadingIndicator";
import ProjectsContainer from "containers/Projects";
import HeaderContainer from "commons/Headers";
import SidebarContainer from "commons/Sidebar";
import { fetchLeadsAction, uiActions } from "src/state-management/actions";
import { TRootState } from "src/state-management/reducers";
import { ELeadsActions } from "src/state-management/actions/leads/constants";
import { EPaginate } from "utils/types";
import withAuth from "utils/hoc/withAuth";

const DynamicImportScript = dynamic(
  () => import("containers/Dashboard/importScript"),
  { loading: () => <LoadingIndicator />, ssr: false }
);

const LeadPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Dashboard page" />
        <meta name="keywords" content="Dashboard page" />
        <title>Projects - Persect CRM</title>
      </Head>

      <DashboardLayout>
        <HeaderContainer></HeaderContainer>
        <SidebarContainer></SidebarContainer>
        <ProjectsContainer />
      </DashboardLayout>
      <DynamicImportScript />
    </>
  );
};
export default withAuth(LeadPage);

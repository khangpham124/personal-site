import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import dynamic from "next/dynamic";

import DashboardLayout from "commons/Layouts/Dashboard";
import LoadingIndicator from "components/LoadingIndicator";
import LeadsContainer from "containers/Leads";
import HeaderContainer from "commons/Headers";
import SidebarContainer from "commons/Sidebar";
import withAuth from "utils/hoc/withAuth";
import { useRouter } from "next/router";

const DynamicImportScript = dynamic(
  () => import("containers/Dashboard/importScript"),
  { loading: () => <LoadingIndicator />, ssr: false }
);

const LeadPage = () => {
  const router = useRouter();
  const linkTo = String(router.query.company);
  const arrylinkTo = ["leads", "customers", "projects", "products", "setting"];
  if (arrylinkTo.includes(linkTo)) {
    router.replace("404");
  }

  return (
    <>
      <Head>
        <meta name="description" content="Dashboard page" />
        <meta name="keywords" content="Dashboard page" />
      </Head>

      <DashboardLayout>
        <HeaderContainer></HeaderContainer>
        <SidebarContainer></SidebarContainer>
      </DashboardLayout>
      <DynamicImportScript />
    </>
  );
};
export default withAuth(LeadPage);

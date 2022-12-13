import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import DashboardLayout from "commons/Layouts/Dashboard";
import LoadingIndicator from "components/LoadingIndicator";
import ProductDetailContainer from "containers/Products/detail";
import HeaderContainer from "commons/Headers";
import SidebarContainer from "commons/Sidebar";
import withAuth from "utils/hoc/withAuth";

const DynamicImportScript = dynamic(
  () => import("containers/Dashboard/importScript"),
  { loading: () => <LoadingIndicator />, ssr: false }
);

const productDetail: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Dashboard page" />
        <meta name="keywords" content="Dashboard page" />
        <title>Products - Persect CRM</title>
      </Head>

      <DashboardLayout>
        <HeaderContainer></HeaderContainer>
        <SidebarContainer></SidebarContainer>
        <ProductDetailContainer />
      </DashboardLayout>
      <DynamicImportScript />
    </>
  );
};

export default withAuth(productDetail);

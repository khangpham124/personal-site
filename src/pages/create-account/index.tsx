import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import DashboardLayout from "commons/Layouts/Dashboard";
import LoadingIndicator from "components/LoadingIndicator";
import CreateAccountForm from "containers/CreateAccount";

const DynamicImportScript = dynamic(
  () => import("containers/Dashboard/importScript"),
  { loading: () => <LoadingIndicator />, ssr: false }
);

const CreateAccountPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Create Account page" />
        <meta name="keywords" content="Create Account page" />
      </Head>
        <CreateAccountForm />
      <DynamicImportScript />
    </>
  );
};
export default CreateAccountPage;

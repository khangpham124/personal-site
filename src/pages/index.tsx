import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Cookies from "js-cookie";
import DefaultLayout from "commons/Layouts/DefaultLayout";
import SigninContainer from "containers/Signin";

const AdminHome = () => {
  const Router = useRouter();
  // const defaultToken = Cookies.get("crm_token");
  // if (defaultToken) {
  //   window.location.href = `/dashboard`;
  // }
  console.log(Router);
  return (
    <>
      <Head>
        <meta name="description" content="AdminHome page" />
        <meta name="keywords" content="AdminHome page" />
        <link href="/theme/css/pages/signin.css" rel="stylesheet" />
        <title>
          Teddy Coder | Saigon Web Freelancer | Hochiminh City Web Freelancer
        </title>
      </Head>

      <DefaultLayout>
        <SigninContainer />
      </DefaultLayout>
    </>
  );
};
export default AdminHome;

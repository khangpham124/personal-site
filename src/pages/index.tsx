import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Cookies from "js-cookie";
import DefaultLayout from "commons/Layouts/DefaultLayout";
import DashboardContainer from "containers/Dashboard";

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
        <link href="/css/signin.css" rel="stylesheet" />
        <title>
          Teddy Coder | Saigon Web Freelancer | Hochiminh City Web Freelancer
        </title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Play:400,700&amp;subset=vietnamese"
          rel="stylesheet"
        ></link>
      </Head>

      <DefaultLayout>
        <DashboardContainer />
      </DefaultLayout>
    </>
  );
};
export default AdminHome;

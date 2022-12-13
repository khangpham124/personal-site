import { ReactNode } from "react";
import Head from "next/head";
import { i18nInit } from "../../../locales/i18next";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
type Props = {
  children?: ReactNode;
  layout?: string;
};

const DashboardLayout = (props: Props) => {
  const Router = useRouter();
  const defaultToken = Cookies.get("crm_token");
  // if (defaultToken === undefined) {
  //   Router.replace("/");
  // }
  const { children, layout } = props;
  i18nInit();
  return (
    <>
      <Head>
        <meta name="description" content="Users page" />
        <meta name="keywords" content="Users page" />
        <link href="/theme/node_modules/morrisjs/morris.css" rel="stylesheet" />
        <link
          href="/theme/node_modules/toast-master/css/jquery.toast.css"
          rel="stylesheet"
        />
        <link href="/theme/css/pages/dashboard.css" rel="stylesheet" />
        <link
          href="/theme/node_modules/select2/dist/css/select2.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/theme/node_modules/switchery/dist/switchery.min.css"
          rel="stylesheet"
        />
      </Head>

      <main className={`boxed skin-megna fixed-layout ${layout}`}>
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;

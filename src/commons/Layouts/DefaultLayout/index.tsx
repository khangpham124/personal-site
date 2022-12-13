import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
};

const DefaultLayout = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Head>
        <meta name="description" content="Admin page" />
        <meta name="keywords" content="Admin page" />
      </Head>

      <main className="skin-blue fixed-layout">{children}</main>
    </>
  );
};

export default DefaultLayout;

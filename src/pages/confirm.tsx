import { GetStaticProps } from "next";
import { MainLayout } from "@/layouts/MainLayout";
import { AppConfig } from "@/constants/config";
import ConfirmmLayout from "@/layouts/Contact";
import React from "react";
import { Meta } from "@/components/Meta";

const confirmOrder = () => {
  // const t = useTranslations('Others');
  return (
    <>
      <MainLayout
        meta={
          <Meta title={AppConfig.title} description={AppConfig.description} />
        }
      >
        <ConfirmmLayout />
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/common/${locale}.json`)).default,
    },
  };
};

export default confirmOrder;

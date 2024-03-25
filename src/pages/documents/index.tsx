import Breadcrumb from "@/components/Breadcrumb";
import { Meta } from "@/components/Meta";
import { AppConfig } from "@/constants/config";
import { HOME } from "@/constants/routes";
import ProductsJson from "@/fixtures/products.json";
// import { IProduct } from '@/interfaces/cart-types';

import { MainLayout } from "@/layouts/MainLayout";
import { GetServerSideProps } from "next";
import { useTranslations } from "next-intl";

const ProductsPage: React.FC = () => {
  const t = useTranslations("Category");

  const breadcrumbs = [
    {
      title: t("home"),
      url: HOME,
    },
    {
      title: t("products"),
    },
  ];
  return (
    <MainLayout
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <Breadcrumb breadcrumbs={breadcrumbs} border />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      messages: {
        ...require(`../../messages/common/${locale}.json`),
      },
      products: ProductsJson,
    }, // will be passed to the page component as props
  };
};

export default ProductsPage;

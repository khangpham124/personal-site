import { Meta } from "@/components/Meta";
import { AppConfig } from "@/constants/config";
// import { HOME } from "@/constants/routes";
import ProductsJson from "@/fixtures/products.json";
import WorksLayout from "@/layouts/Works";
import { MainLayout } from "@/layouts/MainLayout";
import { GetServerSideProps } from "next";
import { useTranslations } from "next-intl";

const DocumentsPage: React.FC = () => {
  // const t = useTranslations("Category");

  return (
    <MainLayout
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <WorksLayout />
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

export default DocumentsPage;

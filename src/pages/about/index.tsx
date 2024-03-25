import Breadcrumb from "@/components/Breadcrumb";
import { Meta } from "@/components/Meta";
import { AppConfig } from "@/constants/config";
import { HOME } from "@/constants/routes";
import ProductsJson from "@/fixtures/products.json";
import ProfileLayout from "@/layouts/About";
import { MainLayout } from "@/layouts/MainLayout";
import { GetServerSideProps } from "next";
import { useTranslations } from "next-intl";

const Carts: React.FC = () => {
  const t = useTranslations("Category");
  const breadcrumbs = [
    {
      title: t("home"),
      url: HOME,
    },
    {
      title: "profile",
    },
  ];

  // useEffect(() => {

  // }, []);

  return (
    <MainLayout
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <ProfileLayout />
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

export default Carts;

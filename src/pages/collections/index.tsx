import { Meta } from '@/components/Meta';
import { AppConfig } from '@/constants/config';
import { MainLayout } from '@/layouts/MainLayout';
import { GetStaticProps } from 'next';
import CollectionLayout from '@/layouts/Collection';
import ProductsJson from '@/fixtures/products.json';


const CollectionsPage: React.FC = () => {
  return (
    <MainLayout meta={<Meta title={AppConfig.title} description={AppConfig.description} />}>
      <CollectionLayout />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: {
        ...require(`../../messages/common/${locale}.json`),
      },
      products: ProductsJson,
    }, // will be passed to the page component as props
  };
};

export default CollectionsPage;

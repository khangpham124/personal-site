import Breadcrumb from '@/components/Breadcrumb';
import { Meta } from '@/components/Meta';
import { AppConfig } from '@/constants/config';
import { HOME, PRODUCTS } from '@/constants/routes';
import productCategories from '@/fixtures/productCategories';
import ProductsJson from '@/fixtures/products.json';
import { IProduct } from '@/interfaces/cart-types';
import FiltersLayout from '@/layouts/Filters';
import { MainLayout } from '@/layouts/MainLayout';
import { checkExists } from '@/Util/helper';
import { GetServerSideProps } from 'next';
import { useTranslations } from 'next-intl';

type Props = {
  products: Array<IProduct>;
  slug?: string;
};

const ProductCategoryPage: React.FC<Props> = ({ slug }) => {
  const t = useTranslations('Category');

  const breadcrumbs = [
    {
      title: t('home'),
      url: HOME,
    },
    {
      title: t('products'),
      url: PRODUCTS,
    },
    {
      title: slug as string,
    },
  ];

  return (
    <MainLayout meta={<Meta title={AppConfig.title} description={AppConfig.description} />}>
      <Breadcrumb breadcrumbs={breadcrumbs} border />
      <FiltersLayout  />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params, locale }) => {
  const checkSlugExist = checkExists(productCategories, '/products/', params!.category as string);

  if (!checkSlugExist) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slug: params?.category,
      messages: {
        ...require(`../../../messages/common/${locale}.json`),
      },
      products: ProductsJson,
    }, // will be passed to the page component as props
  };
};

export default ProductCategoryPage;

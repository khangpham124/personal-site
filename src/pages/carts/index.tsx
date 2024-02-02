import Breadcrumb from '@/components/Breadcrumb';
import { Meta } from '@/components/Meta';
import { AppConfig } from '@/constants/config';
import { HOME } from '@/constants/routes';
import ProductsJson from '@/fixtures/products.json';
import { ICart } from '@/interfaces/cart-types';
import CartLayout from '@/layouts/CartLayout';
import { MainLayout } from '@/layouts/MainLayout';
import { GetServerSideProps } from 'next';
import { useTranslations } from 'next-intl';

type Props = {
  products: Array<ICart>;
  slug?: string;
};

const Carts: React.FC<Props> = ({ products }) => {
  const t = useTranslations('Category');

  const breadcrumbs = [
    {
      title: t('home'),
      url: HOME,
    },
    {
      title: t('shopping_cart'),
    },
  ];
  return (
    <MainLayout meta={<Meta title={AppConfig.title} description={AppConfig.description} />}>
      <Breadcrumb breadcrumbs={breadcrumbs} border />
      <CartLayout products={products} />
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

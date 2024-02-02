import { Meta } from '@/components/Meta';
import { AppConfig } from '@/constants/config';
import { HOME, BLOG } from '@/constants/routes';
import ProductsJson from '@/fixtures/products.json';
import { IProduct } from '@/interfaces/cart-types';
import BlogDetailLayout from '@/layouts/Blog/Detail';
import { MainLayout } from '@/layouts/MainLayout';
import { GetServerSideProps } from 'next';
import { useTranslations } from 'next-intl';
import collectionCategories from '@/fixtures/collectionCategories';
import { checkExists } from '@/Util/helper';
import React from 'react';

type Props = {
  slug: string;
  products: Array<IProduct>;
};

const BlogPage: React.FC<Props> = ({ slug }) => {
  const t = useTranslations('Category');

  const breadcrumbs = [
    {
      title: t('home'),
      url: HOME,
    },
    {
      title: t('blog'),
      url: BLOG,
    },
    {
      title: slug,
    },
  ];
  return (
    <MainLayout meta={<Meta title={AppConfig.title} description={AppConfig.description} />}>
      <BlogDetailLayout breadcrumbs={breadcrumbs} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params, locale }) => {
  const checkSlugExist = checkExists(collectionCategories, '/blog/', params!.slug as string);
  console.log(checkSlugExist)

  return {
    props: {
      messages: {
        ...require(`../../messages/common/${locale}.json`),
      },
      slug: params!.slug,
      products: ProductsJson,
    }, // will be passed to the page component as props
  };
};

export default BlogPage;

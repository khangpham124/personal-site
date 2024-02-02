import { Meta } from '@/components/Meta';
import { AppConfig } from '@/constants/config';
import { MainLayout } from '@/layouts/MainLayout';
import { GetStaticProps } from 'next';
import BlogLayout from '@/layouts/Blog';
import ProductsJson from '@/fixtures/products.json';
import React from 'react';


const BloogPage: React.FC = () => {
  return (
    <MainLayout meta={<Meta title={AppConfig.title} description={AppConfig.description} />}>
      <BlogLayout />
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

export default BloogPage;

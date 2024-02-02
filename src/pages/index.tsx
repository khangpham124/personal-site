import { Meta } from '@/components/Meta';
import { AppConfig } from '@/constants/config';
import { IProduct } from '@/interfaces/cart-types';
import HomeLayout from '@/layouts/Home';
import { MainLayout } from '@/layouts/MainLayout';
import { GetStaticProps } from 'next';
// import ProductsJson from '@/fixtures/products.json';
import React from 'react';
import { useCustomerProducts } from "@/hooks/useCustomerProducts";


type Props = {
  products: IProduct[];
};

const Home: React.FC<Props> = () => {
  // const { data } = useCustomerProducts();
  const { data } = useCustomerProducts();

  return (
    <MainLayout meta={<Meta title={AppConfig.title} description={AppConfig.description} />}>
      <HomeLayout products={data?.data || []} />
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // let products: IProduct[] = ProductsJson;
  // const res = await axios.get(
  //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products?order_by=createdAt.desc&limit=10`
  // );
  // const fetchedProducts = res.data;
  // fetchedProducts.data.forEach((product: IProduct) => {
  //   products = [
  //     ...products,
  //     {
  //       id: product.id,
  //       name: product.name,
  //       price: product.price,
  //       img1: product.image1,
  //       img2: product.image2,
  //     },
  //   ];
  // });
  return {
    props: {
      messages: {
        ...require(`../messages/common/${locale}.json`),
      },
      // products,
    }, // will be passed to the page component as props
  };
};

export default Home;

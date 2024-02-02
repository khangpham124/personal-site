import { Meta } from '@/components/Meta';
import { AppConfig } from '@/constants/config';
// import { HOME, PRODUCTS } from '@/constants/routes';
import productCategories from '@/fixtures/productCategories';
import ProductsJson from '@/fixtures/products.json';
import { IProduct } from '@/interfaces/cart-types';
import { MainLayout } from '@/layouts/MainLayout';
import ProductDetailLayout from '@/layouts/Product/Detail';
import { checkExists } from '@/Util/helper';
import { GetServerSideProps } from 'next';
import { IProductStore } from "@/interfaces/customerProduct-service";



type Props = {
  slug?: string;
  category?: string;
  product: IProduct;
  products: IProductStore[];
};

const ProductDetailPage: React.FC<Props> = ({ product }: Props) => {
  
  

  return (
    <MainLayout meta={<Meta title={AppConfig.title} description={AppConfig.description} />}>
      <ProductDetailLayout />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params, locale }) => {
  const checkSlugExist = checkExists(productCategories, `/products/${params!.category}/`, params!.slug as string);
  console.log(checkSlugExist)
  // if (!checkSlugExist) {
  //   return {
  //     notFound: true,
  //   };
  // }
  // console.log('params', params)
  // const product = await

  // Pass data to the page via props
  return {
    props: {
      product: ProductsJson[0],
      products: ProductsJson,
      category: params!.category,
      slug: params!.slug,
      messages: {
        ...require(`../../../messages/common/${locale}.json`),
      },
    },
  };
};

export default ProductDetailPage;

import { Meta } from '@/components/Meta';
import { AppConfig } from '@/constants/config';
import { HOME, COLLECTIONS } from '@/constants/routes';
import ProductsJson from '@/fixtures/products.json';
import { IProduct } from '@/interfaces/cart-types';
import DetailCollectionLayout from '@/layouts/Collection/detail';
import { MainLayout } from '@/layouts/MainLayout';
import { GetServerSideProps } from 'next';
import { useTranslations } from 'next-intl';
import collection_img from '@/public/assets/products/collection-menu.png';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import collectionCategories from '@/fixtures/collectionCategories';
import { checkExists } from '@/Util/helper';
import React from 'react';

type Props = {
  slug: string;
  products: Array<IProduct>;
};

const CollectionCategoryPage: React.FC<Props> = ({ slug }) => {
  const t = useTranslations('Category');
  
  const breadcrumbs = [
    {
      title: t('home'),
      url: HOME,
    },
    {
      title: t('collection'),
      url: COLLECTIONS,
    },
    {
      title: slug,
    },
  ];
  return (
    <MainLayout meta={<Meta title={AppConfig.title} description={AppConfig.description} />}>
      <div className="relative w-full flex justify-center items-center">
        <Image src={collection_img} alt="Our Shop" className="w-full" loading="lazy" />
        <h3 className="absolute lg:text-[96px] md:text-[60px] text-[40px] text-white leading-[120px] font-italianno">
          {slug}
        </h3>
      </div>
      <Breadcrumb breadcrumbs={breadcrumbs || []} border />
      <DetailCollectionLayout />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params, locale }) => {
  const checkSlugExist = checkExists(collectionCategories, '/collections/', params!.slug as string);
  console.log(checkSlugExist)

  // if (!checkSlugExist) {
  //   return {
  //     notFound: true,
  //   };
  // }

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

export default CollectionCategoryPage;

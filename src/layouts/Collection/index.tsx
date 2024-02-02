import Breadcrumb from '@/components/Breadcrumb';
import CardCollection from '@/components/Card/CardCollection';
import { IProduct } from '@/interfaces/cart-types';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { Fragment, useEffect, useState } from 'react';
import collection_img from '@/public/assets/products/collection-menu.png';
import { HOME } from '@/constants/routes';
import { collectionAPI } from '@/services/collectionsServices';
import { ICollection } from '@/interfaces/collection-service';

function CollectionLayout() {
  const t = useTranslations('Category');
  const sevicescollectionAPI = new collectionAPI();
  

  const [collectionList, setCollectionList] = useState<ICollection>();
  
  const breadcrumbs = [
    {
      title: t('home'),
      url: HOME,
    },
    {
      title: t('collection'),
    },
  ];

  useEffect(() => {
    sevicescollectionAPI.getAllCollections().then((res: any) => {
      setCollectionList(res.data.data)
    });    
  }, []);

  return (
    <Fragment>
      <div className="w-full flex flex-col justify-center items-center">
        <Breadcrumb breadcrumbs={breadcrumbs} border />
        <div className="relative w-full flex justify-center items-center">
          <Image src={collection_img} alt="Our Shop" className="w-full" loading="lazy" />
          <h3 className="absolute lg:text-[96px] md:text-[60px] text-[40px] text-white leading-[120px] font-italianno">
            {t('collection')}
          </h3>
        </div>
        <div className="w-full lg:px-[156px] md:px-[40px] px-[20px] lg:mt-[60px] mt-[0px]">
          <div className="w-full grid md:grid-cols-2 gap-x-4 lg:gap-x-8 gap-y-10 mb-10">
            {collectionList?.map((item: IProduct, index: number) => (
              <CardCollection key={`card-item-` + index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CollectionLayout;

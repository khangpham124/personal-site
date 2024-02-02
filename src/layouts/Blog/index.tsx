import Breadcrumb from '@/components/Breadcrumb';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { Fragment, useEffect, useState } from 'react';
import collection_img from '@/public/assets/products/collection-menu.png';
import { HOME } from '@/constants/routes';
// import { useArticlesByPost } from "@/hooks/useArticle"; 
// import { ItemPost } from '@/services/articleServices';
import CardBlog from '@/components/Card/CardBlog';

import { postAPI } from '@/services/customerArticles';
import { IArticle } from '@/interfaces/customerArticles-service';


function BlogLayout() {
  const t = useTranslations('Category');
  const sevicesPostAPI = new postAPI();
  const [posts, setPosts] = useState<IArticle[]>([]);
  
  const breadcrumbs = [
    {
      title: t('home'),
      url: HOME,
    },
    {
      title: t('blog'),
    },
  ];

  useEffect(() => {
    sevicesPostAPI.getPostbyHomepage().then((res: any) => {
      setPosts(res.data.data)
    });   
  }, []);

  return (
    <Fragment>
      <div className="w-full flex flex-col justify-center items-center">
        <Breadcrumb breadcrumbs={breadcrumbs} border />
        <div className="relative w-full flex justify-center items-center">
          <Image src={collection_img} alt="Our Shop" className="w-full" loading="lazy" />
          <h3 className="absolute lg:text-[96px] md:text-[60px] text-[40px] text-white leading-[120px] font-italianno">
            {t('blog')}
          </h3>
        </div>
        <div className="w-full container flex-box">
          {posts?.map((item: IArticle, index: number) => (
            <CardBlog key={`card-item-` + index} item={item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default BlogLayout;

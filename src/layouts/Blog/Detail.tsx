/* eslint-disable jsx-a11y/alt-text */
import Breadcrumb from '@/components/Breadcrumb';
// import { useTranslations } from 'next-intl';
import React, { useEffect } from 'react';
// import SizeTutorialModal from './components/SizeTutorialModal';
import { useArticlesDetail } from "@/hooks/useArticle";
import { getCookie } from 'cookies-next';


type Props = {
  breadcrumbs: Breadcrumb[];
  // product: IProductsDetail;
  // products: IProductStore[];
};

const BlogDetailLayout = ({ breadcrumbs }: Props) => {
  
  const uuid = getCookie('uuid') || null;
  const { data } = useArticlesDetail(String(uuid));

  useEffect(() => {
    // setArrraySameStyle(arrraySameStyleArr)
  }, []);


  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <Breadcrumb breadcrumbs={breadcrumbs} border />
        <div className="w-full container">
          <h2 className="md:text-[24px] text-[20px] text-left text-[#333] mb-32px font-PlusJakartaSansMedium uppercase">{data?.titleVi}</h2>
          <div>
          <div className={
              'text-[#9a9a9a] md:text-[16px] text-[14px] leading-[21.79px] text-center px-8px md:mt-8px md:mb-16px my-8px'
            } dangerouslySetInnerHTML={{ __html: String(data?.descriptionVi) }}></div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default BlogDetailLayout;

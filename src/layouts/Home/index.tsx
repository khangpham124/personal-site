import Card from '@/components/Card/Card';
import ArrowRight from '@/public/assets/icons/ArrowRight';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import policy_1 from '@/public/assets/icons/policy-1.png';
import policy_2 from '@/public/assets/icons/policy-2.png';
import policy_3 from '@/public/assets/icons/policy-3.png';
import policy_4 from '@/public/assets/icons/policy-4.png';
import styles from './Home.module.css';
import flash_sale from '@/public/assets/icons/icon-flashsale.png';
import imagesIns from '@/fixtures/instagrams.json';
import Slideshow from '@/components/HeroSection/Slideshow';
import moment from 'moment';
import CardSale from '@/components/Card/CardSale';
import CardSaleTitle from '@/components/Card/CardSaleTitle';
import { IProductStore } from "@/interfaces/customerProduct-service";
import { useContentWeb } from "@/hooks/useContentWeb"; 
import { useLastestCollections } from "@/hooks/useCollections";
import { ICollection } from '@/interfaces/collection-service';
import { itemAPI } from '@/services/customerItems';
import { postAPI } from '@/services/customerArticles';
import { IArticle } from '@/interfaces/customerArticles-service';
import { BLOG } from '@/constants/routes';

type ImagesIns = {
  id: number;
  img: string;
};
const HomeLayout = ({ products }: any) => {
  const t = useTranslations('Index');
  const sevicesitemAPI = new itemAPI();
  const sevicesPostAPI = new postAPI();

  const [currentItems, setCurrentItems] = useState<IProductStore[]>(products);
  const [flashSaleItems, setFlashSaleItems] = useState<IProductStore[]>(products);
  const [postHome, setPostHome] = useState<IArticle[]>([]);
  const [flashTime, setFlashTime] = useState(null);
  

  const { data } = useContentWeb();

  const collections = useLastestCollections();
  const collectionsArr = collections?.data?.data;

  useEffect(() => {
    sevicesitemAPI.getProductInHot(1).then((res: any) => {
      setCurrentItems(res.data.data)
    });

    sevicesitemAPI.getFlashSaleInStore().then((res: any) => {
      // setFlashSaleItems(res.data.paginatedProducts)
      setFlashSaleItems(res.data.paginatedProducts.data)
      const endTime = res.data.flashSale.endDate;
      setFlashTime(endTime);
    });

    sevicesPostAPI.getPostbyHomepage().then((res: any) => {
      setPostHome(res.data.data)
    });   
  }, []);

  return (
    <>
      <Slideshow data={data} />
      {/* ===== Flash sale ===== */}
      {flashSaleItems.length > 0 ? (
          <section className="lg:px-40px px-20px w-full h-full flex flex-col justify-center lg:mt-16 my-[32px] lg:mb-20">
          <CardSaleTitle
            title="FLASH SALE"
            description="kết thúc trong"
            image_src={flash_sale}
            date_end={flashTime}
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-6">
            {flashSaleItems?.map((item: IProductStore, index: number) => (
              <CardSale key={`card-item-` + index} item={item} sold={Number(item.totalSoldItems)} />
            ))}
          </div>
        </section>
      ) : null}
      
      {/* ===== Best Selling Section ===== */}
      <section className="lg:px-40px px-20px w-full h-full flex flex-col justify-center lg:mt-16 my-[32px] lg:mb-20">
        <div className="flex md:flex-row flex-col justify-between items-center mb-[32px]">
          <h2 className="lg:text-[24px] text-center text-[#333] text-[20px] font-PlusJakartaSansMedium uppercase">
            {t('best_selling')}
          </h2>
          <Link href={'#'}>
            <a
              className={
                'btn-view-all bg-[unset] lg:text-[16px] text-center text-[14px] font-PlusJakartaSansMedium text-[#000] uppercase flex hover:text-[#FE7B6D] hover:duration-300'
              }
            >
              {t('view_all')}
              <div className="ml-12px">
                <ArrowRight />
              </div>
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-6">
          {currentItems?.map((item: IProductStore, index) => (
            <Card key={`card-item-` + index} item={item} />
          ))}
        </div>
      </section>

      <section className="lg:px-40px px-20px">
        {collectionsArr?.map((collection: ICollection, index: number) => (
          <div className="md:flex items-center" key={`collection_${index}`}>
            <div className="md:w-1/2 w-full">
              <div className="w-full px-4 sm:px-8 md:px-12 md:mb-0 mb-[24px] flex justify-center">
                <img src={ `${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${collection.imageUrl}`} alt="Our Shop" />
              </div>
            </div>
            <div className="md:w-2/3 w-full flex flex-col items-center">
              <h3 className="lg:text-[48px] text-[32px] font-italianno text-center">
              {collection.name}
              </h3>
              <p className="text-[14px] text-center heading-[21px] lg:mt-16px lg:mb-[50px] mt-[10px] mb-[20px]">
                {collection.descriptionVi}
              </p>
              <div className="w-full grid md:grid-cols-2 gap-x-4 lg:gap-x-8 gap-y-6 mb-10">
              {collection?.products?.slice(0, 2).map((item: IProductStore, index: number) => (
                   <Card key={`card-item-` + index} item={item} />
                  ))}
              </div>
              <Link href="/collections">
                <a className={'viewNow'}>{t('view_now')}</a>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* ===== Featured IProduct Section ===== */}
      <section className="lg:px-40px px-20px sm:px-8 md:px-12 my-16 flex flex-col">
        <div className="md:flex gap-x-8">
        {postHome?.map((post: IArticle, index: number) => (
          <div className="md:w-1/2 relative w-full" key={`post_${index}`}>
            <div className="w-full flex justify-center items-center relative">
              
              <img src={ `${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${post.imageUrl}`} alt="Our Shop" />
              <div className="absolute w-[90%] h-[90%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-[8px] border-[#FFFAFA]"></div>
              <div className="bg-[#fce0dccc] flex flex-col justify-center absolute w-full bottom-[50px] py-[29px] h-[100px] md:h-[130px] lg:h-[161px]">
                <h2 className="text-[#333] lg:text-[40px] md:text-[32px] text-[20px] capitalize text-center mb-16px">
                  <Link href={`${BLOG}/${post.slug}`}>
                    {post.titleVi}
                  </Link>
                </h2>
              </div>
              
            </div>
          </div>
        ))}
        </div>
      </section>

      <section className="lg:px-40px px-20px py-[30px] my-16 flex flex-col bg-[#FEF3F2]">
        <div className={`${styles.our_policy} md:flex flex-wrap`}>
          <div
            className={`${styles.our_policy__item} lg:w-1/4 md:w-1/2 w-full flex flex-col items-center`}
          >
            <div className="bg-[#FBFBFB] border-[1px] border-[#8F7572] w-[90px] md:w-[80px] md:h-[80px] h-[90px] rounded-[50%] flex justify-center items-center">
              <Image src={policy_1} alt="Policy" className="md:w-full" loading="lazy" width={45} height={45} />
            </div>
            <h4 className="md:text-[24px] text-[20px] text-center text-[#333333] font-PlusJakartaSansSemiBold mt-[24px] mb-8px uppercase">
              {t('policy_1')}
            </h4>
            <p className="text-[#414042] text-[14px] text-center">{t('policy_1_desc')}</p>
          </div>
          <div
            className={`${styles.our_policy__item} lg:w-1/4 md:w-1/2 w-full md:mb-0 md:mt-0 mt-24px  flex flex-col items-center`}
          >
            <div className="bg-[#FBFBFB] border-[1px] border-[#8F7572] w-[90px] md:w-[80px] md:h-[80px] h-[90px] rounded-[50%] flex justify-center items-center">
              <Image src={policy_2} alt="Policy" className="md:w-full" loading="lazy" width={45} height={45} />
            </div>
            <h4 className="md:text-[24px] text-[20px] text-center text-[#333333] font-PlusJakartaSansSemiBold mt-[24px] mb-8px uppercase">
              {t('policy_2')}
            </h4>
            <p className="text-[#414042] text-[14px] text-center">{t('policy_2_desc')}</p>
          </div>
          <div
            className={`${styles.our_policy__item} lg:w-1/4 md:w-1/2 w-full lg:mb-0 md:mt-0 mt-24px flex flex-col items-center`}
          >
            <div className="bg-[#FBFBFB] border-[1px] border-[#8F7572] w-[90px] md:w-[80px] md:h-[80px] h-[90px] rounded-[50%] flex justify-center items-center">
              <Image src={policy_3} alt="Policy" className="md:w-full" loading="lazy" width={45} height={45} />
            </div>
            <h4 className="md:text-[24px] text-[20px] text-center text-[#333333] font-PlusJakartaSansSemiBold mt-[24px] mb-8px uppercase">
              {t('policy_3')}
            </h4>
            <p className="text-[#414042] text-[14px] text-center">{t('policy_3_desc')}</p>
          </div>
          <div
            className={`${styles.our_policy__item} lg:w-1/4 md:w-1/2 w-full lg:mb-0 md:mt-0 mt-24px flex flex-col items-center`}
          >
            <div className="bg-[#FBFBFB] border-[1px] border-[#8F7572] w-[90px] md:w-[80px] md:h-[80px] h-[90px] rounded-[50%] flex justify-center items-center">
              <Image src={policy_4} alt="Policy" className="md:w-full" loading="lazy" width={45} height={45} />
            </div>
            <h4 className="md:text-[24px] text-[20px] text-center text-[#333333] font-PlusJakartaSansSemiBold mt-[24px] mb-8px uppercase">
              {t('policy_4')}
            </h4>
            <p className="text-[#414042] text-[14px] text-center">
              {t('policy_4_desc')} <span className="font-PlusJakartaSansSemiBold">09099904433</span>
            </p>
          </div>
        </div>
      </section>

      {/* ===== Our Shop Section */}
      <section className="flex flex-col justify-center items-center text-center">
        <div className="textBox">
          <h2 className="text-3xl">#JuGirl</h2>
          <p className="w-full md:text-[18px] text-[14px] text-center  mt-8px text-[#333333] px-[20px]">
            Tag @juclothing.vn trên Instagram để chia sẻ những khoảnh khắc xinh đẹp cùng Ju nhé!
          </p>
        </div>
        <div className="w-full] mt-[32px] flex flex-wrap">
          {imagesIns.map((item: ImagesIns, i: number) => (
            <div className="lg:w-1/6 md:w-1/3 w-1/2 h-full ins-list" key={`ins-item-${i + 1}`}>
              <Image
                src={item.img}
                alt="Policy"
                width={240}
                height={300}
                objectFit="cover"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeLayout;

import Card from "@/components/Card/Card";
import ArrowRight from "@/public/assets/icons/ArrowRight";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import policy_1 from "@/public/assets/icons/policy-1.png";
import policy_2 from "@/public/assets/icons/policy-2.png";
import policy_3 from "@/public/assets/icons/policy-3.png";
import policy_4 from "@/public/assets/icons/policy-4.png";
import styles from "./Home.module.css";
import flash_sale from "@/public/assets/icons/icon-flashsale.png";
import imagesIns from "@/fixtures/instagrams.json";
import Slideshow from "@/components/HeroSection/Slideshow";
import moment from "moment";
import CardSale from "@/components/Card/CardSale";
import CardSaleTitle from "@/components/Card/CardSaleTitle";
import { IProductStore } from "@/interfaces/customerProduct-service";
import { useContentWeb } from "@/hooks/useContentWeb";
import { useLastestCollections } from "@/hooks/useCollections";
import { ICollection } from "@/interfaces/collection-service";
import { itemAPI } from "@/services/customerItems";
import { postAPI } from "@/services/customerArticles";
import { IArticle } from "@/interfaces/customerArticles-service";
import { BLOG } from "@/constants/routes";

type ImagesIns = {
  id: number;
  img: string;
};
const HomeLayout = ({ products }: any) => {
  const t = useTranslations("Index");
  const sevicesitemAPI = new itemAPI();
  const sevicesPostAPI = new postAPI();

  const [currentItems, setCurrentItems] = useState<IProductStore[]>(products);
  const [flashSaleItems, setFlashSaleItems] =
    useState<IProductStore[]>(products);
  const [postHome, setPostHome] = useState<IArticle[]>([]);
  const [flashTime, setFlashTime] = useState(null);

  const { data } = useContentWeb();

  const collections = useLastestCollections();
  const collectionsArr = collections?.data?.data;

  useEffect(() => {
    // sevicesitemAPI.getProductInHot(1).then((res: any) => {
    //   setCurrentItems(res.data.data);
    // });
    // sevicesitemAPI.getFlashSaleInStore().then((res: any) => {
    //   // setFlashSaleItems(res.data.paginatedProducts)
    //   setFlashSaleItems(res.data.paginatedProducts.data);
    //   const endTime = res.data.flashSale.endDate;
    //   setFlashTime(endTime);
    // });
    // sevicesPostAPI.getPostbyHomepage().then((res: any) => {
    //   setPostHome(res.data.data);
    // });
  }, []);

  return (
    <>
      <div>
        <img
          src={`https://teddycoder.com/assets/img/top/coder1.jpg`}
          alt="Our Shop"
        />
      </div>
    </>
  );
};

export default HomeLayout;

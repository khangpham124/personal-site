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
import Vivus from "vivus";

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

    new Vivus("hi-there", {
      type: "scenario",
      duration: 200,
      start: "autostart",
      dashGap: 150,
      forceRender: false,
    });
  }, []);

  return (
    <>
      <div id="teddy_slide">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 400 150"
          enableBackground="new 0 0 427 287.7"
          id="hi-there"
        >
          <g>
            <path
              className="st0"
              d="M150.3,30.5v8.3h3.9v5.5h-3.9v11.1h3.9V61h-7.5c-0.6,0-1.1-0.2-1.6-0.6c-0.4-0.4-0.7-0.9-0.7-1.5V44.4h-2.8
                        v-5.5h2.8v-8.3h5.9V30.5z"
            />
            <path
              className="st0"
              d="M158.6,41c0-0.6,0.2-1.1,0.6-1.6c0.4-0.4,1-0.6,1.6-0.6h18c0.6,0,1.1,0.2,1.5,0.6c0.4,0.4,0.6,1,0.6,1.6v9.4
                        c0,0.6-0.2,1.1-0.6,1.6c-0.4,0.4-1,0.7-1.6,0.7h-14.4v2.8H181V61h-20.1c-0.6,0-1.1-0.2-1.6-0.6c-0.4-0.4-0.6-1-0.6-1.6L158.6,41
                        L158.6,41z M164.4,44.4v2.8h10.9v-2.8H164.4z"
            />
            <path
              className="st0"
              d="M203,58.8c0,0.6-0.2,1.1-0.7,1.6c-0.4,0.4-1,0.6-1.6,0.6h-12.2c-0.6,0-1.1-0.2-1.6-0.6c-0.4-0.4-0.6-1-0.6-1.6
                        V41c0-0.6,0.2-1.1,0.6-1.6s1-0.7,1.6-0.7h12.2c0.6,0,1.1,0.2,1.6,0.7s0.7,1,0.7,1.6V30.5h5.7V61H203V58.8z M200.7,55.4
                        c0.6,0,1.1-0.2,1.6-0.6c0.4-0.4,0.7-1,0.7-1.6v-8.9h-11v11.1H200.7z"
            />
            <path
              className="st0"
              d="M230.6,58.8c0,0.6-0.2,1.1-0.7,1.6c-0.4,0.4-1,0.6-1.6,0.6h-12.2c-0.6,0-1.1-0.2-1.6-0.6
                        c-0.4-0.4-0.6-1-0.6-1.6V41c0-0.6,0.2-1.1,0.6-1.6s1-0.7,1.6-0.7h12.2c0.6,0,1.1,0.2,1.6,0.7s0.7,1,0.7,1.6V30.5h5.7V61h-5.7V58.8z
                         M228.4,55.4c0.6,0,1.1-0.2,1.6-0.6c0.4-0.4,0.7-1,0.7-1.6v-8.9h-10.9v11.1H228.4z"
            />
            <path
              className="st0"
              d="M249.8,52.7l5.1-13.8h6.1l-10.7,29c-0.2,0.4-0.5,0.8-0.9,1.1c-0.4,0.3-0.8,0.4-1.3,0.4h-4.4v-5.5h2l1.2-3.1
                        L238.7,39h6L249.8,52.7z"
            />
            <path
              className="st0"
              d="M263.1,41c0-0.6,0.2-1.1,0.6-1.6c0.4-0.4,1-0.6,1.6-0.6h17.9c0.6,0,1.1,0.2,1.6,0.6c0.4,0.4,0.6,1,0.6,1.6v4.7
                        h-5.7v-1.4h-10.9v11.1h10.9V54h5.7v4.7c0,0.6-0.2,1.1-0.6,1.6c-0.4,0.4-1,0.6-1.6,0.6h-17.9c-0.6,0-1.1-0.2-1.6-0.6
                        c-0.4-0.4-0.6-1-0.6-1.6V41z"
            />
            <path
              className="st0"
              d="M313.2,58.8c0,0.6-0.2,1.1-0.6,1.6c-0.4,0.4-1,0.6-1.6,0.6h-18c-0.6,0-1.1-0.2-1.6-0.6c-0.4-0.4-0.6-1-0.6-1.6
                        V41.1c0-0.6,0.2-1.2,0.6-1.6s1-0.7,1.6-0.7h18c0.6,0,1.1,0.2,1.6,0.7c0.4,0.4,0.6,1,0.6,1.6V58.8z M307.5,44.4h-10.9v11.1h10.9
                        V44.4z"
            />
            <path
              className="st0"
              d="M335.1,58.8c0,0.6-0.2,1.1-0.7,1.6c-0.4,0.4-1,0.6-1.6,0.6h-12.2c-0.6,0-1.1-0.2-1.6-0.6
                        c-0.4-0.4-0.6-1-0.6-1.6V41c0-0.6,0.2-1.1,0.6-1.6s1-0.7,1.6-0.7h12.2c0.6,0,1.1,0.2,1.6,0.7s0.7,1,0.7,1.6V30.5h5.7V61h-5.7V58.8z
                         M332.9,55.4c0.6,0,1.1-0.2,1.6-0.6c0.4-0.4,0.7-1,0.7-1.6v-8.9h-10.9v11.1H332.9z"
            />
            <path
              className="st0"
              d="M346.2,41c0-0.6,0.2-1.1,0.6-1.6c0.4-0.4,1-0.6,1.6-0.6h18c0.6,0,1.1,0.2,1.5,0.6c0.4,0.4,0.6,1,0.6,1.6v9.4
                        c0,0.6-0.2,1.1-0.6,1.6c-0.4,0.4-1,0.7-1.6,0.7h-14.4v2.8h16.6V61h-20.1c-0.6,0-1.1-0.2-1.6-0.6c-0.4-0.4-0.6-1-0.6-1.6V41z
                         M351.9,44.4v2.8h10.9v-2.8H351.9z"
            />
            <path
              className="st0"
              d="M379.6,61h-5.7V38.8h5.7V41c0-0.6,0.2-1.1,0.7-1.6c0.4-0.4,1-0.6,1.6-0.6h6.5c0.6,0,1.1,0.2,1.6,0.6
                        c0.4,0.4,0.6,1,0.6,1.6v4.7h-5.7v-1.4h-3c-0.6,0-1.1,0.2-1.5,0.6c-0.4,0.4-0.6,1-0.6,1.6V61H379.6z"
            />
            <path
              className="st0"
              d="M143.6,101.2c0-0.4,0.2-0.5,0.5-0.5h4.7c0.4,0,0.5,0.2,0.5,0.5v4.5c0,0.4-0.2,0.5-0.5,0.5h-4.7
                        c-0.4,0-0.5-0.2-0.5-0.5V101.2z"
            />
            <path
              className="st0"
              d="M154.6,86.3c0-0.6,0.2-1.1,0.6-1.6c0.4-0.4,1-0.6,1.6-0.6h17.9c0.6,0,1.1,0.2,1.6,0.6c0.4,0.4,0.6,1,0.6,1.6
                        V91h-5.7v-1.4h-10.9v11.1h10.9v-1.4h5.7v4.7c0,0.6-0.2,1.1-0.6,1.6c-0.4,0.4-1,0.6-1.6,0.6h-17.9c-0.6,0-1.1-0.2-1.6-0.6
                        c-0.4-0.4-0.6-1-0.6-1.6V86.3z"
            />
            <path
              className="st0"
              d="M204.6,104c0,0.6-0.2,1.1-0.6,1.6c-0.4,0.4-1,0.6-1.6,0.6h-17.9c-0.6,0-1.1-0.2-1.6-0.6
                        c-0.4-0.4-0.6-1-0.6-1.6V86.3c0-0.6,0.2-1.2,0.6-1.6c0.4-0.4,1-0.7,1.6-0.7h17.9c0.6,0,1.1,0.2,1.6,0.7c0.4,0.4,0.6,1,0.6,1.6V104z
                         M198.9,89.6H188v11.1h10.9V89.6z"
            />
            <path
              className="st0"
              d="M230.5,106.2h-5.7V89.6H218c-0.6,0-1.1,0.2-1.6,0.6s-0.7,1-0.7,1.6v14.4H210V84h5.7v2.2c0-0.6,0.2-1.1,0.7-1.6
                        c0.4-0.4,1-0.6,1.6-0.6h9.9c0.6,0,1.1,0.2,1.6,0.7c0.4,0.4,0.6,1,0.6,1.6c0-0.6,0.2-1.1,0.7-1.6c0.4-0.4,1-0.6,1.6-0.6H243
                        c0.6,0,1.1,0.2,1.6,0.6c0.4,0.4,0.7,1,0.7,1.6v20h-5.7V89.6h-6.8c-0.6,0-1.1,0.2-1.6,0.6c-0.4,0.4-0.6,1-0.6,1.6L230.5,106.2
                        L230.5,106.2z"
            />
          </g>
          <circle className="st0" cx="68.9" cy="68.4" r="63.2" />
          <g>
            <path
              className="st0"
              d="M60,68.4v10.1h4.7v6.7H60v13.4h4.7v6.7h-9c-0.7,0-1.4-0.3-1.9-0.8c-0.5-0.5-0.8-1.1-0.8-1.9V85.2h-3.4v-6.7H53
                        V68.4H60z"
            />
            <path
              className="st0"
              d="M70.2,99.3c0-0.4,0.3-0.6,0.7-0.6h5.7c0.4,0,0.7,0.3,0.7,0.6v5.4c0,0.4-0.3,0.6-0.7,0.6h-5.7
                        c-0.4,0-0.7-0.3-0.7-0.6V99.3z"
            />
            <path
              className="st0"
              d="M83.6,81.1c0-0.8,0.3-1.4,0.8-1.9s1.2-0.8,1.9-0.8h21.8c0.8,0,1.4,0.3,1.9,0.8s0.8,1.1,0.8,1.9v5.7h-7v-1.6
                        H90.6v13.4h13.3V97h7v5.7c0,0.8-0.3,1.4-0.8,1.9s-1.2,0.8-1.9,0.8H86.3c-0.8,0-1.4-0.3-1.9-0.8s-0.8-1.1-0.8-1.9
                        C83.6,102.6,83.6,81.1,83.6,81.1z"
            />
          </g>
        </svg>
        <img
          src={`https://teddycoder.com/assets/img/top/coder1.jpg`}
          alt="Our Shop"
        />
      </div>
    </>
  );
};

export default HomeLayout;

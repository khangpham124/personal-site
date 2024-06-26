import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import styles from "./Home.module.css";

import slide_1 from "@/public/assets/slide/coder1.jpeg";
import slide_2 from "@/public/assets/slide/coder2.jpeg";
import slide_3 from "@/public/assets/slide/coder3.jpeg";

import Vivus from "vivus";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRef } from "react";

import $ from "jquery";

type ImagesIns = {
  id: number;
  img: string;
};
const HomeLayout = () => {
  const t = useTranslations("Index");

  const [showAnim, setShowAnim] = useState(true);
  const container = useRef();

  const settings = {
    slidesToShow: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    vertical: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 800,
    afterChange: () => {
      $(".innerText").addClass("start-anim");
      $(".innerText2").addClass("start-anim");
    },
    beforeChange: () => {
      $(".innerText").removeClass("start-anim");
      $(".innerText2").removeClass("start-anim");
    },
  };

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
    // TweenMax.to(".innerText", 0.5, {
    //   ease: Back.easeOut.config(1.5),
    //   opacity: 1,
    //   y: 0,
    // });

    new Vivus("hi-there", {
      type: "scenario",
      duration: 200,
      start: "autostart",
      dashGap: 150,
      forceRender: false,
    });

    setTimeout(function () {
      setShowAnim(false);
    }, 4500);
  }, []);

  return (
    <>
      <div id="teddy_slide">
        <div className={showAnim === true ? `anim` : `d-none`}>
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
        </div>

        <Slider
          // ref={(slider2) => setNav2(slider2 as any)}
          {...settings}
        >
          <div key={`slide_1`} className="warpText--wrap">
            <Image src={slide_1} alt="Frontend Developer" />
            <div className="warpText">
              <div className="mb-4">
                I'm<span className="squareText">Khang Pham</span>
              </div>
              <span className="innerText">WORK AS A LITTLE </span>
              <span className="innerText2">FRONTEND DEVELOPER</span>
            </div>
          </div>
          <div key={`slide_1`} className="warpText--wrap">
            <Image src={slide_2} alt="Frontend Developer" />
            <div className="warpText">
              <div className="mb-4">
                I'm<span className="squareText">Khang Pham</span>
              </div>
              <span className="innerText">DESIGN AND</span>
              <span className="innerText2">DEVELOP WEBSITE</span>
            </div>
          </div>
          <div key={`slide_1`} className="warpText--wrap">
            <Image src={slide_3} alt="Frontend Developer" />
            <div className="warpText">
              <div className="mb-4">
                I'm<span className="squareText">Khang Pham</span>
              </div>
              <span className="innerText">AND NOW</span>
              <span className="innerText2">I LIVE IN SAIGON</span>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HomeLayout;

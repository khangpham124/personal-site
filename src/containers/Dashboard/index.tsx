import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Slider from "react-slick";
import Transition from "react-transition-group/Transition";
import gsap from "gsap";

const DashboardContainer = () => {
  const { t: translator } = useTranslation();
  const Router = useRouter();
  const settingsSlider = {
    dots: false,
    infinite: true,
    speed: 1200,
    arrows: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: function () {
      gsap.from(".innerText", 0, {
        opacity: 0,
        y: 120,
        ease: "Back.easeOut.config(1.5)",
      });
      gsap.to(".innerText2", 0, {
        opacity: 0,
        y: 120,
      });
    },
    afterChange: function () {
      gsap.from(".innerText", 0.5, {
        opacity: 1,
        y: 0,
      });
      gsap.to(".innerText2", 0.5, {
        opacity: 1,
        y: 0,
        delay: 0.2,
      });
    },
  };
  return (
    <div id="main-wrapper">
      <h2 className="h1_top">
        I'm<span>Khang Pham</span>
      </h2>

      <Slider {...settingsSlider}>
        <div>
          <div className="warpText">
            <div className="web_desc">
              <span className="innerText">WORK AS A LITTLE </span>
            </div>
            <div className="web_desc">
              <span className="innerText2">FRONTEND DEVELOPER</span>
            </div>
          </div>
          <div className="wrapImg">
            <img src="https://teddycoder.com/assets/img/top/coder1.jpg" />
          </div>
        </div>
        <div>
          <div className="warpText">
            <div className="web_desc">
              <span className="innerText">DESIGN AND</span>
            </div>
            <div className="web_desc">
              <span className="innerText2">DEVELOP WEBSITE</span>
            </div>
          </div>
          <div className="wrapImg">
            <img src="https://teddycoder.com/assets/img/top/coder3.jpg" />
          </div>
        </div>
        <div>
          <div className="warpText">
            <div className="web_desc">
              <span className="innerText">AND NOW</span>
            </div>
            <div className="web_desc">
              <span className="innerText2">I LIVE IN SAIGON</span>
            </div>
          </div>
          <div className="wrapImg">
            <img src="https://teddycoder.com/assets/img/top/coder2.jpg" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default DashboardContainer;

import React, { useState } from 'react';
// import styles from '../Detail.module.css';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderThumbs = (data?: any) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const sliders = data.images;
  
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   fade: true,
  //   speed: 800,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  return (
    <>
      <div className='w-100 flex-box'>
        <div className='w-20'>
          <Slider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2 as any)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
            vertical={true}
          >
            {sliders?.map((slider: any, idx: number) => (
              <div key={`slide_${idx}`}>
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${slider.imageUrl}`}
                  alt={'Image slide home'}
                  className="w-100"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className='w-80'>
          <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1 as any)}>
            {sliders?.map((slider: any, idx: number) => (
              <div key={`slide_${idx}`}>
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${slider.imageUrl}`}
                  alt={'Image slide home'}
                  className="w-100"
                />
              </div>
            ))}
          </Slider>
        </div>
        
        
    </div>

      {/* <div className="relative slide-container w-full z-20 flex-box">
        <div className="w-80">
            <Slider 
              // asNavFor={nav2}
              // ref={(slider) => setNav1(slider as any)}
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1 as any)}
              arrows={true}
            > 
            {sliders?.map((slider: any, idx: number) => (
              <div key={`slide_${idx}`}>
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${slider.imageUrl}`}
                  alt={'Image slide home'}
                  className="w-100"
                />
              </div>
            ))}
            </Slider>
        </div>
        <div className="w-20">
            <Slider
              className="slide-nav"
              // asNavFor={nav1}
              // ref={(slider) => setNav2(slider as any)}
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2 as any)}
              slidesToShow={2}
              swipeToSlide={true}
              arrows={false}
              // focusOnSelect={true}
              infinite={true}
              // vertical={true}
            >
              {sliders?.map((slider: any, idx: number) => (
              <div key={`slide_${idx}`}>
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${slider.imageUrl}`}
                  alt={'Image slide home'}
                  className="w-100"
                />
              </div>
            ))}
            </Slider>
        </div>
           
        
        
      </div> */}
    </>
  );
};

export default SliderThumbs;

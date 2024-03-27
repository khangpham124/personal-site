import Breadcrumb from "@/components/Breadcrumb";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import collection_img from "@/public/assets/products/collection-menu.png";
import { HOME } from "@/constants/routes";
// import { useArticlesByPost } from "@/hooks/useArticle";
// import { ItemPost } from '@/services/articleServices';

import { infoAPI } from "@/services/worksServices";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function WorksLayout() {
  const t = useTranslations("Category");
  const sevicesWorksAPI = new infoAPI();
  const [posts, setPosts] = useState<any[]>([]);
  const [images, setImages] = useState<any[]>([]);

  const [imagesUrl, setImagesUrl] = useState<any[]>([]);

  const settings = {
    slidesToShow: 1,
    swipeToSlide: true,
    // focusOnSelect: true,
    arrows: true,
    // vertical: true,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    speed: 800,
  };

  useEffect(() => {
    sevicesWorksAPI.getListWorks().then((res: any) => {
      const allWorks = res.data;
      let arryWorks: [any?] = [];
      let mediaIds: [any?] = [];

      allWorks?.map((item: any) => {
        const items = {
          title: item.title.rendered,
          link: item.acf.url,
          thumb: item.acf.thumb,
          content: item.content.rendered,
        };
        arryWorks.push(items);
        mediaIds.push(item.featured_media);
      });
      setPosts(arryWorks);
      setImages(mediaIds);
    });
  }, []);

  return (
    <div className="mainContent">
      <h1 className="heading--sub">WORKS</h1>
      <Slider
        // ref={(slider2) => setNav2(slider2 as any)}
        {...settings}
      >
        {posts?.map((item: any, index: number) => (
          <div key={`slide_${index}`}>
            <div className="flex justify-between">
              <div className="w-3/12 mt-10">
                <h2 className="heading--2">
                  <a href={`${item.link}`} target="_blank">
                    {item.title}
                  </a>
                </h2>

                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: String(item.content) }}
                ></div>
                <a href={`${item.link}`} className="btn-view" target="_blank">
                  View more
                </a>
              </div>
              <div className="w-8/12">
                <img src={`${item.thumb}`} className="w-full" alt="Our Shop" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default WorksLayout;

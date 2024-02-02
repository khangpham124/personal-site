// import styles from './Hero.module.css';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slideshow = (data: any) => {
  const sliders = data.data;
  var settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div className="relative slide-container w-full z-20">
        <Slider {...settings}>
        {sliders?.map((slider: any, idx: number) => (
          <div key={`slide_${idx}`}>
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_PREFIX}${slider.imageUrl}`}
                alt={'Image slide home'}
              />
              {/* <div className={styles.centerTextSection}>
                <h2 className={styles.titleUp}>{slider.titleVi}</h2>
                <h4 className={styles.subtitle}>{slider?.subtitle}</h4>
                <p className={styles.desc}>{slider.descriptionVi}</p>
                {slider.linkedUrl ? <div><a href={`${slider.linkedUrl}`}>Link</a></div> : null }
              </div> */}
          </div>
        ))}
      </Slider>
      </div>
    </>
  );
};

export default Slideshow;

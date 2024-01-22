"use client";
// SliderVistos.tsx
import SliderVisto from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderVistos.module.css";

const SliderVistos = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" md:mt-[88px] mt-[72px] w-full rounded-3xl bg-gradient-to-r from-gray-700 to-gray-700/0 p-[1px]">
    <div className={`rounded-3xl bg-black ${styles.sliderContainer}`} id="solucoes">
      <div className={`rounded-3xl `}>
        <SliderVisto {...settings}>
          <div className={`w-24 h-29 flex items-center justify-center ${styles.slideContainer}`}>
            <img
              className={styles.slideImage}
              src="/vistoem.png"
              alt="visto em"
            />
          </div>

          <div className={styles.slideContainer}>
            <img
              className={styles.slideImage}
              src="/bradivisors.png"
              alt="bradivisors"
            />
          </div>

          <div className={styles.slideContainer}>
            <img className={styles.slideImage} src="/f.png" alt="f" />
          </div>

          <div className={styles.slideContainer}>
            <img className={styles.slideImage} src="/valor.png" alt="Valor" />
          </div>

          <div className={styles.slideContainer}>
            <img className={styles.slideImage} src="/tc.png" alt="TC" />
          </div>

          <div className={styles.slideContainer}>
            <img className={styles.slideImage} src="/news.png" alt="NEWS" />
          </div>
          </SliderVisto>
      </div>
    </div>
    </div>
  );
};

export default SliderVistos;

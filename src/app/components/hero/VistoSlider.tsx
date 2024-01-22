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
    <div className="container mt-14 mb-20 md:mr-auto max-w-[500px]" id="solucoes">
      <div className={`rounded-3xl p-27 py-19 pl-35 pr-0 border border-solid border-gray-300 overflow-hidden ${styles.sliderContainer}`}>
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
  );
};

export default SliderVistos;

"use client";
// Testimonialslider.tsx
import TestimonialSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderTestimonial.module.css";

const SliderTestimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="" id="solucoes">
      <div className={` ${styles.sliderContainer}`}>
        <TestimonialSlider {...settings}>
          <div className={styles.slideContainer}>
            <div className="flex relative flex-col gap-5 md:items-start md:w-96 w-[350px] h-96 bg-[#131516] border rounded-3xl border-[#222729] p-10 md:p-10 items-center self-center md:self-start">
              <img
                className="absolute top[4%] left-[4%]"
                src="/aspas.png"
                alt="icon aspas"
              />
              <p className="text-[#B0B7BE] text-left text-lg font-medium not-italic">
                Conteúdos preparados para trazer mais segurança, independente do
                seu nível. Conteúdos preparados para trazer mais segurança,
                independente do seu nível.Conteúdos preparados para trazer mais
                segurança, independente do seu nível.
              </p>
              <p className="text-[#F2F4F8] text-left text-lg font-medium italic">
                Assinante VAROS
              </p>
            </div>
          </div>

          <div className={styles.slideContainer}>
            <div className="flex relative flex-col gap-5 md:items-start md:w-96 w-[350px] h-96 bg-[#131516] border rounded-3xl border-[#222729] p-10 md:p-10 self-center md:self-start">
              <img
                className="absolute top[4%] left-[4%]"
                src="/aspas.png"
                alt="icon aspas"
              />
              <p className="text-[#B0B7BE] text-left text-lg font-medium not-italic">
                Conteúdos preparados para trazer mais segurança, independente do
                seu nível. Conteúdos preparados para trazer mais segurança,
                independente do seu nível.Conteúdos preparados para trazer mais
                segurança, independente do seu nível.
              </p>
              <p className="text-[#F2F4F8] text-left text-lg font-medium italic">
                Assinante VAROS
              </p>
            </div>
          </div>

          <div className={styles.slideContainer}>
            <div className="flex relative flex-col gap-5 md:items-start md:w-96 w-[350px] h-96 bg-[#131516] border rounded-3xl border-[#222729] p-10 md:p-10 self-center md:self-start">
              <img
                className="absolute top[4%] left-[4%]"
                src="/aspas.png"
                alt="icon aspas"
              />
              <p className="text-[#B0B7BE] text-left text-lg font-medium not-italic">
                Conteúdos preparados para trazer mais segurança, independente do
                seu nível. Conteúdos preparados para trazer mais segurança,
                independente do seu nível.Conteúdos preparados para trazer mais
                segurança, independente do seu nível.
              </p>
              <p className="text-[#F2F4F8] text-left text-lg font-medium italic">
                Assinante VAROS
              </p>
            </div>
          </div>
        </TestimonialSlider>
      </div>
    </div>
  );
};

export default SliderTestimonial;

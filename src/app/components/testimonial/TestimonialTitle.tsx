import SliderTestimonial from "./Testimonialslider";

const TestimonialTitle = () => {
  return (
    <>
      <div className="flex flex-col gap-14 md:gap-5">
        <div className="flex flex-col gap-2 md:items-start">
          <h2 className="md:text-[38px] text-3xl text-center md:text-left text-white font-bold">Didática de verdade</h2>
          <p className="text-[18px] text-white font-bold text-center md:text-left">Garantindo seu aprendizado</p>
        </div>
        <SliderTestimonial />
      </div>
    </>
  );
};

export default TestimonialTitle;

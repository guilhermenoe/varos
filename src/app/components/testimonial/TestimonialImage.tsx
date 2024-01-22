import Image from "next/image";

const TestimonialImage = () => {
  return (
    <div className="flex flex-col gap-16">
      <div>
        <Image
          src="/testimonial.png"
          alt="testimonial.png"
          width={564}
          height={397}
        />
      </div>

      <div className="flex gap-9 rounded-[32px] border border-solid border-gray-300 overflow-hidden py-3 px-4 md:py-4 md:px-24 max-h-24">
        <div className="flex flex-col gap-1 items-center">
          <p className="text-[#C6CAD2] text-lg font-bold">+ 1000</p>
          <p className="text-[#FAFAFA] text-sm font-normal text-center">Nota média geral das aulas</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p className="text-[#19C819] text-lg font-bold">4,8/5</p>
          <p className="text-[#FAFAFA] text-sm font-normal text-center">Nota média geral das aulas</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p className="text-[#C6CAD2] text-lg font-bold">10k +</p>
          <p className="text-[#FAFAFA] text-sm font-normal text-center">Comunidade</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialImage;

import React from "react";
import { HiArrowRight } from "react-icons/hi2";

const TitleHero = () => {
  return (
    <>
      <div className="flex flex-col items-center md:items-start text-center md:text-left"> {/* Centralizar no mobile e alinhar à esquerda no desktop */}
        <h1 className="text-[38px] md:text-[64px] text-white font-extrabold mb-6">Investir de forma mais inteligente passa por aqui.</h1>
        <p className="text-[#E2E5EB] text-lg font-semibold mb-8">Fazemos de tudo para que você possa conquistar seus sonhos da melhor forma possível.</p>
        <a href="" className="flex max-w-[263px] items-center gap-3 text-[#00F700] rounded-full px-12 py-4 bg-[#19c81966] text-lg font-semibold">Comprar agora <HiArrowRight size={24} /></a>
      </div>
    </>
  );
}

export default TitleHero;

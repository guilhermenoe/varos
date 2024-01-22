const CardsHero = () => {
  return (
    <div className="flex flex-col gap-16 items-start">
      <div className="flex gap-5 items-center rounded-2xl pr-14 px-3 py-2 border border-[#4D5358]">
        <div className="py-3 px-4 bg-transparent rounded-lg border border-[#4D5358]">
          <img src="/investiments/FATORinvesti.png" alt="" width={21} height={21} />
        </div>
        <p className="font-normal text-base text-white">Carteira FATOR</p>
      </div>
      <div className="flex gap-5 items-center rounded-2xl px-3 py-2 border border-[#4D5358] ml-8">
        <div className="py-3 px-4 bg-transparent rounded-lg border border-[#4D5358]">
          <img src="/Dividendos.svg" alt="" width={21} height={21} />
        </div>
        <p className="font-normal text-base text-white">
          Carteira de Dividendos
        </p>
      </div>
      <div className="flex gap-5 items-center rounded-2xl pr-14 px-3 py-2 border border-[#4D5358]">
        <div className="py-3 px-4 bg-transparent rounded-lg border border-[#4D5358]">
          <img src="/Frame.svg" alt="" width={21} height={21} />
        </div>
        <p className="font-normal text-base text-white">
          Código<span className="text-[#00F0C9]">.py</span>
        </p>
      </div>
    </div>
  );
};

export default CardsHero;

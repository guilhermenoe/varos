import Image from "next/image";

const Usericons = () => {
  return (
    <>
      <div className="gap-[13px] hidden md:flex">
        <div className="flex gap-4 items-center py-[10px] px[13px]">
          <Image
            src="/cart.png"
            alt="Assinar Agora Icon"
            width={25}
            height={24}
          />
          <span className="text-lg font-semibold leading-6 tracking-tight text-[#FAFAFA]">
            Assinar Agora
          </span>
        </div>
        <div className="flex gap-4 items-center py-[10px] px[13px]">
          <Image src="/user.png" alt="Entar Icon" width={25} height={24} />
          <span className="text-lg font-semibold leading-6 tracking-tight text-[#FAFAFA]">
            Entrar
          </span>
        </div>
      </div>
    </>
  );
};

export default Usericons;

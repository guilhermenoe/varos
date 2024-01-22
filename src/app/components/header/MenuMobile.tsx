"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { HiArrowRight } from "react-icons/hi2";

const MenuMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {const handleScroll = () => {
    const menuContainer = document.getElementById("menu-container");
  
    if (menuContainer) {
      if (menuOpen) {
        menuContainer.classList.add("menu-open");
      } else {
        menuContainer.classList.remove("menu-open");
      }
    }
  };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`lg:hidden flex flex-row items-center w-full px-12 justify-between ${
        menuOpen ? "menu-open" : ""
      }`}
    >
      <div className="z-[51]">
        <Image src="/varos.png" alt="logo" width={101} height={20} />
      </div>
      <div className="z-[51] flex">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none z-[51]"
        >
          {menuOpen ? <IoMdClose size={32} /> : <IoIosMenu size={32} />}
        </button>
      </div>
      {menuOpen && (
        <div
          id="menu-container"
          className="fixed inset-0 bg-[#131313] z-50 overflow-y-auto top-0 left-0 w-full h-full"
        >
          <div className="flex-col flex pt-24">
            <div className="w-[98%] mx-auto flex flex-col mb-10">
              <button className="text-white focus:outline-none py-[10px] px-3 bg-transparent flex items-center self-center gap-4 border border-white rounded w-full justify-center text-lg">
                <Image
                  src="/user.png"
                  alt="Entrar Icon"
                  width={25}
                  height={24}
                />
                ENTRAR
              </button>
              <button className="text-white focus:outline-none py-[10px] px-3 bg-[#00F700] mt-4 border border-white rounded w-full justify-center text-lg">
                ASSINAR AGORA
              </button>
            </div>
            <div className="w-full flex flex-col px-4 h-[inherit]  min-h-[415px] justify-center">
              <div className="flex flex-col bg-[#222729] px-7 gap-7 min-h-[415px] justify-center">
                <div className="flex border-b border-white">
                  <p className="text-white text-base font-bold">Produtos</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white text-base flex justify-between font-bold">
                    Carteiras <HiArrowRight />
                  </span>
                  <p className="text-[#B0B7BE] text-xs font-normal">
                    Aprenda a encontrar as melhores ações, invista seu dinheiro
                    de maneira inteligente e construa um futuro financeiro
                    sólido.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white text-base flex justify-between font-bold">
                    Cursos <HiArrowRight />
                  </span>
                  <p className="text-[#B0B7BE] text-xs font-normal">
                    Aprenda a encontrar as melhores ações, invista seu dinheiro
                    de maneira inteligente e construa um futuro financeiro
                    sólido.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white text-base flex justify-between font-bold">
                    Consultoria <HiArrowRight />
                  </span>
                  <p className="text-[#B0B7BE] text-xs font-normal">
                    Aprenda a encontrar as melhores ações, invista seu dinheiro
                    de maneira inteligente e construa um futuro financeiro
                    sólido.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col px-4 bg-[#131313] z-50 h-screen">
              <div className="w-full gap py-7 border-b-2 border-[#222729]">
                <span className="text-white text-base font-bold">Blog</span>
              </div>
              <div className="w-full gap py-7 border-b-2 border-[#222729]">
                <span className="text-white text-base font-bold">
                  Quem somos
                </span>
              </div>
              <div className="w-full gap py-7 border-b-2 border-[#222729]">
                <span className="text-white text-base font-bold">Conteúdo</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuMobile;

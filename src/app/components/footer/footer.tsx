import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 sm:p-0">
      <div className="flex flex-col md:flex-row mx-auto md:py-14 md:pr-6">
        <div className="max-w-[30%] flex-auto mb-4 md:mb-0 md:mr-6">
          <Image
            src="/logo-footer.png"
            alt="Logo da empresa"
            width={74}
            height={74}
          />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-9 md:gap-6">
            <div className="flex flex-col gap-6">
              <h2 className="text-xl text-white font-bold">Cursos</h2>
              <ul className="flex flex-col gap-6">
                <li className="text-[#F2F4F8] text-base font-medium ">
                  <a href="#">Valuation do Zero ao Avançado 2.0</a>
                </li>
                <li className="text-[#F2F4F8] text-base font-medium "> 
                  <a href="#">Código.py</a>
                </li>
                <li className="text-[#F2F4F8] text-base font-medium "> 
                  <a href="#">Minicurso Reels</a>
                </li>
                <li className="text-[#F2F4F8] text-base font-medium "> 
                  <a href="#">Enciclopédia de FII</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-xl text-white font-bold">Carteiras</h2>
              <ul className="flex flex-col gap-6">
                <li className="text-[#F2F4F8] text-base font-medium ">
                  <a href="#">Carteira FATOR</a>
                </li>
                <li className="text-[#F2F4F8] text-base font-medium "> 
                  <a href="#">Carteira Seleção</a>
                </li>
                <li className="text-[#F2F4F8] text-base font-medium "> 
                  <a href="#">Carteira Essencial</a>
                </li>
                <li className="text-[#F2F4F8] text-base font-medium "> 
                  <a href="#">Carteira Small Caps</a>
                </li>
                <li className="text-[#F2F4F8] text-base font-medium "> 
                  <a href="#">Carteira Dividendos</a>
                </li>
                <li className="text-[#F2F4F8] text-base font-medium "> 
                  <a href="#">Carteira de FIIs</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-xl text-white font-bold">Carteiras</h2>
              <ul className="flex flex-col gap-6">
                <li className="text-[#F2F4F8] text-base font-medium ">
                  <a href="#">Carteira FATOR</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-xl text-white font-bold">Carteiras</h2>
              <ul className="flex flex-col gap-6">
                <li className="text-[#F2F4F8] text-base font-medium ">
                  <a href="#">Carteira FATOR</a>
                </li>
                <li className="text-[#F2F4F8] text-base font-medium "> 
                  <a href="#">Twitter</a>
                </li>
                <li className="text-[#F2F4F8] text-base font-medium "> 
                  <a href="#">Youtube</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col items-start justify-center pb-14 gap-2">
        <p className="text-[#F2F4F8] text-sm font-medium">VAROS 2023</p>
        <p className="text-[#F2F4F8] text-sm font-medium">Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;

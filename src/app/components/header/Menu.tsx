import Logo from "./Logo";

const Menu = () => {

  return (
    <div className="relative">
      {/* Desktop Menu */}
      <nav className="desktop-menu hidden md:flex gap-[77px]">
        <Logo />

        <ul className="flex flex-row gap-20">
          <li>
            <a href="/" className="text-[#FAFAFA] hover:text-[#00F700]">
              Produtos
            </a>
          </li>
          <li>
            <a href="/" className="text-[#FAFAFA] hover:text-[#00F700]">
              Blog
            </a>
          </li>
          <li>
            <a href="/" className="text-[#FAFAFA] hover:text-[#00F700]">
              Conteúdo
            </a>
          </li>
          <li>
            <a href="/" className="text-[#FAFAFA] hover:text-[#00F700]">
              Quem Somos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
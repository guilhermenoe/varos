import Menu from "./Menu"
import MenuMobile from "./MenuMobile"
import Usericons from "./UserIcons"

const Header = () => {
    return (
        <header className="container px-4 sm:p-0 mx-auto flex justify-between items-center w-full py-[10px]">
            <Menu/>
            <Usericons/>
            <MenuMobile/>
        </header>
    )
}

export default Header
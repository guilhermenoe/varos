import Menu from "./Menu"
import MenuMobile from "./MenuMobile"
import Usericons from "./UserIcons"

const Header = () => {
    return (
        <header className="container mx-auto flex justify-between items-center w-full h-16">
            <Menu/>
            <Usericons/>
            <MenuMobile/>
        </header>
    )
}

export default Header
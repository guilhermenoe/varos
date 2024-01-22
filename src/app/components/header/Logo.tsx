import Image from "next/image"

const Logo = () => {
    return (
        <Image
            objectFit="contain"
            src="/varos.png"
            alt="logo"
            width={80}
            height={15}
        />
        )
}

export default Logo
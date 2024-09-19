import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <>
            <div className="nav flex justify-between items-center">
                <div className="logo">
                    <Image width="200" height="100" src="/logo.png" alt="family friendly wellness"/>
                </div>
                <div className="nav-items">
                    <Link href="/"><p>Home</p></Link>
                    <Link href="/team"><p>Our Team</p></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;
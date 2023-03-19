import contStyles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useRef, useState, useContext,use } from "react";
import Contact from "./contact";
import Hamburger from "./Menu";
import { MenuContext } from "@/context/menuContext";


const Navbar = () => {
  const { menu,setMenu } = useContext(MenuContext);
  const { pathname } = useRouter();
  const [modal, setModal] = useState(false);
  const conRef = useRef();

  const handleModal1 = () => {
    setModal(true);
    setMenu(false)
    conRef.current.style.top = "50%";
    conRef.current.style.opacity = "1";

  };

  const handleModal2 = () => {
    setModal(false);
    conRef.current.style.top = "30%";
    conRef.current.style.opacity = "0";
  };

  const navigate = (path) => {
    Router.push(path)
    setMenu(false)
  }

 
  return (
    <section id="top" className={contStyles.container}>
      {modal && (
        <div onClick={handleModal2} className={contStyles.overlay}></div>
      )}
      <nav className="w-full bg-transparent relative flex justify-between items-center py-6">
        <Link href="/" className="flex items-center text-white">
          <Image width={50} height={50} src="/favic.png" alt="..." />
          <span>KARI</span>
        </Link>
        <Hamburger />

        {/* .................Mobile.................... */}
        {menu && <ul className={contStyles.menu}>
          <li onClick={()=>navigate("/")}>Home</li>
          <li  onClick={()=>navigate("/#project")}>Work</li>
          <li  onClick={()=>navigate("/about")}>About me</li>
          <li onClick={handleModal1}>
            Contact
          </li>
        </ul>}

        {/* .........................large screen menu............... */}
        <ul className={contStyles.menuDesk}>
          <Link
            href="/"
            className={
              pathname === "/" ? "ml-4 border-b-4 border-sky-300" : "ml-4"
            }
          >
            Home
          </Link>
          <Link href="/#project" className="ml-4">
            Work
          </Link>
          <Link
            href="/about"
            className={
              pathname === "/about" ? "ml-4 border-b-4 border-sky-400" : "ml-4"
            }
          >
            About me
          </Link>
          <li className="ml-4" onClick={handleModal1}>
            Contact
          </li>
        </ul>
      </nav>
      <Contact conRef={conRef} />
    </section>
  );
};

export default Navbar;

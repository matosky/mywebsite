import contStyles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Contact from "./contact";

const Navbar = () => {
    const { pathname } = useRouter();
    const [modal, setModal] = useState(false);
    const conRef = useRef();

    const handleModal1 = () => {
        setModal(true)
        conRef.current.style.top = "50%";
        conRef.current.style.opacity = "1";
    }


    const handleModal2 = () => {
       setModal(false)
        conRef.current.style.top = "30%";
        conRef.current.style.opacity = "0";
    }

   

  return (
      <section id="top" className={contStyles.container}>
          {modal && <div onClick={handleModal2} className={contStyles.overlay}></div>}
      <nav className="w-full bg-transparent flex justify-between items-center py-6">
        <Link href="/" className="flex items-center text-white">
          <Image width={50} height={50} src="/favic.png" alt="..." />
          <span>KARI</span>
        </Link>
        <ul className="hidden md:display-block md:flex text-white items-center">
          <Link
            href="/"
            className={pathname === "/" ? "ml-4 border-b-4 border-sky-300" : "ml-4"}
          >
            Home
          </Link>
          <Link href="/#project"  className="ml-4 cursor-pointer">Work</Link>
          <Link
            href="/about"
            className={pathname === "/about" ? "ml-4 border-b-4 border-sky-400" : "ml-4"}
          >
            About me
          </Link>
          <li className="ml-4 cursor-pointer" onClick={handleModal1}>Contact</li>
        </ul>
          </nav>
          <Contact conRef={conRef} />
    </section>
  );
};

export default Navbar;

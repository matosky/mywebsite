import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Section1 from "@/components/Section1";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Footer from "@/components/Footer";
import Section2 from "@/components/Section2";
import Contact from "@/components/contact";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>akari|home</title>
        <meta name="akari portfolio" content="akari portfolio website | Mathias Akari | Niger Delta Universty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favic.png" />
      </Head>
      <div className={styles.main}>
        <Navbar />
        <Hero />
        {/* <Section1 /> */}
        <Section2 />
        <Section3 />
        <Section4 />
        <Link href="/#top" className={styles.scroll}>
          <FaArrowUp height={20} width={20} />
        </Link>
        <Footer />
      </div>
    </>
  );
}

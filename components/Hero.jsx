import Link from "next/link";
import { FaChevronRight, FaDownload } from "react-icons/fa";
import heroStyles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section  className={heroStyles.section}>
      <div className={heroStyles.container}>
        <div className={heroStyles.row}>
          <div className={heroStyles.box}>
            <h1>
              Passionate Software Engineer,
              <br /> Web/Mobile development
            </h1>
            <p className={heroStyles.heroP}>
              With over 3+ year's of experience building, deploying and maintaining personal, company and client projects, following software development best practices. I can boldly say that you are at the door of the right candidate for your company 
            </p>
                      <Link href="/about" className="mt-4 text-green-300 border-b-2 border-green-300 w-fit flex items-center">
                          Know more about me
                          <FaChevronRight width={30} height={30}  />
                      </Link>
            <div className="flex w-full items-center justify-center  mt-8">
              <Link href="/#project" className={heroStyles.button}>View works</Link>
                          <a href="https://docs.google.com/document/d/1P8H-xA9n5y-Hy9wE5ejuNv-7Je_9S0ovAvZJ6isAfXI/edit?usp=sharing" className={heroStyles.button2}>
                              <FaDownload />
                              resume
                          </a>
            </div>
          </div>
          <div className={heroStyles.extras}>
            <div className={heroStyles.contact}></div>
          </div>
        </div>
      </div>
      <div className={heroStyles.styles}>
        <img src="/thickline.svg" alt="..." />
      </div>
    </section>
  );
};

export default Hero;

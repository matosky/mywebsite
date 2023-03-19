import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import aboutStyles from "../styles/About.module.css";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>akari|About</title>
        <meta
          name="akari portfolio"
          content="akari portfolio website | about page | Mathias Akari | Niger Delta Universty"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favic.png" />
      </Head>
      <Navbar />
      <section className={aboutStyles.section}>
        <div className={aboutStyles.container}>
          <div className="header grid mb-10 grid-cols-1 md:grid-cols-2 justify-between">
            <div className={aboutStyles.img}>
              <Image width={600} height={600} src="/me.jpg" alt="..." />
            </div>
            <div className={aboutStyles.right}>
              <div className="md:justify-start">
                <h1 className="text-center md:text-start">Mathias Akari</h1>
                <p className="text-center md:text-start">Full Stack Developer, Passionate learner</p>
              </div>
            </div>
          </div>
          <hr />
          <section className={aboutStyles.des}>
            <h5 className="text-center md:text-start">Hi there! Thanks for visiting my portfolio.</h5>
            <p className="text-justify md:text-start">
              I'm <span className={aboutStyles.bold}>Mathias Akari,</span> a
              Full Stack Developer, and a passionate learner. I am a graduate of
              Electrical/Electronics Engineering from{" "}
              <span className={aboutStyles.bold}>Niger Delta University,</span>{" "}
              Amassoma, Nigeria. I have worked on a wide range of technologies
              and have worked on projects ranging from small to large scale. I
              am a self-motivated, self-taught and self-driven individual who is
              always looking for new challenges and opportunities. I love
              participating in hackathons and engaging in communities.
            </p>
          </section>
        </div>
        <Experience />
        <Tools />
        <Skills />
        <Footer />
      </section>
    </>
  );
};

export default About;

import aboutStyles from "../styles/About.module.css";
import Image from "next/image";

const Experience = () => {
  return (
    <section className={aboutStyles.section}>
      <div className={aboutStyles.container}>
        <h1 className={aboutStyles.h1}>Experience</h1>
        <div className="grid">
          <div className={aboutStyles.card}>
            <div className={aboutStyles.box}>
              <div className="bg-white mr-10">
                <Image width={600} height={600} src="/decagon.svg" alt="..." />
              </div>
              <div>
                <h3>Decagon</h3>
                <p>Full Stack Developer</p>
                <small>Nov 2021 - present</small>
              </div>
            </div>
            <div className={aboutStyles.extra}></div>
          </div>
          <div className={aboutStyles.card}>
            <div className={aboutStyles.box}>
              <div className="bg-white mr-10">
                <Image width={600} height={600} src="/NewHorizons.png" alt="..." />
              </div>
              <div>
                <h3>NewHorizon's Inc</h3>
                <p>Technical Instructor</p>
                <small>Feb 2021 - Nov 2021</small>
              </div>
            </div>
            <div className={aboutStyles.extra}></div>
          </div>
          <div className={aboutStyles.card}>
            <div className={aboutStyles.box}>
              <div className="bg-white mr-10">
                <Image width={600} height={600} src="/favic.png" alt="..." />
              </div>
              <div>
                <h3>Self-Employed</h3>
                <p>Freelance</p>
                <small>Jul 2020 - present</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

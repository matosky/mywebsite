import aboutStyles from "../styles/About.module.css";

const Skills = () => {
  return (
    <section className={aboutStyles.section}>
      <div className={aboutStyles.container}>
        <h1 className={aboutStyles.skillH1}>Skills</h1>
        <div className={aboutStyles.skillRow}>
          <div className={aboutStyles.skillDiv}>Web Development</div>
          <div className={aboutStyles.skillDiv}>
            Mobile Devlopment/React Native
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

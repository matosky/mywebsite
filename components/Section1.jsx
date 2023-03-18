import { FaViadeo } from "react-icons/fa";
import section1Styles from "../styles/Section1.module.css";

const Section1 = () => {
  return (
    <section className={section1Styles.section}>
      <div className={section1Styles.container}>
        <div className={section1Styles.row}>
          <h1 className="flex items-center justify-center">
            <FaViadeo height={30} width={30} />
            Video Resume
          </h1>
          <video className={section1Styles.video} width="100%" height="240" controls>
            <source
               src="/Video_resume.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Section1;

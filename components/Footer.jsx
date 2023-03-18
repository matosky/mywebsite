import footerStyles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyles.section}>
      <div className={footerStyles.container}>
        <div className="flex items-center justify-between w-full">
          <span>Let's Connect</span>
          <div className="flex items-center ">
            <a href="mail:akaridow@gmail.com">
              <img className="icon" src="/icons8-mail.svg" alt="mail" />
            </a>
            <a href="https://www.linkedin.com/in/mathias-akari/">
              <img className="icon" src="/icons8-linkedin-circled.svg" alt="" />
            </a>
            <a href="https://github.com/matosky">
              <img className="icon" src="/icons8-github.svg" alt="" />
            </a>
          </div>
        </div>
        <div className={footerStyles.bd}></div>
        <div className="flex flex-col my-4">
          <a href="fff">Report</a>
          <a href="fff">Feedback</a>
          <a href="fff">Privacy Policy</a>
        </div>
      </div>
      <div className={footerStyles.bottomSec}>
        <div className={footerStyles.bottomCont}>
          <p>&copy; 2023 akari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

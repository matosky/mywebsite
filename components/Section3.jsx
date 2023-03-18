import section3Styles from "../styles/Section3.module.css"
import Image from "next/image";

const Section3 = () => {
    return (
        <section className={section3Styles.section}>
            <div className={section3Styles.container}>
                <h1>Why Hire me <span>?</span></h1>
                <div className={section3Styles.grid}>
                    <div className={section3Styles.card}>
                        <div className={section3Styles.top}>
                            <Image width={600} height={600} src="/Collaborators.svg" alt="..." />
                        </div>
                        <div className="bottom">
                            <h4>Collaborative</h4>
                            <p>
                                Teamwork makes the dream work. Collaboration first, then work.
                            </p>
                        </div>
                    </div>
                      <div className={section3Styles.card}>
                        <div className={section3Styles.top}>
                            <Image width={600} height={600} src="/communication.svg" alt="..." />
                        </div>
                        <div className="bottom">
                            <h4>Communicative</h4>
                            <p>
                                I balance talking and listening hence ensuring effective communication.
                            </p>
                        </div>
                    </div>
                      <div className={section3Styles.card}>
                        <div className={section3Styles.top}>
                            <Image width={600} height={600} src="/workha.svg" alt="..." />
                        </div>
                        <div className="bottom">
                            <h4>Workaholic</h4>
                            <p>
                                I don't wait for deadlines, deadlines wait for me.
                            </p>
                        </div>
                    </div>
                      <div className={section3Styles.card}>
                        <div className={section3Styles.top}>
                            <Image width={600} height={600} src="/motivation.svg" alt="..." />
                        </div>
                        <div className="bottom">
                            <h4>Self Motivated</h4>
                            <p>
                                I put myself into action to achieve my goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Section3;
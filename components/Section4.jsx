import section4Styles from "../styles/Section4.module.css"
import { FaMailBulk } from "react-icons/fa";

const Section4 = () => {
    return ( 
        <section className={section4Styles.section}>
            <div className={section4Styles.container}>
                <div className={section4Styles.left}>
                    <span>Interested</span><br/>
                    <span>working</span><br />
                    <span>with me?</span>
                </div>
                <div className={section4Styles.right}>
                    <button className={section4Styles.btn1}>
                        <FaMailBulk height={20} width={20} />
                        <span className="ml-1">Email me</span>
                    </button>
                     <button>
                        See More Projects
                    </button>
                </div>
            </div>
        </section>
     );
}
 
export default Section4;
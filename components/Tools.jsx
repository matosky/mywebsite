import aboutStyles from "../styles/About.module.css"
import Image from "next/image"

const Tools = () => {
    return ( 
        <section className={aboutStyles.container}>
            <div className={aboutStyles.toolSection}>
                <h1 className={aboutStyles.toolH1}>Tools, Languages & Frameworks/Libraries</h1>
                <div className={aboutStyles.toolGrid}>
                    <div className={aboutStyles.toolBox}>
                        <Image width={100} height={100}  src="/github-original.svg" alt="..." />
                    </div>
                    <div className={aboutStyles.toolBox}>
                        <Image width={100} height={100} src="/react-original.svg" alt="..." />
                    </div>
                    <div className={aboutStyles.toolBox}>
                        <Image width={100} height={100} src="/nodejs-original.svg" alt="..." />
                    </div>
                    <div className={aboutStyles.toolBox}>
                        <Image width={100} height={100} src="sass-original.svg" alt="..." />
                    </div>
                    <div className={aboutStyles.toolBox}>
                        <Image width={100} height={100} src="java-original.svg" alt="..." />
                    </div>
                    <div className={aboutStyles.toolBox}>
                        <Image width={100} height={100} src="mongodb-original.svg" alt="..." />
                    </div>
                    <div className={aboutStyles.toolBox}>
                        <Image width={100} height={100} src="/vercel.svg" alt="..." />
                    </div>
                    <div className={aboutStyles.toolBox}>
                        <Image width={100} height={100} src="/thirteen.svg" alt="..." />
                    </div>
                    <div className={aboutStyles.toolBox}>
                        <Image width={100} height={100} src="/next.svg" alt="..." />
                    </div>
                    <div className={aboutStyles.toolBox}>
                        <Image width={100} height={100} src="/bootstrap-original.svg" alt="..." />
                    </div>
                    <div className={aboutStyles.toolBox}>
                        <Image width={100} height={100} src="/css3-original.svg" alt="..." />
                    </div>
                    <div className={aboutStyles.toolBox}>
                        <Image width={100} height={100} src="/html5-original.svg" alt="..." />
                    </div>
                    <div className={aboutStyles.toolBox}>
                        <Image width={100} height={100} src="/docker-original.svg" alt="..." />
                    </div>
                    <div className={aboutStyles.toolBox}>
                        <Image width={100} height={100} src="/git-original.svg" alt="..." />
                    </div>
                    <div className={aboutStyles.toolBox}>
                        <Image width={100} height={100} src="/javascript-original.svg" alt="..." />
                    </div>
                    <div className={aboutStyles.toolBox}>
                        <Image width={100} height={100} src="nextjs-original.svg" alt="..." />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Tools;
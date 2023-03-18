import projectStyles from "../styles/Projects.module.css"
import Image from "next/image";
import {FaEye, FaProjectDiagram } from "react-icons/fa"

const Section2 = () => {
    return (  
        <section id="project" className={projectStyles.section}>
            <div className={projectStyles.container}>
                <div>
                    <div className="flex justify-between mb-4 w-full items-center">
                        <h1>Recent Works</h1>
                        <button className={projectStyles.button}>View more projects</button>
                    </div>
                    <div className={projectStyles.grid}>
                        <div className={projectStyles.card}>
                            <div className={projectStyles.top}>
                                <div className={projectStyles.dot}>
                                    <span>.</span>
                                    <span>.</span>
                                    <span>.</span>
                                </div>
                                <Image width={600} height={600} className={projectStyles.img} src="/Flash.jpeg" alt="..." />
                            </div>
                            <div className={projectStyles.mid}>
                                <h5>Flash A social me...</h5>
                                <div className={projectStyles.stack}>
                                    <Image width={600} height={600} className={projectStyles.icon} src="/nextjs-original.svg" alt="..." />
                                    <Image width={600} height={600} className={projectStyles.icon} src="/mongodb-original.svg" alt="..." />
                                </div>
                            </div>
                            <div className={projectStyles.border}></div>
                            <div className={projectStyles.footer}>
                                <div className="flex items-center cursor-pointer hover:opacity-20 ease-in-out">
                                    <FaProjectDiagram height={20} width={20} />
                                    <span>Details</span>
                                </div>
                                <a href="https://flash9.netlify.app/" className="flex items-center hover:opacity-20">
                                    <FaEye width={20} height={20} />
                                    <span className="ml-1">Live preview</span>
                                </a>
                            </div>
                        </div>
                         <div className={projectStyles.card}>
                            <div className={projectStyles.top}>
                                <div className={projectStyles.dot}>
                                    <span>.</span>
                                    <span>.</span>
                                    <span>.</span>
                                </div>
                                <Image width={600} height={600} className={projectStyles.img} src="/Dashboard.jpeg" alt="..." />
                            </div>
                            <div className={projectStyles.mid}>
                                <h5>Dashboard for a...</h5>
                                <div className={projectStyles.stack}>
                                    <Image width={600} height={600} className={projectStyles.icon} src="/express-original.svg" alt="..." />
                                    <Image width={600} height={600} className={projectStyles.icon} src="/mongodb-original.svg" alt="..." />
                                    <Image width={600} height={600} className={projectStyles.icon} src="/react-original.svg" alt="..." />
                                </div>
                            </div>
                            <div className={projectStyles.border}></div>
                            <div className={projectStyles.footer}>
                                <div className="flex items-center hover:opacity-20 cursor-pointer">
                                   <FaProjectDiagram height={20} width={20} />
                                    <span>Details</span>
                                </div>
                                <a href="https://admindanshboard.netlify.app/" className="flex items-center hover:opacity-20 cursor-pointer">
                                    <FaEye width={20} height={20} />
                                    <span className="ml-1">Live preview</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Section2;
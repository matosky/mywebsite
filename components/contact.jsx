import contactStyles from "../styles/Contact.module.css"
import { useRef } from "react";

const Contact = ({conRef}) => {
    const name = useRef();
    const email = useRef();
    const msg = useRef();

    const handleName = () => {
        name.current.style.top = "0px";
    }
    
     const handleEmail = () => {
        email.current.style.top = "0px";
    }

     const handleMsg = () => {
        msg.current.style.top = "0px";
    }


    return ( 
        <section className={contactStyles.box} ref={conRef}>
            <h1>Simply leave a message</h1>
            <form>
                <div className={contactStyles.div}  onClick={handleName}>
                    <input  type="text" />
                    <span ref={name}>*name</span>
                </div>
                <div className={contactStyles.div} onClick={handleEmail}>
                    <input type="text"/>
                    <span ref={email}>*email</span>
                </div>
                <div className={contactStyles.div} onClick={handleMsg}>
                    <textarea>
                    </textarea>
                    <span ref={msg}>*your message</span>
                </div>
                <button>Send message</button>
            </form>
        </section>
     );
}
 
export default Contact;

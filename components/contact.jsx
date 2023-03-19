import contactStyles from "../styles/Contact.module.css";
import { useRef, useState } from "react";
import axios from "axios";

const Contact = ({ conRef }) => {
  const name = useRef();
  const email = useRef();
  const msg = useRef();

  const handleName = () => {
    name.current.style.top = "0px";
  };

  const handleEmail = () => {
    email.current.style.top = "0px";
  };

  const handleMsg = () => {
    msg.current.style.top = "0px";
  };

  const [name1, setName] = useState("");
  const [email1, setEmail] = useState("");
  const [msg1, setMsg] = useState("");
  const [suc, setSuc] = useState("");
  const [loading, setIsloading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      if (!name1 || !email1 || !msg1) {
        throw new Error("please fill required field");
      }
      setIsloading(true);
      const data = { name: name1, email: email1, msg: msg1 };
      const res = await axios.post("/api/visitor", data);
      const { message } = res.data;
      if (message) {
        setIsloading(false);
        setSuc("message sent successfully");
        setTimeout(() => {
          setSuc("");
        }, 3000);
      }
    } catch (err) {
      setIsloading(false);
      setError(err.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
    setEmail("");
    setName("");
    setMsg("");
  };

  return (
    <section className={contactStyles.box} ref={conRef}>
      <h1>Simply leave a message</h1>
      <form>
          {suc && (
          <div className="my-4  rounded-3xl  w-full h-fit border-green-400 bg-green-400 text-white text-center">
            {suc}
          </div>
        )}
        <div className={contactStyles.div} onClick={handleName}>
          <input
            type="text"
            value={name1}
            onChange={(e) => setName(e.target.value)}
          />
          <span ref={name}>*name</span>
        </div>
        <div className={contactStyles.div} onClick={handleEmail}>
          <input
            type="text"
            value={email1}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span ref={email}>*email</span>
        </div>
        <div className={contactStyles.div} onClick={handleMsg}>
          <textarea value={msg1} onChange={(e) => setMsg(e.target.value)} />
          <span ref={msg}>*your message</span>
        </div>
      
        {error && (
          <div className="my-4  rounded-3xl  w-full h-fit border-red-700 bg-red-700 text-white text-center">
            {error}
          </div>
        )}
        {loading ? (
          <button disabled>Sending...</button>
        ) : (
          <button onClick={handleForm}>Send message</button>
        )}
      </form>
    </section>
  );
};

export default Contact;

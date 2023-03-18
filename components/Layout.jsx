import headerStyles from "../styles/Header.module.css";
import Navbar from "@/components/Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
        <main>{children}</main>
    </>
  );
};

export default Layout;

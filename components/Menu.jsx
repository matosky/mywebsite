import { useState, useContext } from "react";
import menuStyles from "../styles/Menu.module.css";
import { MenuContext } from "@/context/menuContext";

const Hamburger = () => {
    const { menu, setMenu} = useContext(MenuContext)
    
    
    const handleClick = () => {
        setMenu(!menu)
}

  return (
      <div className={menuStyles.box} onClick={handleClick}>
        <span className={menu ? menuStyles.span1 : menuStyles.initial}></span>
        <span className={menu ? menuStyles.span2 :menuStyles.initial}></span>
        <span className={menu ? menuStyles.span3 : menuStyles.initial}></span>
      </div>
  );
};

export default Hamburger;

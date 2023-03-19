import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { MenuContext } from "@/context/menuContext";
import { useRef, useState } from "react";

export default function App({ Component, pageProps }) {

  const [menu, setMenu] = useState(false);


  return (
    <MenuContext.Provider value={{menu, setMenu}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MenuContext.Provider>
  );
}

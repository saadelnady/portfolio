import Header from "../src/components/shared/Header/index.js";
import Aside from "../src/components/shared/aside/Index.js";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);
  const HandleIsDark = () => {
    setIsDark(!isDark);
  };

  if (Component.getLayOut) {
    return Component.getLayOut(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Saad Elnady Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="src/components/shared/assets/images/logo.png" />
      </Head>
      <div className={isDark ? " app bg-dark2" : "app  bg-light"}>
        <Header isDark={isDark} HandleIsDark={HandleIsDark} />

        <div className="container-fluid">
          <div className="row  justify-content-evenly">
            <Aside isDark={isDark} />
            <Component {...pageProps} isDark={isDark} />
          </div>
        </div>
      </div>
    </>
  );
}

// MyApp.getInitialProps = async (props) => {
//   return {
//     props: {},
//   };
// };

export default MyApp;

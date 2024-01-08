import Header from "../components/Header";
import Aside from "../components/Aside";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Home.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);
  const HandleIsDark = () => {
    setIsDark(!isDark);
  };
  return (
    <div className={isDark ? "pb-5 bg-dark2" : "pb-5 bg-light"}>
      <Header isDark={isDark} HandleIsDark={HandleIsDark} />

      <div className="container-fluid">
        <div className="row  justify-content-evenly">
          <Aside isDark={isDark} />
          <Component {...pageProps} isDark={isDark} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;

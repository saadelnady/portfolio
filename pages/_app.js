import Header from "./components/Header";
import Aside from "./components/Aside";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Home.css";
import "../styles/globals.css";
import "../styles/Resume.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);
  const HandleIsDark = () => {
    setIsDark(!isDark);
  };
  const router = useRouter();
  const is404Page = router.asPath === "/404";

  return (
    <div className={isDark ? " app bg-dark2" : "app  bg-light"}>
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

import { cards } from "../../../static/static";
import SpecialHeading from "../shared/SpecialHeading";
import Cards from "./Cards";
import AboutMe from "./AboutMe";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Index = () => {
  let [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedIsDark = JSON.parse(localStorage.getItem("isDark"));
    console.log("storedIsDark", storedIsDark);
    console.log("saad");
    if (storedIsDark) {
      setIsDark(storedIsDark);
    } else {
      setIsDark((prevIsDark) => !prevIsDark);
    }
  }, [isDark]);

  useEffect(() => {
    const storedIsDark = Cookies.get("isDark");
    console.log("storedIsDark", storedIsDark);
    console.log("saad");
    if (storedIsDark !== undefined) {
      setIsDark(JSON.parse(storedIsDark));
    } else {
      setIsDark((prevIsDark) => !prevIsDark);
    }
  }, []);
  return (
    <div
      className={`home col-12 col-lg-7 rounded shadow px-5 py-5  
     ${isDark ? "bg-dark" : "bg-light "}`}
    >
      <SpecialHeading title={"About"} isDark={isDark} />
      <AboutMe isDark={isDark} />
      <Cards cards={cards} isDark={isDark} />
    </div>
  );
};

export default Index;

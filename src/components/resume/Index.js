import SpecialHeading from "../shared/SpecialHeading";
import WhatCanIdo from "./WhatCanIdo";

const Index = ({ isDark }) => {
  return (
    <div
      className={`resume col-12 col-lg-7 rounded shadow px-2 px-md-5 py-5
   ${isDark ? "bg-dark " : " text-dark bg-light"}`}
    >
      <SpecialHeading title={"Resume"} isDark={isDark} />
      <ul>
        <li className="about px-3">
          <div
            className={`p-4 text-white rounded ${
              isDark ? "bg-dark2 text-light" : "bg-white text-dark"
            } `}
          >
            <p className={isDark ? "text-light fs-5" : "text-black fs-5"}>
              Jul 2023 - Oct 2023
            </p>
            <p className="text-orange fs-3">
              Information Technology Institute (ITI)
            </p>
            <i className="text-blue">Full Stack using MERN Track</i>
            <WhatCanIdo isDark={isDark} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Index;

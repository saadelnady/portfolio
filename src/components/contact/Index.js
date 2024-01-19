import React from "react";
import SpecialHeading from "../shared/SpecialHeading.js";
import ContactInfo from "./ContactInfo.js";
import MyForm from "./MyForm.js";

const Index = ({ isDark }) => {
  return (
    <div
      className={`contact col-12 col-lg-7  rounded shadow px-5 py-5 ${
        isDark ? "bg-dark" : "bg-light"
      }`}
    >
      <SpecialHeading title={"Contact"} isDark={isDark} />
      <ContactInfo isDark={isDark} />
      <MyForm isDark={isDark} />
    </div>
  );
};

export default Index;

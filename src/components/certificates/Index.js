import SpecialHeading from "../shared/SpecialHeading";
import Certificates from "./Certificates";

const Index = ({ isDark }) => {
  return (
    <div
      className={
        isDark
          ? "certificates col-12 col-lg-7 bg-dark rounded shadow px-5 py-5"
          : "certificates col-12 col-lg-7 bg-light rounded shadow px-5 py-5"
      }
    >
      <SpecialHeading title={"Certificates"} isDark={isDark} />

      <Certificates isDark={isDark} />
    </div>
  );
};

export default Index;

import SpecialHeading from "../shared/SpecialHeading";
import Slider from "./Slider";

const Index = ({ isDark }) => {
  return (
    <div
      className={`skills col-12 col-lg-7  rounded shadow px-5 py-5 ${
        isDark ? "bg-dark" : "bg-light"
      }`}
    >
      <SpecialHeading title={"Skills"} isDark={isDark} />
      <Slider isDark={isDark} />
    </div>
  );
};

export default Index;

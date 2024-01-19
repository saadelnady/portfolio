import SpecialHeading from "../shared/SpecialHeading";
import Cards from "./Cards";

const Index = ({ isDark, filteredProjects }) => {
  return (
    <div
      className={`projects col-12 col-lg-7 rounded shadow px-5 py-5
   ${isDark ? "bg-dark" : "bg-light"} `}
    >
      <SpecialHeading title={"Projects"} isDark={isDark} />
      <Cards isDark={isDark} filteredProjects={filteredProjects} />
    </div>
  );
};

export default Index;

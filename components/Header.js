import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import NavBar from "./NavBar";

const Header = ({ isDark, HandleIsDark }) => {
  return (
    <>
      <div
        className={
          isDark
            ? "d-flex justify-content-between align-items-center p-4 bg-dark2"
            : "d-flex justify-content-between align-items-center p-4 bg-light"
        }
      >
        <h1 className={isDark ? "text-light " : "text-dark"}>
          Saad <span className="text-orange">Elnady</span>
        </h1>
        <div
          className="p-3 bg-orange rounded-pill cursor-pointer"
          onClick={() => {
            HandleIsDark();
          }}
        >
          {isDark ? (
            <MdOutlineLightMode className="text-light fs-3" />
          ) : (
            <MdOutlineDarkMode className="fs-3" />
          )}
        </div>
      </div>
      <NavBar isDark={isDark} />
    </>
  );
};

export default Header;

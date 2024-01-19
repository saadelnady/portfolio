import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const DarkToggle = ({ isDark, HandleIsDark }) => {
  return (
    <div
      className={`d-flex justify-content-between align-items-center p-4  ${
        isDark ? "bg-dark2" : " bg-light"
      }`}
    >
      <h1 className={`${isDark ? "text-light " : "text-dark"}`}>
        Saad <span className="text-orange">Elnady</span>
      </h1>
      <button
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
      </button>
    </div>
  );
};

export default DarkToggle;

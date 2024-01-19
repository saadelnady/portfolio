import { whatCanIdo } from "../../../static/static";

const WhatCanIdo = ({ isDark }) => {
  return (
    <ul className="mt-3">
      Skills:
      {whatCanIdo.map((skill, index) => {
        return (
          <li
            className={`ps-4 mt-3 my-skills ${
              isDark ? "text-light" : "text-dark"
            }`}
            key={index}
          >
            {skill}
          </li>
        );
      })}
    </ul>
  );
};

export default WhatCanIdo;

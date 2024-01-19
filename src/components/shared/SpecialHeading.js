import React from "react";

const SpecialHeading = ({ title, isDark }) => {
  return (
    <div className="special-heading">
      <h1
        className={
          isDark
            ? "text-light bg-dark d-inline-block p-2"
            : "text-dark bg-light d-inline-block p-2"
        }
      >
        {title}
      </h1>
    </div>
  );
};

export default SpecialHeading;

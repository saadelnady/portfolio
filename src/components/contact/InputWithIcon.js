import React from "react";

const InputWithIcon = React.forwardRef(
  ({ icon, type, placeholder, isDark, ...rest }, ref) => {
    return (
      <div className="mb-3 position-relative">
        {icon}
        <input
          type={type}
          className={`w-100 ps-5 py-3 isDark ${
            isDark ? "bg-dark2 text-light" : "bg-white text-dark"
          }`}
          placeholder={placeholder}
          ref={ref} // مهم للـ react-hook-form
          {...rest}
        />
      </div>
    );
  }
);

InputWithIcon.displayName = "InputWithIcon";

export default InputWithIcon;

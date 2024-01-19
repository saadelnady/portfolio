const InputWithIcon = ({ icon, type, placeholder, isDark }) => {
  return (
    <div className="mb-3 position-relative">
      {icon}
      <input
        type={type}
        className={`w-100 ps-5 py-3 isDark ${
          isDark ? "bg-dark2 text-light" : "bg-white text-dark"
        }`}
        placeholder={placeholder}
      />
    </div>
  );
};
export default InputWithIcon;

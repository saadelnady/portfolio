const Skills = ({ isDark }) => {
  return (
    <div
      className={
        isDark
          ? "about col-12 col-lg-7 bg-dark rounded shadow px-5 py-5"
          : "about col-12 col-lg-7 bg-light rounded shadow px-5 py-5"
      }
    >
      <div className="special-heading">
        <h1
          className={
            isDark
              ? "text-light bg-dark d-inline-block p-2"
              : "text-dark bg-light d-inline-block p-2"
          }
        >
          Skills
        </h1>
      </div>
    </div>
  );
};

export default Skills;

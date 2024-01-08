const Projects = ({ isDark }) => {
  return (
    <div
      className={
        isDark
          ? "projects  col-12 col-lg-7 bg-dark rounded shadow px-5 py-5"
          : "projects  col-12 col-lg-7 bg-light rounded shadow px-5 py-5"
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
          Projects
        </h1>
      </div>
    </div>
  );
};

export default Projects;

import Image from "next/image";
import Link from "next/link";

const Projects = ({ isDark, projects }) => {
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
      <h3 className="text-orange">Things I have built so far</h3>
      <div className="cards row justify-content-between">
        {projects
          .filter((project) => project.homepage) // Filter out projects without a homepage
          .map((project, index) => (
            <div className="card col-5 mb-3  " key={index}>
              <a href={project.homepage} target="_blank">
                <div
                  className={
                    isDark
                      ? "bg-dark2 text-light rounded py-2 px-5 "
                      : "bg-white text-dark rounded py-2 px-5 "
                  }
                >
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>{" "}
                  <a
                    href={project.html_url}
                    target="_blank"
                    className="btn btn-danger"
                  >
                    Github
                  </a>
                </div>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;

export async function getStaticProps() {
  const response = await fetch("https://api.github.com/users/saadelnady/repos");
  const projects = await response.json();
  console.log(projects);
  return {
    props: { projects },
  };
}

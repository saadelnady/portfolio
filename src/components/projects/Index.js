import Image from "next/image";
import Link from "next/link";

const Index = ({ isDark, filteredProjects }) => {
  return (
    <div
      className={`projects col-12 col-lg-7 rounded shadow px-5 py-5
   ${isDark ? "bg-dark" : "bg-light"} `}
    >
      <div className="special-heading">
        <h1
          className={`text-dark d-inline-block p-2 ${
            isDark ? "bg-dark" : "bg-light"
          }`}
        >
          Projects
        </h1>
      </div>
      <h3 className="text-orange mb-4">Things I have built so far</h3>
      <div className="cards row justify-content-between overflow-hidden">
        {filteredProjects.map((project, index) => (
          <div
            className={` card col-12 col-xxl-5 mb-3  position-relative overflow-hidden
           isDark ?  "bg-dark" : "bg-white"`}
            key={index}
          >
            <a href={project.homepage} target="_blank">
              <div className="bg-dark2 text-light rounded ">
                <Image
                  src={`https://raw.githubusercontent.com/saadelnady/${project.name}/main/${project.name}.png`}
                  alt="Description of the image"
                  className=" rounded"
                  width={720}
                  height={350}
                />

                <div className="d-flex justify-content-between align-items-center py-2 px-4 rounded position-absolute details bg-dark w-100">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <Link href={project.html_url}>
                    <a target="_blank" className="btn btn-danger">
                      Github
                    </a>
                  </Link>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;

import { certificates } from "static/static";
import Image from "next/image";

const Certificates = ({ isDark }) => {
  return (
    <>
      <p className="fs-3 text-orange">Certificates & Courses</p>{" "}
      <div className="cards row justify-content-between">
        {certificates.map((certificate, index) => {
          return (
            <div
              key={index}
              className={`card col-12 col-xxl-5 mb-3 position-relative overflow-hidden ${
                isDark ? "bg-dark" : "bg-light"
              }`}
            >
              <Image
                src={certificate.imgUrl}
                alt="card-img"
                className="rounded w-100"
                width={250}
                height={250}
              />
              <div
                className={` w-100 text-center details ${
                  isDark ? " bg-dark text-light" : "bg-light text-dark"
                }`}
              >
                {certificate.desc}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Certificates;

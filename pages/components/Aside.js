import Image from "next/image";
import myImage from "../../public/assets/myImage.jpg";
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Aside = ({ isDark }) => {
  return (
    <div
      className={`col-12 col-lg-4 text-center rounded aside p-5 shadow ${
        isDark ? "bg-dark" : "bg-light"
      }`}
    >
      <div className="myImg mx-auto">
        <Image src={myImage} alt="myImg" className="w-100 h-100 rounded" />
      </div>
      <div className={`description ${isDark ? "text-light" : "text-dark"}`}>
        <h1>Saad Elnady</h1>
        <p>Full-Stack Developer using MERN</p>
      </div>
      <div className="social-icons mt-2">
        <a
          href="https://github.com/saadelnady"
          target="_blank"
          className={`d-inline-block fs-1  py-2 px-4 me-3 rounded ${
            isDark ? "text-light bg-dark2" : "text-dark bg-white"
          } `}
        >
          <RxGithubLogo />
        </a>

        <a
          href="https://www.linkedin.com/in/saad-elnady/"
          target="_blank"
          className={`d-inline-block fs-1  py-2 px-4 rounded ${
            isDark ? "text-light bg-dark2" : "text-dark bg-white"
          }`}
        >
          <FaLinkedin />
        </a>
      </div>
      <div
        className={`text-start mt-4 rounded p-3  ${
          isDark ? "bg-dark2" : "bg-white"
        } `}
      >
        <ul className="details">
          <li className="border-bottom mt-3 p-3  d-flex align-items-center">
            <FaMobileAlt className="fs-1 me-3 text-orange" />
            <div>
              <p className="text-orange">Phone</p>
              <a
                href="https://wa.me/+201068230480"
                target="_blank"
                className={isDark ? "text-light" : "text-dark"}
              >
                01068230480
              </a>
            </div>
          </li>
          <li className="border-bottom mt-3 p-3  d-flex align-items-center ">
            <FaRegEnvelope className="fs-1 me-3 text-orange" />
            <div>
              <p className="text-orange text-start">Email</p>
              <a
                href="mailto:saad.elnady.work@gmail.com"
                target="_blank"
                className={isDark ? "text-light" : "text-dark"}
              >
                saad.elnady.work@gmail.com
              </a>
            </div>
          </li>
          <li className="border-bottom mt-3 p-3  d-flex align-items-center">
            <IoLocationSharp className="fs-1 me-3 text-orange" />
            <div>
              <p className="text-orange text-start">Location</p>
              <p className={isDark ? "text-light" : "text-dark"}>
                Mansoura, Egypt
              </p>
            </div>
          </li>
          <li className="text-center">
            <a
              href="https://drive.google.com/file/d/13aeNFSXdJZBRow4FN0BXSx7PUuQ6UbBy/view"
              target="_blank"
              className="text-orange mt-4 px-2 resume-btn d-inline-block"
            >
              <p> Download Resume</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;

import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { IoIosFlash } from "react-icons/io";
import { RiAppsLine } from "react-icons/ri";
import { PiCertificate } from "react-icons/pi";
import { TiContacts } from "react-icons/ti";
import { useState } from "react";

const NavBar = ({ isDark }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActiveClass = () => {
    setIsActive(!true);
  };
  return (
    <div className="my-nav container-fluid d-flex justify-content-evenly justify-content-lg-end mt-lg-2 ">
      <nav className="row">
        <ul
          className={
            isDark
              ? "d-flex shadow bg-dark p-lg-3 flex-wrap justify-content-center rounded col-12"
              : "d-flex shadow bg-light p-lg-3 flex-wrap justify-content-center rounded col-12"
          }
        >
          <li className="p-1 p-lg-2">
            <Link
              href="/"
              onClick={() => {
                handleActiveClass();
              }}
            >
              <a
                className={
                  isDark
                    ? isActive
                      ? "d-flex flex-column justify-content-center align-items-center bg-orange text-light px-3 py-2 rounded"
                      : "d-flex flex-column justify-content-center align-items-center  bg-dark2 text-light px-3 py-2  rounded"
                    : isActive
                    ? "d-flex flex-column justify-content-center align-items-center bg-orange  text-light px-3 py-2 rounded"
                    : "d-flex flex-column justify-content-center align-items-center bg-light  text-dark px-3 py-2 rounded"
                }
              >
                <IoMdHome className="fs-3" />
                Home
              </a>
            </Link>
          </li>
          <li className="p-1 p-lg-2">
            <Link href="/resume">
              <a
                className={
                  isDark
                    ? "d-flex flex-column justify-content-center align-items-center bg-dark2 text-light px-3 py-2 rounded"
                    : "d-flex flex-column justify-content-center align-items-center bg-light text-dark px-3 py-2 rounded"
                }
              >
                <GrNotes className="fs-3" />
                Resume
              </a>
            </Link>
          </li>
          <li className="p-1 p-lg-2">
            <Link href="/skills">
              <a
                className={
                  isDark
                    ? "d-flex flex-column justify-content-center align-items-center bg-dark2 text-light px-3 py-2 rounded"
                    : "d-flex flex-column justify-content-center align-items-center bg-light text-dark px-3 py-2 rounded"
                }
              >
                <IoIosFlash className="fs-3" />
                Skills
              </a>
            </Link>
          </li>
          <li className="p-1 p-lg-2">
            <Link href="/projects">
              <a
                className={
                  isDark
                    ? "d-flex flex-column justify-content-center align-items-center bg-dark2 text-light px-3 py-2 rounded"
                    : "d-flex flex-column justify-content-center align-items-center bg-light text-dark px-3 py-2  rounded"
                }
              >
                <RiAppsLine className="fs-3" />
                Projects
              </a>
            </Link>
          </li>
          <li className="p-1 p-lg-2">
            <Link href="/certificates">
              <a
                className={
                  isDark
                    ? "d-flex flex-column justify-content-center align-items-center bg-dark2 text-light px-3 py-2 rounded"
                    : "d-flex flex-column justify-content-center align-items-center bg-light text-dark px-3 py-2 rounded"
                }
              >
                <PiCertificate className="fs-3" />
                Certificates
              </a>
            </Link>
          </li>
          <li className="p-1 p-lg-2">
            <Link href="/contact">
              <a
                className={
                  isDark
                    ? "d-flex flex-column justify-content-center align-items-center bg-dark2 text-light px-3 py-2  rounded"
                    : "d-flex flex-column justify-content-center align-items-center bg-light text-dark px-3 py-2  rounded"
                }
              >
                <TiContacts className="fs-3" />
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

export async function getStaticProps() {
  const links = [
    { linkTo: "/", icon: "IoMdHome", title: "Home" },
    { linkTo: "/resume", icon: "GrNotes", title: "Resume" },
    { linkTo: "/skills", icon: "IoIosFlash", title: "Skills" },
    { linkTo: "/projects", icon: "RiAppsLine", title: "Projects" },
    { linkTo: "/certificates", icon: "PiCertificate", title: "Certificates" },
    { linkTo: "/contact", icon: "TiContacts", title: "Contact" },
  ];

  return {
    props: {
      links,
    },
  };
}

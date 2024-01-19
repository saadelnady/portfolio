import Link from "next/link";
import { navLinks } from "../../../../static/static";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NavBar = ({ isDark }) => {
  const [activeTab, setActiveTab] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Set initial active state when the component mounts
    if (router.route === "/") {
      setActiveTab("/");
    }
  }, [router.route]);
  const handleActiveClass = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="my-nav container-fluid d-flex justify-content-lg-end mt-lg-2">
      <nav className="row col-12 col-xxl-6 col-lg-8">
        <ul
          className={`d-flex shadow ${
            isDark ? "bg-dark" : "bg-light"
          } p-lg-3 flex-wrap justify-content-center rounded col-12`}
        >
          {navLinks.map(({ href, label, icon }) => (
            <li key={href} className="p-1 p-lg-2">
              <Link href={href}>
                <a
                  onClick={() => handleActiveClass(href)}
                  className={`d-flex flex-column justify-content-center align-items-center ${
                    isDark
                      ? activeTab === href
                        ? "bg-orange text-light"
                        : "bg-dark2 text-light"
                      : activeTab === href
                      ? "bg-orange text-light"
                      : "bg-white text-dark"
                  } px-3 py-2 rounded`}
                >
                  {icon}
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

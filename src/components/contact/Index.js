import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

const Index = ({ isDark }) => {
  return (
    <div
      className={`contact col-12 col-lg-7  rounded shadow px-5 py-5 ${
        isDark ? "bg-dark" : " bg-light"
      }`}
    >
      <div className="special-heading">
        <h1
          className={
            isDark
              ? "text-light bg-dark d-inline-block p-2"
              : "text-dark bg-light d-inline-block p-2"
          }
        >
          Contact
        </h1>
      </div>
      <p className="text-orange fs-3">Let &apos;s Talk</p>
      <div className="row aign-items-center mt-3">
        <div
          className={` border-start-orange col-12 col-md-6  p-3 mb-3
      ${isDark ? "bg-dark2" : "bg-white"}`}
        >
          <FaPhone className="text-orange fs-3" />
          <a
            href="https://wa.me/+201068230480"
            target="_blank"
            className={
              isDark
                ? " col-12 col-md-6 text-light bg-dark2 p-3  "
                : " col-12 col-md-6 text-dark bg-white p-3  "
            }
          >
            01068230480
          </a>
        </div>
        <div
          className={` border-start-orange col-12 col-md-6  p-3 mb-3
        ${isDark ? "bg-dark2" : "bg-white"}`}
        >
          <FaRegEnvelope className="text-orange fs-3" />
          <a
            href="mailto:saad.elnady.work@gmail.com"
            target="_blank"
            className={isDark ? "ms-3 text-light" : "ms-3 text-dark"}
          >
            saad.elnady.work@gmail.com
          </a>
        </div>
        <div
          className={` border-start-orange col-12 col-md-6  p-3 mb-3
      ${isDark ? "bg-dark2" : "bg-white"}`}
        >
          <FaRegEnvelope className="text-orange fs-3" />
          <a
            href="https://github.com/saadelnady"
            target="_blank"
            className={isDark ? "ms-3 text-light" : "ms-3 text-dark"}
          >
            Github
          </a>
        </div>
        <div
          className={` border-start-orange col-12 col-md-6  p-3 mb-3
     ${isDark ? "bg-dark2" : "bg-white"}`}
        >
          <FaRegEnvelope className="text-orange fs-3" />
          <a
            href="https://www.linkedin.com/in/saad-elnady/"
            target="_blank"
            className={isDark ? "ms-3 text-light" : "ms-3 text-dark"}
          >
            Linkedin
          </a>
        </div>
      </div>
      <form>
        <p className="text-orange fs-3">Send me a message</p>
        <div className="mb-3 mt-3 position-relative">
          <FaRegUser className="position-absolute top-50 start-0 translate-middle-y fs-3 text-orange" />
          <input
            type="text"
            className={`w-100 ps-5 py-3 isDark ${
              isDark ? "bg-dark2 text-light" : " bg-white text-dark"
            } `}
            placeholder="Your name"
          />
        </div>
        <div className="mb-3 position-relative">
          <FaRegEnvelope className="position-absolute top-50 start-0 translate-middle-y fs-3 text-orange" />
          <input
            type="text"
            className={`w-100 ps-5 py-3 isDark ${
              isDark ? "bg-dark2 text-light" : " bg-white text-dark"
            } `}
            placeholder="Your email"
          />
        </div>
        <div className=" mb-3 position-relative">
          <FaRegMessage className="position-absolute top-50 start-0 translate-middle-y fs-3 text-orange" />
          <textarea
            type="text"
            className={`w-100 ps-5 py-3 isDark ${
              isDark ? "bg-dark2 text-light" : " bg-white text-dark"
            } `}
            placeholder="How can i help you ?"
          />
        </div>

        <button
          className="bg-danger rounded py-3 px-4 text-light d-block ms-auto"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Index;
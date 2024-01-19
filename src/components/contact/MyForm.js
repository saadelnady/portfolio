import { FaRegUser, FaRegEnvelope } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

import InputWithIcon from "./InputWithIcon";

const MyForm = ({ isDark }) => {
  return (
    <>
      <form>
        <p className="text-orange fs-3">Send me a message</p>

        <InputWithIcon
          icon={
            <FaRegUser className="position-absolute top-50 start-0 translate-middle-y fs-3 text-orange" />
          }
          type="text"
          placeholder="Your name"
          isDark={isDark}
        />

        <InputWithIcon
          icon={
            <FaRegEnvelope className="position-absolute top-50 start-0 translate-middle-y fs-3 text-orange" />
          }
          type="text"
          placeholder="Your email"
          isDark={isDark}
        />

        <div className=" mb-3 position-relative">
          <FaRegMessage className="position-absolute top-50 start-0 translate-middle-y fs-3 text-orange" />
          <textarea
            type="text"
            className={`w-100 ps-5 py-3 isDark ${
              isDark ? "bg-dark2 text-light" : "bg-white text-dark"
            }`}
            placeholder="How can I help you?"
          />
        </div>

        <button
          className="bg-danger rounded py-3 px-4 text-light d-block ms-auto"
          type="submit"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default MyForm;

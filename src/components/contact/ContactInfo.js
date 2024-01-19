import { contacts } from "../../../static/static";

const ContactInfo = ({ isDark }) => {
  return (
    <>
      <p className="text-orange fs-3">Let &apos;s Talk</p>
      <div className="row aign-items-center mt-3">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className={`border-start-orange col-12 col-md-6 p-3 mb-3 ${
              isDark ? "bg-dark2" : "bg-white"
            }`}
          >
            {contact.icon}
            <a
              href={contact.link}
              target="_blank"
              className={isDark ? "ms-3 text-light" : "ms-3 text-dark"}
            >
              {contact.text}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactInfo;

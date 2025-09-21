import React from "react";

const AboutMe = ({ isDark }) => {
  return (
    <div>
      <h3 className="text-orange">Welcome to my portfolio!</h3>
      <p className={isDark ? "text-light fs-4" : "text-dark fs-4"}>
        I’m Saad Elnady, a motivated Full-Stack MERN Developer with a strong
        passion for continuous learning and a solid foundation in full-stack
        technologies. I’m seeking an opportunity to collaborate with experienced
        professionals, enhance my skills, and contribute to building intuitive,
        engaging, and high-quality user experiences.
      </p>
      <div className={isDark ? "text-light mt-3 fs-4" : "text-dark mt-3 fs-4"}>
        My qualifications include:
        <p className="ms-5 mt-2 fs-3">Frontend Developer at TJAARA</p>
        <p className="ms-5 mt-2 fs-3">MEARN Track Graduate at ITI</p>
      </div>

      <h3 className="text-orange mt-4">What I do !</h3>
    </div>
  );
};

export default AboutMe;

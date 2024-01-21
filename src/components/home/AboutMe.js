import React from "react";

const AboutMe = ({ isDark }) => {
  return (
    <div>
      <h3 className="text-orange">Welcome to my portfolio!</h3>
      <p className={isDark ? "text-light fs-4" : "text-dark fs-4"}>
        I &apos;m Saad Elnady, a motivated junior Full-Stack MERN developer with
        a passion for learning and a solid understanding of Full-Stack
        technologies. I &apos;m seeking an opportunity to work alongside
        experienced professionals where I can further enhance my skills and
        contribute to the creation of intuitive and engaging user interfaces.
      </p>
      <div className={isDark ? "text-light mt-3 fs-4" : "text-dark mt-3 fs-4"}>
        My qualifications include:
        <p className="ms-5 mt-2 fs-3">MEARN Track Graduate at ITI</p>
      </div>
      <h3 className="text-orange mt-4">What i do !</h3>
    </div>
  );
};

export default AboutMe;

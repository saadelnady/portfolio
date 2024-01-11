import React from "react";

import webDevelopment from "../public/assets/home/app-development.png";
import crossPlatform from "../public/assets/home/cross-platform.png";
import maintenance from "../public/assets/home/maintenance.png";
import optimization from "../public/assets/home/optimization.png";
import performance from "../public/assets/home/performance.png";
import responsiveDesign from "../public/assets/home/responsive-design.png";

import Image from "next/image";

const Home = ({ isDark, cards }) => {
  return (
    <div
      className={`home col-12 col-lg-7 rounded shadow px-5 py-5  
         ${isDark ? "bg-dark" : "bg-light "}`}
    >
      <div className="special-heading">
        <h1
          className={`d-inline-block p-2
                 ${isDark ? "text-light bg-dark" : "text-dark bg-light"}`}
        >
          About
        </h1>
      </div>
      <h3 className="text-orange">Welcome to my portfolio!</h3>
      <p className={isDark ? "text-light fs-4" : "text-dark fs-4"}>
        I &apos;m Saad Elnady, a motivated junior Full-Stack MERN developer with
        a passion for learning and a solid understanding of Full-Stack
        technologies. I &apos;m seeking an opportunity to work alongside
        experienced professionals where I can further enhance my skills and
        contribute to the creation of intuitive and engaging user interfaces.
      </p>
      <ul className={isDark ? "text-light mt-3 fs-4" : "text-dark mt-3 fs-4"}>
        My qualifications include:
        <li className="ms-5 mt-2 fs-3">MEARN Track Graduate at ITI</li>
      </ul>
      <h3 className="text-orange mt-4">What i do !</h3>
      <div className="cards row flex-wrap justify-content-between">
        {cards.map((card, index) => {
          return (
            <div
              className={`${
                isDark ? "bg-dark2" : " bg-white"
              } card col-12 col-lg-5 text-center mb-4 text-light p-4`}
              key={index}
            >
              <Image
                src={card.imgUrl}
                alt="card-Image"
                className="object-fit-cover w-50"
                width={700}
                height={600}
              />
              <h3 className={isDark ? "text-orange" : "text-blue"}>
                {card.title}
              </h3>
              <p className={isDark ? "text-blue mb-3" : "text-dark mb-3"}>
                {card.subTitle}
              </p>
              <p>{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const cards = [
    {
      imgUrl: webDevelopment,
      title: "Website Development",
      subTitle: "Turning Ideas into Interactive Apps",
      description:
        "I specialize in developing dynamic web applications, transforming concepts into functional, feature-rich platforms that solve problems and engage users",
    },
    {
      imgUrl: crossPlatform,
      title: "Responsive Design",
      subTitle: "Seamless Across All Devices ",
      description:
        "I ensure that websites and applications I create are responsive, providing a consistent and visually appealing experience on desktops, tablets, and mobile devices.",
    },

    {
      imgUrl: maintenance,
      title: " Frontend Optimization",
      subTitle: "Speed and Performance Enhancement",
      description:
        "I focus on optimizing the frontend code and assets to deliver fast-loading web pages, improving user satisfaction and SEO rankings.",
    },

    {
      imgUrl: optimization,
      title: "Cross-Browser Compatibility",
      subTitle: "Consistency on Every Browser",
      description:
        "I ensure that websites and web applications function seamlessly on various web browsers, providing a consistent experience to all users.",
    },

    {
      imgUrl: performance,
      title: "Code Maintenance",
      subTitle: "Keeping Your Codebase Healthy",
      description:
        "I provide ongoing support and maintenance to keep your frontend codebase up-to-date, secure, and free from technical issues.",
    },

    {
      imgUrl: responsiveDesign,
      title: "Performance Analysis",
      subTitle: "Data-Driven Improvements",
      description:
        "I analyze performance metrics to identify areas for improvement and implement data-driven enhancements that boost user satisfaction and conversion rates.",
    },
  ];
  return {
    props: { cards },
  };
};

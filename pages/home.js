import React from "react";
import webDevlop from "../assets/app-development.png";
import crossPlatform from "../assets/cross-platform.png";
import maintenance from "../assets/maintenance.png";
import optimization from "../assets/optimization.png";
import performance from "../assets/performance.png";
import responsiveDesign from "../assets/responsive-design.png";
import Image from "next/image";

const Home = ({ isDark, cards }) => {
  console.log("cards", cards);
  return (
    <div
      className={
        isDark
          ? "about col-12 col-lg-7 bg-dark rounded shadow px-5 py-5 overflow-hidden"
          : "about col-12 col-lg-7 bg-light rounded shadow px-5 py-5 overflow-hidden"
      }
    >
      <div className="special-heading">
        <h1
          className={
            isDark
              ? "text-light bg-dark d-inline-block p-2"
              : "text-dark bg-light d-inline-block p-2"
          }
        >
          About
        </h1>
      </div>
      <h3 className="text-orange">Welcome to my portfolio!</h3>
      <p className={isDark ? "text-light fs-4" : "text-dark fs-4"}>
        I'm Saad Elnady, a motivated junior Full-Stack MERN developer with a
        passion for learning and a solid understanding of Full-Stack
        technologies. I'm seeking an opportunity to work alongside experienced
        professionals where I can further enhance my skills and contribute to
        the creation of intuitive and engaging user interfaces.
      </p>
      <ul className={isDark ? "text-light mt-3 fs-4" : "text-dark mt-3 fs-4"}>
        My qualifications include:
        <li className="ms-5 mt-2 fs-3">MEARN Track Graduate at ITI</li>
      </ul>
      <h3 className="text-orange mt-4">What i do !</h3>
      <div className="cards row flex-wrap justify-content-between">
        {cards.map((card, index) => {
          return (
            <div className="card col-5 text-center" key={index}>
              <Image
                src={card.imgUrl}
                alt="card-Image"
                width={300}
                height={200}
              />
              <h3>{card.title}</h3>
              <p>{card.subTitle}</p>
              <p>{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const cards = [
    {
      imgUrl: webDevlop,
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
}

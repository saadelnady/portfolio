import HtmlImg from "../public/assets/skills/html.png";
import CssImg from "../public/assets/skills/css.png";
import JSImg from "../public/assets/skills/js.png";
import ReactImg from "../public/assets/skills/react.png";
import ReduxImg from "../public/assets/skills/redux.png";
import bootstrapImg from "../public/assets/skills/bootstrap.png";
import FigmaImg from "../public/assets/skills/figma.png";
import GitImg from "../public/assets/skills/git.png";
import GitHubImg from "../public/assets/skills/github.png";
import MongoDbImg from "../public/assets/skills/Mongodb.png";
import NodeImg from "../public/assets/skills/node.png";
import SassImg from "../public/assets/skills/sass.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import VscodeImg from "../public/assets/skills/Vscode.png";

import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import Image from "next/image";
import Head from "next/head";
const Skills = ({ isDark, mySkills }) => {
  return (
    <>
      <Head>
        <title>Saad Elnady skills</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div
        className={`skills col-12 col-lg-7  rounded shadow px-5 py-5 ${
          isDark ? "bg-dark" : "bg-light"
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
            Skills
          </h1>
        </div>
        <p className="text-orange fs-3">
          Technologies I have been working with recently
        </p>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={50}
          slidesPerView={2.6}
          className="mt-5"
        >
          <div className="skills position-relative">
            <div className="cards d-flex p-3 ">
              {mySkills.map((skill, index) => {
                return (
                  <SwiperSlide
                    className={`  card col-3  me-5 card cursor-pointer
                      isDark   ? "bg-dark2": "bg-white"`}
                    key={index}
                  >
                    <Image
                      src={skill.imgUrl}
                      alt="skill-img"
                      className="w-100 h-100"
                      width={700}
                      height={700}
                    />
                    <div
                      className={`w-100 text-center details ${
                        isDark ? "bg-dark text-light" : "bg-light text-dark"
                      } `}
                    >
                      {skill.title}
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Skills;

export const getStaticProps = async () => {
  const mySkills = [
    { imgUrl: HtmlImg, title: "Html5" },
    { imgUrl: CssImg, title: "Css3" },
    { imgUrl: JSImg, title: "Js" },
    { imgUrl: ReactImg, title: "React" },
    { imgUrl: ReduxImg, title: "Redux" },
    { imgUrl: bootstrapImg, title: "Bootstrap" },
    { imgUrl: FigmaImg, title: "Figma" },
    { imgUrl: GitImg, title: "Git" },
    { imgUrl: GitHubImg, title: "Git hub" },
    { imgUrl: MongoDbImg, title: "MongoDb" },
    { imgUrl: NodeImg, title: "NodeJs" },
    { imgUrl: SassImg, title: "Sass" },
    { imgUrl: Tailwind, title: "Tailwind" },
    { imgUrl: VscodeImg, title: "Vscode" },
  ];

  return {
    props: { mySkills },
  };
};

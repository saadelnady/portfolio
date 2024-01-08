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
import ExpressImg from "../public/assets/skills/express.png";

import Image from "next/image";
const Skills = ({ isDark, mySkills }) => {
  return (
    <div
      className={
        isDark
          ? "skills col-12 col-lg-7 bg-dark rounded shadow px-5 py-5"
          : "skills col-12 col-lg-7 bg-light rounded shadow px-5 py-5"
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
          Skills
        </h1>
      </div>
      <p className="text-orange fs-3">
        Technologies I have been working with recently
      </p>

      <div className="carousel overflow-x-auto mt-5">
        <div className="inner-carousel skills">
          <div className="cards d-flex p-3 ">
            {mySkills.map((skill, index) => {
              return (
                <div
                  className={
                    isDark
                      ? "card col-3 bg-dark2 me-5  position-relative"
                      : "card col-3 bg-white me-5  position-relative"
                  }
                  key={index}
                >
                  <Image
                    src={skill.imgUrl}
                    alt="skill-img"
                    className="w-100 h-100"
                  />
                  <div
                    className={
                      isDark
                        ? "position-absolute w-100 text-center fs-3 bg-dark text-light h-25"
                        : "position-absolute w-100 text-center fs-3 bg-light text-dark h-25"
                    }
                  >
                    {skill.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
export async function getStaticProps() {
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
    { imgUrl: NodeImg, title: "Node" },
    { imgUrl: ExpressImg, title: "Express" },
    { imgUrl: SassImg, title: "Sass" },
    { imgUrl: Tailwind, title: "Tailwind" },
    { imgUrl: VscodeImg, title: "Vscode" },
  ];

  return {
    props: { mySkills },
  };
}

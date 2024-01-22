// Home components data

import webDevelopment from "@/homeImages/app-development.png";
import crossPlatform from "@/homeImages/cross-platform.png";
import maintenance from "@/homeImages/maintenance.png";
import optimization from "@/homeImages/optimization.png";
import performance from "@/homeImages/performance.png";
import responsiveDesign from "@/homeImages/responsive-design.png";

export const cards = [
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

// resume data

export const whatCanIdo = [
  `HTML/CSS: Proficiency in creating semantic HTML markup. Advanced
CSS skills, including CSS Grid, Flexbox, and CSS pre-processors
like Sass.`,
  `JavaScript: Strong understanding of core JavaScript concepts.
Familiarity with modern JavaScript features (ES6+).`,
  `Frontend Frameworks: Experience with popular frontend frameworks
like Angular, React. Understanding of component-based
architecture.`,
  `  Responsive Design and CSS Frameworks: Knowledge of responsive
design principles. Experience with CSS frameworks like
Bootstrap.`,
  ` Version Control: Proficiency in using Git for version control,
including branching and merging.`,
  ` Debugging Tools: Familiarity with browser developer tools for
debugging and profiling frontend code.`,
  ` Collaboration and Communication: Ability to collaborate
effectively within a team environment. Strong communication
skills, both written and verbal.`,
  ` Problem Solving: Analytical and problem-solving skills to
identify and fix frontend issues efficiently.`,
  `UI/UX Design Awareness: Basic understanding of UI/UX design
principles for effective collaboration with designers.
`,
  `Continuous Learning: Willingness to learn and adapt to new
frontend technologies and best practices.`,
];

// skills data

import HtmlImg from "@/skillsImages/html.png";
import CssImg from "@/skillsImages/css.png";
import JSImg from "@/skillsImages/js.png";
import ReactImg from "@/skillsImages/react.png";
import ReduxImg from "@/skillsImages/redux.png";
import bootstrapImg from "@/skillsImages/bootstrap.png";
import FigmaImg from "@/skillsImages/figma.png";
import GitImg from "@/skillsImages/git.png";
import GitHubImg from "@/skillsImages/github.png";
import MongoImg from "@/skillsImages/mongodb.png";
import NodeImg from "@/skillsImages/node.png";
import SassImg from "@/skillsImages/sass.png";
import Tailwind from "@/skillsImages/tailwind.png";
import VscodeImg from "@/skillsImages/vscode.png";

export const skills = [
  { imgUrl: HtmlImg, title: "Html5" },
  { imgUrl: CssImg, title: "Css3" },
  { imgUrl: JSImg, title: "Js" },
  { imgUrl: ReactImg, title: "React" },
  { imgUrl: ReduxImg, title: "Redux" },
  { imgUrl: bootstrapImg, title: "Bootstrap" },
  { imgUrl: FigmaImg, title: "Figma" },
  { imgUrl: GitImg, title: "Git" },
  { imgUrl: GitHubImg, title: "Git hub" },
  { imgUrl: MongoImg, title: "MongoDb" },
  { imgUrl: NodeImg, title: "NodeJs" },
  { imgUrl: SassImg, title: "Sass" },
  { imgUrl: Tailwind, title: "Tailwind" },
  { imgUrl: VscodeImg, title: "Vscode" },
];
// certificates

import BussinessCertificteImg from "@/certificatesImages/Bussiness.jpg";
import EnglishCertificteImg from "@/certificatesImages/English.jpg";
import HRCertificteImg from "@/certificatesImages/HR.jpg";
import IC3CertificteImg from "@/certificatesImages/IC3.jpg";
import MongoDbCertificteImg from "@/certificatesImages/MongoDb.png";
import NodejsCertificteImg from "@/certificatesImages/Nodejs.png";
import ReactCertificatesImg from "@/certificatesImages/React.jpg";

export const certificates = [
  { imgUrl: MongoDbCertificteImg, desc: "MongoDb Certificate" },
  { imgUrl: NodejsCertificteImg, desc: "Nodejs Certificate" },
  { imgUrl: ReactCertificatesImg, desc: "React Certificate" },
  { imgUrl: BussinessCertificteImg, desc: "business Certificate" },
  { imgUrl: EnglishCertificteImg, desc: "English Certificate" },
  { imgUrl: HRCertificteImg, desc: "HR Certificate" },
  { imgUrl: IC3CertificteImg, desc: "IC3 Certificate" },
];
// navbar

import { IoMdHome } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { IoIosFlash } from "react-icons/io";
import { RiAppsLine } from "react-icons/ri";
import { PiCertificate } from "react-icons/pi";
import { TiContacts } from "react-icons/ti";

export const navLinks = [
  { href: "/", label: "Home", icon: <IoMdHome className="fs-3" /> },
  { href: "/resume", label: "Resume", icon: <GrNotes className="fs-3" /> },
  { href: "/skills", label: "Skills", icon: <IoIosFlash className="fs-3" /> },
  {
    href: "/projects",
    label: "Projects",
    icon: <RiAppsLine className="fs-3" />,
  },
  {
    href: "/certificates",
    label: "Certificates",
    icon: <PiCertificate className="fs-3" />,
  },
  { href: "/contact", label: "Contact", icon: <TiContacts className="fs-3" /> },
];

import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const contacts = [
  {
    icon: <FaPhone className="text-orange fs-3" />,
    link: "https://wa.me/+201068230480",
    text: "01068230480",
  },
  {
    icon: <FaRegEnvelope className="text-orange fs-3" />,
    link: "mailto:saad.elnady.work@gmail.com",
    text: " saad.elnady.work@gmail.com",
  },
  {
    icon: <FaGithub className="text-orange fs-3" />,
    link: "https://github.com/saadelnady",
    text: "Github",
  },
  {
    icon: <FaLinkedin className="text-orange fs-3" />,
    link: "https://www.linkedin.com/in/saad-elnady/",
    text: "Linkedin",
  },
];

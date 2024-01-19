import { cards } from "../../../static/static";
import Cards from "./Cards";

const Index = ({ isDark, pageProps }) => {
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
      <Cards cards={cards} />
    </div>
  );
};

export default Index;

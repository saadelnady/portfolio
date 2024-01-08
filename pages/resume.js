const Resume = ({ isDark, mySkills }) => {
  return (
    <div
      className={
        isDark
          ? "resume col-12 col-lg-7 bg-dark rounded shadow px-5 py-5"
          : "resume col-12 col-lg-7 bg-light rounded shadow px-5 py-5"
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
          Resume
        </h1>
      </div>
      <ul>
        <li className="about px-3">
          <div
            className={
              isDark
                ? "bg-dark2 p-4 text-white ep-2 text-light rounded"
                : "bg-white p-4 text-dark ep-2 text-light rounded"
            }
          >
            <p className={isDark ? "text-light fs-5" : "text-black fs-5"}>
              Jul 2023 - Oct 2023
            </p>
            <p className="text-orange fs-3">
              Information Technology Institute (ITI)
            </p>
            <i className="text-blue">Full Stack using MERN Track</i>
            <ul className="mt-3">
              Skills:
              {mySkills.map((skill, index) => {
                return (
                  <li className="ps-4 mt-3 my-skills" key={index}>
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Resume;
export async function getStaticProps() {
  const mySkills = [
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
  return {
    props: {
      mySkills,
    },
  };
}

import Head from "next/head";
import Resume from "@/components/resume/Index";

const ResumePage = ({ isDark, mySkills }) => {
  return (
    <>
      <Head>
        <title>Saad Elnady resume</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Resume isDark={isDark} />
    </>
  );
};

export default ResumePage;

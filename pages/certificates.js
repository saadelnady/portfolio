import Image from "next/image";
import BussinessImg from "../public/assets/certificates/Bussiness.jpg";
import EnglishImg from "../public/assets/certificates/English.jpg";
import HRImg from "../public/assets/certificates/HR.jpg";
import IC3Img from "../public/assets/certificates/IC3.jpg";
import MongoDbImg from "../public/assets/certificates/MongoDb.png";
import NodejsImg from "../public/assets/certificates/Nodejs.png";
import ReactImg from "../public/assets/certificates/React.jpg";
import Head from "next/head";

const Certificates = ({ isDark, certificates }) => {
  return (
    <>
      <Head>
        <title>Saad Elnady certificates</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div
        className={
          isDark
            ? "certificates col-12 col-lg-7 bg-dark rounded shadow px-5 py-5"
            : "certificates col-12 col-lg-7 bg-light rounded shadow px-5 py-5"
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
            Certificates
          </h1>
        </div>
        <p className="fs-3 text-orange">Certificates & Courses</p>
        <div className="cards row justify-content-between">
          {certificates.map((certificate, index) => {
            return (
              <div
                key={index}
                className={`card col-12 col-xxl-5 mb-3 position-relative overflow-hidden ${
                  isDark ? "bg-dark" : "bg-light"
                }`}
              >
                <Image
                  src={certificate.imgUrl}
                  alt="card-img"
                  className="rounded w-100"
                  width={700}
                  height={700}
                />
                <div
                  className={` w-100 text-center details ${
                    isDark ? " bg-dark text-light" : "bg-light text-dark"
                  }`}
                >
                  {certificate.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Certificates;

export const getStaticProps = async () => {
  const certificates = [
    { imgUrl: MongoDbImg, desc: "MongoDb Certificate" },
    { imgUrl: NodejsImg, desc: "Nodejs Certificate" },
    { imgUrl: ReactImg, desc: "React Certificate" },
    { imgUrl: BussinessImg, desc: "business Certificate" },
    { imgUrl: EnglishImg, desc: "English Certificate" },
    { imgUrl: HRImg, desc: "HR Certificate" },
    { imgUrl: IC3Img, desc: "IC3 Certificate" },
  ];

  return {
    props: {
      certificates,
    },
  };
};

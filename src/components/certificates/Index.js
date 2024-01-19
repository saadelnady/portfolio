import Image from "next/image";
import React from "react";
import { certificates } from "../../../static/static";
const Index = ({ isDark }) => {
  return (
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
  );
};

export default Index;

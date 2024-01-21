import Image from "next/image";
import React from "react";

const Cards = ({ cards, isDark }) => {
  return (
    <div className="cards row flex-wrap justify-content-between">
      {cards.map((card, index) => {
        return (
          <div
            className={`${
              isDark ? "bg-dark2" : " bg-white"
            } card col-12 col-sm-5 text-center mb-4 text-light p-4`}
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
            <p className={isDark ? "text-light mb-3" : "text-dark mb-3"}>
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

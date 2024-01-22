import Image from "next/image";
import { skills } from "static/static";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const Slider = ({ isDark }) => {
  return (
    <>
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
          <div className="cards row p-3 ">
            {skills.map((skill, index) => {
              return (
                <SwiperSlide
                  className={`card col-3  me-5 card cursor-pointer
          ${isDark ? "bg-dark2" : "bg-white"}`}
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
    </>
  );
};

export default Slider;

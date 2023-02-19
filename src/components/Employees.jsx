import React, { useState, useEffect } from "react";
import { arrow, milos, ker, ivan, mihajlo } from "../assets";
import { employees } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Controller } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper";

const Employees = () => {
  const [smallScreen, setSmallScreen] = useState(false);

  const mediaQueries = () => {
    if (window.matchMedia("(max-width: 1024px").matches) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  };

  useEffect(() => {
    const mediaQueries = () => {
      if (window.matchMedia("(max-width: 1024px").matches) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    };
  }, [document.innerWidth]);

  return (
    <Swiper
      freeMode={true}
      grabCursor={true}
      modules={[FreeMode]}
      className="mySwiper"
      id="team"
      slidesPerView={5.5}
      spaceBetween={20}
      breakpoints={{
        1200: {
          slidesPerView: 4.5,
        },
        992: {
          slidesPerView: 3.5,
        },
        768: {
          slidesPerView: 2.5,
        },
        576: {
          slidesPerView: 1.5,
        },
        320: {
          slidesPerView: 1.5,
        },
      }}
    >
      {employees.map((employee) => {
        return (
          <SwiperSlide className="relative swiper-card" key={employee.id}>
            <img src={employee.img} alt="milos" className="rounded-xl" />
            <div className="absolute bottom-0 w-full h-full text-white font-poppins text-[0.9rem] lg:text-[1.1rem] swiper-text rounded-xl px-4 py-2 overflow-hidden">
              <button className="w-full">
                <img
                  src={arrow}
                  alt="arrow"
                  className="mx-auto w-[48px] rotate-[180deg] swiper-text-arrow"
                />
              </button>
              <h2 className="my-3 text-[#05F6FF] text-2xl">{employee.title}</h2>
              <p>{employee.text}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Employees;

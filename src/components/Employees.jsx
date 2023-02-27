import React from "react";
import { employees } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper";
import SingleEmployee from "./SingleEmployee";

const Employees = () => {
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
            <SingleEmployee img={employee.img} title={employee.title} text={employee.text}/>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Employees;

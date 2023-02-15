import React, { useState, useEffect } from "react";
import { arrow, milos, ker } from "../assets";
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

  useEffect(() => {
    console.log(smallScreen);
  }, []);

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
        <SwiperSlide className="relative swiper-card">
          <img src={milos} alt="milos" className="rounded-xl" />
          <div className="absolute bottom-0 w-full h-full text-white font-poppins text-[0.9rem] lg:text-[1.1rem] swiper-text rounded-xl px-4 py-2 overflow-hidden">
            <button className="w-full">
              <img
                src={arrow}
                alt="arrow"
                className="mx-auto w-[48px] rotate-[180deg] swiper-text-arrow"
              />
            </button>
            <h2 className="my-3 text-[#05F6FF] text-2xl">Founder & CEO</h2>
            <p>
              Upoznajte Milosa: 26-godišnjeg vizionara koji ruši ustaljene
              standarde u marketing industriji svojim inovativnim idejama i
              beskompromisnim vođstvom kao osnivač i CEO naše startup kompanije.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative swiper-card">
          <img src={milos} alt="milos" className="rounded-xl" />
          <div className="absolute bottom-0 w-full h-full text-white font-poppins text-[1rem] lg:text-[1.1rem] swiper-text rounded-xl px-4 py-2 overflow-hidden">
            <button className="w-full">
              <img
                src={arrow}
                alt="arrow"
                className="mx-auto rotate-[180deg] swiper-text-arrow"
              />
            </button>
            
            <p>
            Upoznajte našeg vodećeg prodavca, Uroša Babića, starog 29 godina. Uz impresivno iskustvo u prodaji, Uroš svojim timom donosi nova dostignuća i postiže izvanredne rezultate.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative swiper-card">
          <img src={milos} alt="milos" className="rounded-xl" />
          <div className="absolute bottom-0 w-full h-full text-white font-poppins text-[1rem] lg:text-[1.1rem] swiper-text rounded-xl px-4 py-2 overflow-hidden">
            <button className="w-full">
              <img
                src={arrow}
                alt="arrow"
                className="mx-auto rotate-[180deg] swiper-text-arrow"
              />
            </button>
            <p>
            Predstavljamo vam našeg menadžera tima, Mihajla Đorđevića. Sa širokim spektrom vještina u vođenju timova i uspješnom karijerom u upravljanju projektima, Mihajlo je ključni igrač u postizanju ciljeva naše kompanije.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative swiper-card">
          <img src={milos} alt="milos" className="rounded-xl" />
          <div className="absolute bottom-0 w-full h-full text-white font-poppins text-[1rem] lg:text-[1.1rem] swiper-text rounded-xl px-4 py-2 overflow-hidden">
            <button className="w-full">
              <img
                src={arrow}
                alt="arrow"
                className="mx-auto rotate-[180deg] swiper-text-arrow"
              />
            </button>
            <p>
              Upoznajte Milosa: 26-godišnjeg vizionara koji ruši ustaljene
              standarde u marketing industriji svojim inovativnim idejama i
              beskompromisnim vođstvom kao osnivač i CEO naše startup kompanije.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative swiper-card">
          <img src={milos} alt="milos" className="rounded-xl" />
          <div className="absolute bottom-0 w-full h-full text-white font-poppins text-[1rem] lg:text-[1.1rem] swiper-text rounded-xl px-4 py-2 overflow-hidden">
            <button className="w-full">
              <img
                src={arrow}
                alt="arrow"
                className="mx-auto rotate-[180deg] swiper-text-arrow"
              />
            </button>
            <p>
              Upoznajte Milosa: 26-godišnjeg vizionara koji ruši ustaljene
              standarde u marketing industriji svojim inovativnim idejama i
              beskompromisnim vođstvom kao osnivač i CEO naše startup kompanije.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative swiper-card">
          <img src={milos} alt="milos" className="rounded-xl" />
          <div className="absolute bottom-0 w-full h-full text-white font-poppins text-[1rem] lg:text-[1.1rem] swiper-text rounded-xl px-4 py-2 overflow-hidden">
            <button className="w-full">
              <img
                src={arrow}
                alt="arrow"
                className="mx-auto rotate-[180deg] swiper-text-arrow"
              />
            </button>
            <p>
              Upoznajte Milosa: 26-godišnjeg vizionara koji ruši ustaljene
              standarde u marketing industriji svojim inovativnim idejama i
              beskompromisnim vođstvom kao osnivač i CEO naše startup kompanije.
            </p>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
        <img src={milos} alt="milos" className="rounded-xl swiper-card" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={milos} alt="milos" className="rounded-xl swiper-card" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={milos} alt="milos" className="rounded-xl swiper-card" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={milos} alt="milos" className="rounded-xl swiper-card" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={milos} alt="milos" className="rounded-xl swiper-card" />
      </SwiperSlide> */}
      </Swiper>
    // <Swiper
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   className="text-white"
    // >
    //   <SwiperSlide>
    //     <img src={milos} alt="milos" />
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <img src={milos} alt="milos" />
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <img src={milos} alt="milos" />
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <img src={milos} alt="milos" />
    //   </SwiperSlide>
    // </Swiper>
  );
};

export default Employees;

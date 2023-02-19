import React, { useState } from "react";
import { arrow } from "../assets";


const SingleEmployee = ({ img, title, text }) => {
    const [cardHover, setCardHover] = useState(false);


  return (
    <div>
      <img src={img} alt="milos" className="rounded-xl" />
      <div
        className={`${
          cardHover ? "card-hover" : "card-not-hover"
        } absolute bottom-0 w-full h-full text-white font-poppins text-[0.9rem] lg:text-[1.1rem] swiper-text rounded-xl px-4 py-2 overflow-hidden`}
      >
        <button
          className="w-full"
          onClick={() => setCardHover((prev) => !prev)}
        >
          <img
            src={arrow}
            alt="arrow"
            className={`${cardHover ? "arrow-hover" : "arrow-not-hover"} mx-auto w-[48px] rotate-[180deg] swiper-text-arrow`}
          />
        </button>
        <h2 className="my-3 text-[#05F6FF] text-2xl">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SingleEmployee;

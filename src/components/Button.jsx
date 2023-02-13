import React, { useEffect } from "react";

const Button = ({ styles, setOpenModal, openModal }) => {
  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  useEffect(() => {
    console.log(openModal);
  }, [openModal])

  return (
    <button
      type="button"
      onClick={() => toggleModal()}
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      Kontakt
    </button>
  );
};

export default Button;

import React from "react";

import { close } from '../assets'

const Modal = ({ setOpenModal, openModal }) => {
  return (
    <div
      className="background fixed top-[60px] lg:top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] modal-bg lg:py-[20vh] lg:px-[20vw] z-[9999]"
      style={{ display: openModal ? "block" : "none" }}
    >
      <div className="lg:w-[60vw] lg:h-[60vh] sm:mt-[75px] lg:mt-0 bg-black rounded-2xl p-6 modal-box">
        <div className="modal-header flex justify-between mb-6">
          <h1 className="text-white text-3xl font- font-bold">Contact Us</h1>
          <button
            className="text-white text-2xl"
            onClick={() => setOpenModal(!openModal)}
          >
            <img src={close} alt="close" />
          </button>
        </div>
        <div className="modal-body">
          <form action="https://formsubmit.co/sales@thedigist.com" method="POST" className="font-poppins">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://www.digist.eu/"></input>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="Email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#05F6FF] focus:outline-none focus:ring-0 focus:border-[#05F6FF] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#05F6FF] peer-focus:dark:text-[#05F6FF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your e-mail
              </label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="First name"
                  id="floating_message"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#05F6FF] focus:outline-none focus:ring-0 focus:border-[#05F6FF] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_message"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#05F6FF] peer-focus:dark:text-[#05F6FF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="Last name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#05F6FF] focus:outline-none focus:ring-0 focus:border-[#05F6FF] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#05F6FF] peer-focus:dark:text-[#05F6FF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your surname
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="Company"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#05F6FF] focus:outline-none focus:ring-0 focus:border-[#05F6FF] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_company"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#05F6FF] peer-focus:dark:text-[#05F6FF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company name
                </label>
              </div>
              
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="tel"
                  name="Phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#05F6FF] focus:outline-none focus:ring-0 focus:border-[#05F6FF] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#05F6FF] peer-focus:dark:text-[#05F6FF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  What do you specialize in
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <textarea
                  type="text"
                  name="Message"
                  id="floating_message"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#05F6FF] focus:outline-none focus:ring-0 focus:border-[#05F6FF] peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_message"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#05F6FF] peer-focus:dark:text-[#05F6FF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your message
                </label>
              </div>
              <input type="hidden" name="_captcha" value="false"></input>
            <button
              type="submit"
              className="bg-blue-gradient text-black bg-[#05F6FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#05F6FF] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

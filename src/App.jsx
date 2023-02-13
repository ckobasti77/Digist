import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  StaticLoader,
  Loader
} from "./components";
import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import { BsChevronBarUp, BsFileArrowUp } from "react-icons/bs";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeoutID);
  }, []);
  

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight >= 1500) {
        setShowScrollToTop(true);
      } else if (currentHeight < 1500) {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        {loading && <Loader />}
        <StaticLoader />
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Business setOpenModal={setOpenModal} openModal={openModal} />
            <Billing />
            <CardDeal setOpenModal={setOpenModal} openModal={openModal} />
            <CTA setOpenModal={setOpenModal} openModal={openModal} />
            <Testimonials />
            {/* <Clients /> */}
            <Footer />
            <Modal setOpenModal={setOpenModal} openModal={openModal}/>
          </div>
        </div>
      </div>
      <button
        className="text-[#05F6FF] fixed bottom-[1.5vw] right-[1.5vw] text-[2.5rem] border-none z-[9999]"
        onClick={() => scrollToTop()}
        style={{ visibility: showScrollToTop ? "visible" : "hidden" }}
        title="Scroll To Top"
      >
        <BsFileArrowUp />
      </button>
    </>
  );
};

export default App;

import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  CTA,
  Footer,
  Navbar,
  Testimonials,
  Hero,
  StaticLoader,
  Loader,
  Modal,
  Cookies,
  Employees,
} from "./components";
import { useState, useEffect } from "react";
import { BsFileArrowUp } from "react-icons/bs";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const [loading, setLoading] = useState(true);
  const [cookies, setCookies] = useState(false)

  useEffect(() => {
    const timeoutID = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeoutID);
  }, []);

  useEffect(() => {
    const timeoutID = setTimeout(() => setCookies(true), 5000);
    return () => clearTimeout(timeoutID);
  }, []);

  const [showScrollToTop, setShowScrollToTop] = useState(false);

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
        {cookies && <Cookies cookies={cookies} setCookies={setCookies} />}
        {loading && <Loader />}
        <StaticLoader />
        <div
          className={`${styles.paddingX} ${styles.flexCenter} navbar fixed top-0 left-0 right-0 z-[999]`}
        >
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
            <Billing setOpenModal={setOpenModal} openModal={openModal} />
            <CardDeal setOpenModal={setOpenModal} openModal={openModal} />
            <div className="my-16">
              <Employees />
            </div>
            <CTA setOpenModal={setOpenModal} openModal={openModal} />
            <Testimonials />
            <Footer />
            <Modal setOpenModal={setOpenModal} openModal={openModal} />
          </div>
        </div>
      </div>
      <a
        className="text-[#05F6FF] fixed bottom-[1.5vw] right-[1.5vw] text-[2.5rem] border-none z-[9999]"
        style={{ visibility: showScrollToTop ? "visible" : "hidden" }}
        title="Scroll To Top"
        href="#hero"
      >
        <BsFileArrowUp />
      </a>
    </>
  );
};

export default App;

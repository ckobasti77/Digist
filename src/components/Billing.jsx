import { bill } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Billing = ({ setOpenModal, openModal }) => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Helping You Grow Better
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Utilizing our experience and expertise in digital marketing, we provide you with full support and personalized strategies to enhance your online presence and reach your target audience. Together, we work towards the growth of your business.
      </p>
      <Button styles={`mt-10`} setOpenModal={setOpenModal} openModal={openModal} />
      
    </div>
  </section>
);

export default Billing;

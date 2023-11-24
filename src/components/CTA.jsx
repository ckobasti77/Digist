import styles from "../style";
import Button from "./Button";

const CTA = ({ setOpenModal, openModal }) => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Don't hesitate, feel free to send us a message.</h2>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button setOpenModal={setOpenModal} openModal={openModal} />
    </div>
  </section>
);

export default CTA;

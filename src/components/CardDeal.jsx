import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = ({ setOpenModal, openModal }) => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Digital marketing is not the future, <br className="sm:block hidden" /> but the present.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      With us, the focus is not solely on the future; we work to help you leverage all the benefits of digital marketing in the present. Utilize our expertise and experience to quickly and efficiently strengthen your online presence and achieve success in the industry.
      </p>

      <Button styles={`mt-10`} setOpenModal={setOpenModal} openModal={openModal} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;

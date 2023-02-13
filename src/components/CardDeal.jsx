import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = ({ setOpenModal, openModal }) => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Digitalni marketing nije budućnost, <br className="sm:block hidden" /> već sadašnjost.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Kod nas se ne fokusiramo samo na budućnost, već radimo na tome da vam pomognemo da iskoristite sve prednosti digitalnog marketinga u sadašnjosti. Iskoristite našu stručnost i iskustvo da biste brzo i efikasno osnažili svoj online prisustvom i postigli uspeh u industriji.
      </p>

      <Button styles={`mt-10`} setOpenModal={setOpenModal} openModal={openModal} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;

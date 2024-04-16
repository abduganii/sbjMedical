import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";

type EquipmentCard = {
  className?: string;
  title: string;
  text: string;
  span: string;

};

const EquipmentCard = ({ className, title, text, span }: EquipmentCard) => {
  const classes = clsx(styles.card, className);
  return (
    <div className={classes}>
      <div className={styles.wrapper}>
        <Image
          className={styles.image}
          src="/images/equipments/densimetr.png"
          alt="Equipment"
          width={342}
          height={350}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={clsx(styles.text, styles.name)}>{text}</p>
      <p className={styles.text}>
        Производитель: <b className={styles.bold}>{span}</b>
      </p>
    </div>
  );
};

export default EquipmentCard;

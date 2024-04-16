import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";



type CardType = {
  slug: string;
  title: string;
  text: string;
  image: string;
  date: string;
};

type BlogCardType = {
  className?: string;
  card: CardType;
};

const VlogCard = ({ className, card }: BlogCardType) => {
  const classes = clsx(styles.card, className);

  return (
    <div className={classes} style={{ "backgroundImage": `url(${card.image})` }}>

      <h3 className={styles.title}>{card.title}</h3>
      <div
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: card.text }}
      />

    </div>
  );
};

export default VlogCard;

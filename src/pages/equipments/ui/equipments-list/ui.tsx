import { EquipmentCard } from "@/entities/cards";
import styles from "./styles.module.scss";

const EquipmentsList = () => {
  return (
    <div className={styles.equipments}>
      <div className="container-sm">
        <div className={styles.list}>
          {Array.from({ length: 8 }, () => Math.random()).map((el, i) => (
            <EquipmentCard
              className={styles.card}
              key={i}
              title={"title"}
              span={"span"}
              text={"text"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EquipmentsList;

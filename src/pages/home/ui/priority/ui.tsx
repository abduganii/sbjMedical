import clsx from "clsx";
import styles from "./sytles.module.scss";
import Image from "next/image";
import { container, image, item } from "./config";
import { motion } from "framer-motion";
import { useScopedI18n } from "@/features/locales";
import { getLocaleProps } from "@/features/locales";
import { useQuery } from "react-query";
import fetchData from "@/pages/api";
import { useCurrentLocale } from "@/features/locales/index";

const Priority = () => {
  const t = useScopedI18n("priority");
  const lang = useCurrentLocale()

  const { data: stats } = useQuery('stats', () => fetchData('other/main/2/retriev/'))
  const priorities = [
    {
      id: 1,
      text: t("priority-1"),
    },
    {
      id: 2,
      text: t("priority-2"),
    },
    {
      id: 3,
      text: t("priority-3"),
    },
    {
      id: 4,
      text: t("priority-4"),
    },
    {
      id: 5,
      text: t("priority-5"),
    },
    {
      id: 6,
      text: t("priority-6"),
    },
  ];


  return (
    <div className={styles.priority}>
      <div className={clsx("container-sm", styles.container)}>
        <h2 className={styles.title}>{t("title")}</h2>
        <div className={styles.wrapper}>
          <motion.div
            className={styles.image}
            variants={image}
            initial="hidden"
            whileInView="visible"
          >
            <Image
              className={styles.image}
              src={"/images/priority.png"}
              alt="Priority"
              width={517}
              height={394}
            />
          </motion.div>
          <motion.ul
            className={styles.list}
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            {stats && stats?.mission?.map((el: any) => (
              <motion.li className={styles.item} key={el.id} variants={item}>
                <div className={styles.number}>{el.id}</div>
                <p className={styles.text} dangerouslySetInnerHTML={{ __html: el?.[`text_${lang}`] }} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Priority;

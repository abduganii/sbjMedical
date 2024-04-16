import clsx from "clsx";
import styles from "./styles.module.scss";
import { container, item } from "./config";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScopedI18n } from "@/features/locales";
import { useQuery } from "react-query";
import fetchData from "@/pages/api";
export const Stats = () => {
  const t = useScopedI18n("stats");
  const { data: stats } = useQuery('stats', () => fetchData('other/main/2/retriev/'))
  const stats_list = [
    {
      id: 1,
      image: "/images/customer.png",
      title: t("department"),
      amount: stats?.chapter_num,
    },
    {
      id: 2,
      image: "/images/cooperation.png",
      title: t("employees"),
      amount: stats?.staff_total,
    },
    {
      id: 3,
      image: "/images/portfolio.png",
      title: t("doctors"),
      amount: stats?.doctors_total,
    },
    {
      id: 4,
      image: "/images/campaign.png",
      title: t("patients"),
      amount: stats?.monthly_clients_num,
    },
  ];

  return (
    <div className={styles.stats}>
      <div className="container-sm">
        <motion.div
          className={clsx(styles.container)}
          variants={container}
          initial="hidden"
          whileInView="visible"
        >
          {stats_list.map((stat) => (
            <motion.div
              className={styles.wrapper}
              key={stat.id}
              variants={item}
            >
              <Image
                className={styles.image}
                src={stat.image}
                alt={stat.title}
                width={80}
                height={80}
              />
              <h2 className={styles.amount}>{stat.amount}</h2>
              <p className={styles.title}>{stat.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

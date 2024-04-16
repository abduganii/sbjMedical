import {
  ComponentProps,
  ComponentPropsWithoutRef,
  PropsWithChildren,
  PropsWithoutRef,
  useCallback,
  useState,
} from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import { opacityAnimation } from "@/shared/animation";
import { useScopedI18n } from "@/features/locales";
import { useQuery } from "react-query"
import fetchData from "@/pages/api"
import { useCurrentLocale } from "@/features/locales/index";

const Tabs = () => {
  const [value, setValue] = useState(1);
  const t = useScopedI18n("partnership");
  const { data } = useQuery('partnership', () => fetchData('other/text/1/retriev/'))
  const lang = useCurrentLocale()
  const onChangeHandler = useCallback((val: number) => setValue(val), []);
  return (
    <div className={styles.tabs}>
      <div className="container-sm">
        <header className={styles.header}>
          <div className={styles.wrapper}>
            <button
              className={clsx(styles.button, value === 0 && styles.active)}
              onClick={() => onChangeHandler(0)}
            >
              {t("partnership")}
            </button>
            <button
              className={clsx(styles.button, value === 1 && styles.active)}
              onClick={() => onChangeHandler(1)}
            >
              {t("vacancy")}
            </button>
          </div>
        </header>
        <TabItem
          value={value}
          index={0}
          dangerouslySetInnerHTML={{ __html: t("partnership_text") }}
        />
        <TabItem
          value={value}
          index={1}
          dangerouslySetInnerHTML={{ __html: data?.[`work_for_us_${lang}`] }}
        />
        <TabItem
          value={value}
          index={1}
          dangerouslySetInnerHTML={{ __html: data?.[`become_partner_${lang}`] }}
        />
      </div>
    </div>
  );
};

export default Tabs;

type TabItemType = {
  value: number;
  index: number;
};

const TabItem = ({
  value,
  index,
  children,
  dangerouslySetInnerHTML,
}: PropsWithChildren<TabItemType> & ComponentProps<"div">) => {
  return value === index ? (
    <motion.div
      className={styles.context}
      initial="hidden"
      animate="visible"
      variants={opacityAnimation}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </motion.div>
  ) : null;
};

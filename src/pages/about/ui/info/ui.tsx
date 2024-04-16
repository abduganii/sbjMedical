import Image from "next/image";
import styles from "./styles.module.scss";
import { useCurrentLocale } from "@/features/locales/index";
import { useQuery } from "react-query"
import fetchData from "@/pages/api"
const AboutInfo = () => {
  const { data } = useQuery('aboutus', () => fetchData('other/about/1/retriev/'))
  const lang = useCurrentLocale()
  return (
    <div className={styles.info}>
      <div className="container-sm">
        <div className={styles.header}>
          <h2 className={styles.title}>
            {data?.[`title_${lang}`]}
          </h2>
          <div className={styles.text} dangerouslySetInnerHTML={{ __html: data?.[`desc_${lang}`] }} />
        </div>
        <Image
          className={styles.image}
          src={data?.image ? data?.image : '/images/all-doctors.png'}
          alt="Team"
          width={1600}
          height={580}
        />
        <h3 className={styles.heading}>
          {data?.[`sub_title_${lang}`]}
        </h3>
        <div className={styles.text} dangerouslySetInnerHTML={{ __html: data?.[`desc_${lang}`] }} />
      </div>
    </div>
  );
};

export default AboutInfo;

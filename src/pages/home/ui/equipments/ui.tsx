import { SectionHeader } from "@/entities/section-header";
import routing from "@/shared/routing";
import styles from "./styles.module.scss";
import { EquipmentCard } from "@/entities/cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useScopedI18n } from "@/features/locales";
import { useQuery } from "react-query"
import fetchData from "@/pages/api"
import { useCurrentLocale } from "@/features/locales/index";
const Equipments = () => {
  const t = useScopedI18n("equipments");
  const lang = useCurrentLocale()
  const { data } = useQuery('equipments', () => fetchData('other/equepment/list'))

  return (
    <div className={styles.equipments}>
      <div className="container-sm">
        <SectionHeader title={t("caption")} href={routing.equipments} />
      </div>
      <Swiper
        className={styles.swiper}
        breakpoints={{
          1250: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
        }}
        modules={[Autoplay]}
        autoplay={{ delay: 3500 }}
        spaceBetween={24}
      >
        {
          data && data?.results?.map((e: any) => (
            <SwiperSlide key={e.id} className={styles.slide}>
              <EquipmentCard
                title={e?.[`title_${lang}`]}
                text={e?.[`sub_title_${lang}`]}
                span={e?.[`brief_info_${lang}`]}
                className={styles.card}
              />
            </SwiperSlide>
          ))
        }

      </Swiper>
    </div>
  );
};

export default Equipments;

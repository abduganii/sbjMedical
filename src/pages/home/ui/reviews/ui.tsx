import { ReviewCard } from "@/entities/cards";
import styles from "./styles.module.scss";
import { reviews } from "./config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useScopedI18n } from "@/features/locales";
import { useQuery } from "react-query"
import fetchData from "@/pages/api"
import { useCurrentLocale } from "@/features/locales/index";

const Reviews = () => {
  const t = useScopedI18n("rating");
  const { data } = useQuery('reviews', () => fetchData('appointment/rating/list-create/'))
  const lang = useCurrentLocale()
  return (
    <div className={styles.reviews}>
      <div className="container-sm">
        <h2 className={styles.title}>{t("caption")}</h2>
        <Swiper
          className={styles.swiper}
          modules={[Autoplay]}
          autoplay={{ delay: 3500 }}
          spaceBetween={24}
          breakpoints={{
            1250: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            600: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
          }}
        >
          {data && data?.results?.map((review: any) => (
            <SwiperSlide className={styles.slider} key={review.id}>
              <ReviewCard
                className={styles.card}
                quantity={review.point}
                title={review?.patient_full_name}
                text={review?.comment}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;

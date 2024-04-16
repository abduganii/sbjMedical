import { VlogCard } from "@/entities/cards";
import { SectionHeader } from "@/entities/section-header";
import styles from "./styles.module.scss";
import routing from "@/shared/routing";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { useQuery } from "react-query"
import fetchData from "@/pages/api"
// import { DoctorType } from "@/global/type"
const Blogs = () => {
  const { data } = useQuery('blogs', () => fetchData('blog/vlog/list/'))
  return (
    <div className={styles.blogs}>
      <div className="container-sm">
        <SectionHeader title="Видео галерея" href={routing.news} />
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
          {data?.results?.map((card: any) =>
            <SwiperSlide className={styles.slide}
              key={card?.id}>
              <VlogCard
                className={styles.card}
                card={{
                  date: card?.created,
                  title: card?.title_uz,
                  text: card?.text_ru,
                  slug: card?.slug,
                  image: card?.poster,
                }}
              />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;

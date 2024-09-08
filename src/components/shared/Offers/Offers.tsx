import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import styles from './Offers.module.scss';

import 'swiper/css';
import { Navigation } from 'swiper/modules';

export const Offers: React.FC = () => {
  return (
    <div>
      <div className={styles.container}>
        <Swiper
          className={styles.Instruments}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}>
          <SwiperSlide className={styles.Instruments__slide}>
            <h1 className={styles.Instruments__title}>Специальные предложения</h1>
            <p className={styles.Instruments__description}>
              на строительные материалы
              <br />и товары для ремонта
            </p>
            <button className={styles.Instruments__btn}>Подробнее</button>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

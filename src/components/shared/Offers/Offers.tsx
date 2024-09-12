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
            <div className={styles.Instruments__footer}>
              <div className={styles.Instruments__buttons}>
                <button className={styles.Instruments__btn}>Подробнее</button>
                <div className={styles.buttons__arrows}>
                  <button className={styles.Instruments__arrow}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round">
                      <path d="m12 19-7-7 7-7" />
                      <path d="M19 12H5" />
                    </svg>
                  </button>
                  <button className={styles.Instruments__arrow}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

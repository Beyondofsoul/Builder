import React, { useEffect } from 'react';
import styles from './Rewiews.module.scss';
import { Sliders } from '../../ui/Sliders';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { fetchRewiews } from '../../../redux/slices/RewiewsSlice';

export const Rewiews: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const rewiews = useSelector((state: any) => state.rewiews.rewiew);

  useEffect(() => {
    dispatch(fetchRewiews());
  }, []);

  return (
    <div className={styles.rewiews}>
      <div className={styles.container}>
        <div className={styles.rewiews__header}>
          <h2 className={styles.rewiews__title}>Отзывы</h2>
          <div className={styles.rewiews__arrows}></div>
        </div>
        <div className={styles.rewiews__blocks}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}>
            {rewiews.map((obj: any) => (
              <SwiperSlide key={obj.id}>
                <Sliders {...obj} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

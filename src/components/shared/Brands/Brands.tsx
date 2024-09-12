import React from 'react';
import styles from './Brands.module.scss';
import BrandPng from '../../../assets/brand.png';

export const Brands: React.FC = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.brands__header}>
          <h2 className={styles.brands__title}>Популярные бренды</h2>
          <button className={styles.brands__btn}>
            Все бренды
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-right">
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className={styles.brands__blocks}>
          <div className={styles.brands__block}>
            <img src={BrandPng} alt="" className={styles.brands__img} />
          </div>
          <div className={styles.brands__block}>
            <img src={BrandPng} alt="" className={styles.brands__img} />
          </div>
          <div className={styles.brands__block}>
            <img src={BrandPng} alt="" className={styles.brands__img} />
          </div>
          <div className={styles.brands__block}>
            <img src={BrandPng} alt="" className={styles.brands__img} />
          </div>
          <div className={styles.brands__block}>
            <img src={BrandPng} alt="" className={styles.brands__img} />
          </div>
          <div className={styles.brands__block}>
            <img src={BrandPng} alt="" className={styles.brands__img} />
          </div>
          <div className={styles.brands__block}>
            <img src={BrandPng} alt="" className={styles.brands__img} />
          </div>
          <div className={styles.brands__block}>
            <img src={BrandPng} alt="" className={styles.brands__img} />
          </div>
          <div className={styles.brands__block}>
            <img src={BrandPng} alt="" className={styles.brands__img} />
          </div>
          <div className={styles.brands__block}>
            <img src={BrandPng} alt="" className={styles.brands__img} />
          </div>
          <div className={styles.brands__block}>
            <img src={BrandPng} alt="" className={styles.brands__img} />
          </div>
          <div className={styles.brands__block}>
            <img src={BrandPng} alt="" className={styles.brands__img} />
          </div>
        </div>
      </div>
    </div>
  );
};

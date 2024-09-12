import React from 'react';
import styles from './Categories.module.scss';

import DushPng from '../../../assets/Dush.png';
export const Categories: React.FC = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.categories__header}>
          <h2 className={styles.categories__title}>Популярные категории</h2>
          <button className={styles.categories__btn}>
            Все категории
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
        <div className={styles.categories__blocks}>
          <div className={styles.categories__block}>
            <p className={styles.categories__block_title}>Душевые</p>
            <img src={DushPng} alt="" />
          </div>
          <div className={styles.categories__block}>
            <p className={styles.categories__block_title}>Душевые</p>
            <img src={DushPng} alt="" />
          </div>
          <div className={styles.categories__block}>
            <p className={styles.categories__block_title}>Душевые</p>
            <img src={DushPng} alt="" />
          </div>
          <div className={styles.categories__block}>
            <p className={styles.categories__block_title}>Душевые</p>
            <img src={DushPng} alt="" />
          </div>
          <div className={styles.categories__block}>
            <p className={styles.categories__block_title}>Душевые</p>
            <img src={DushPng} alt="" />
          </div>
          <div className={styles.categories__block}>
            <p className={styles.categories__block_title}>Душевые</p>
            <img src={DushPng} alt="" />
          </div>
          <div className={styles.categories__block}>
            <p className={styles.categories__block_title}>Душевые</p>
            <img src={DushPng} alt="" />
          </div>
          <div className={styles.categories__block}>
            <p className={styles.categories__block_title}>Душевые</p>
            <img src={DushPng} alt="" />
          </div>
          <div className={styles.categories__block}>
            <p className={styles.categories__block_title}>Душевые</p>
            <img src={DushPng} alt="" />
          </div>
          <div className={styles.categories__block}>
            <p className={styles.categories__block_title}>Душевые</p>
            <img src={DushPng} alt="" />
          </div>
          <div className={styles.categories__block}>
            <p className={styles.categories__block_title}>Душевые</p>
            <img src={DushPng} alt="" />
          </div>
          <div className={styles.categories__block}>
            <p className={styles.categories__block_title}>Душевые</p>
            <img src={DushPng} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

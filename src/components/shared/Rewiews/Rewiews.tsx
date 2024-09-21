import React, { useEffect, useState } from 'react';
import styles from './Rewiews.module.scss';
import { Slider } from '../../ui/Slider';
import axios from 'axios';

const src = 'https://66abc9cdf009b9d5c7305643.mockapi.io/Rewiews';

export const Rewiews: React.FC = () => {
  const [rewiews, setRewiews] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get(src);
      await setRewiews(response.data);
    }
    getProducts();
  }, []);

  return (
    <div className={styles.rewiews}>
      <div className={styles.container}>
        <div className={styles.rewiews__header}>
          <h2 className={styles.rewiews__title}>Отзывы</h2>
          <div className={styles.rewiews__arrows}>
            <button className={styles.rewiews__arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </button>{' '}
            <button className={styles.rewiews__arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.rewiews__blocks}>
          {rewiews.map((obj: any) => (
            <Slider key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
};

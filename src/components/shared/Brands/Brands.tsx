import React, { useEffect, useState } from 'react';
import styles from './Brands.module.scss';

import { BrandsBlock } from '../../ui/BrandsBlock';
import axios from 'axios';

const src = 'https://66ed39ba380821644cdc08c3.mockapi.io/brands';

export const Brands: React.FC = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get(src);
      await setBrands(response.data);
    }
    getProducts();
  }, []);

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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right">
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className={styles.brands__blocks}>
          {brands.map((obj: any) => (
            <BrandsBlock key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
};

import React, { useEffect } from 'react';
import styles from './Brands.module.scss';

import { BrandsBlock } from '../../ui/BrandsBlock';

import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands } from '../../../redux/slices/BrandsSlice';
import { AppDispatch } from '../../../redux/store';

export const Brands: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const items = useSelector((state: any) => state.brand.brand);
  useEffect(() => {
    dispatch(fetchBrands());
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
          {items.map((obj: any) => (
            <BrandsBlock key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import styles from './Categories.module.scss';

import { CategoriesBlock } from '../../ui/CategoriesBlock';
export const Categories: React.FC = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://66e33761494df9a478e4a5ff.mockapi.io/categories`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setCategories(arr);
      });
  }, []);

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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right">
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className={styles.categories__blocks}>
          {categories.map((obj: any) => (
            <CategoriesBlock key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
};

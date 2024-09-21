import React, { useEffect, useState } from 'react';
import styles from './Rebate.module.scss';

import { RebateBlock } from '../../ui/RebateBlock';

export const Rebate: React.FC = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://66e33761494df9a478e4a5ff.mockapi.io/actions`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className={styles.rebate}>
      <div className={styles.container}>
        <div className={styles.rebate__actions}>
          <h2 className={styles.rebate__title}>Акции</h2>
          <button className={styles.rebate__btn}>
            Все акции
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
        <div className={styles.rebate__actions_blocks}>
          {items.map((obj: any) => (
            <RebateBlock key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
};

import React, { useEffect } from 'react';
import styles from './Rebate.module.scss';

import { RebateBlock } from '../../ui/RebateBlock';
import { AppDispatch } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRebate } from '../../../redux/slices/RebateSlice';

export const Rebate: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const rebate = useSelector((state: any) => state.rebate.rebates);

  useEffect(() => {
    dispatch(fetchRebate());
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
          {rebate.map((obj: any) => (
            <RebateBlock key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
};

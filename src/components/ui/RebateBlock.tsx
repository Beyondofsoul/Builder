import React from 'react';
import { Counter } from './Counter';
import styles from '../shared/Rebate/Rebate.module.scss';

type RebateBlockParams = {
  title: string;
  price: number;
  imageUrl: string;
  offer: number;
};

export const RebateBlock: React.FC<RebateBlockParams> = ({ imageUrl, title, price, offer }) => {
  return (
    <div className={styles.rebate__actions_block}>
      <div className={styles.rebate__actions_images}>
        <p className={styles.rebate__action}>−25%</p>
        <img src={imageUrl} alt="" className={styles.rebate__actions_image} />
      </div>
      <div className={styles.rebate__info}>
        <div className={styles.rebate__info_text}>
          <p className={styles.rebate__info_title}>{title}</p>
          <div className={styles.rebate__price}>
            <h4 className={styles.rebate__price_present}>{price}</h4>
            <p className={styles.rebate__price_past}>{offer}</p>
          </div>
        </div>
        <Counter />
      </div>
    </div>
  );
};

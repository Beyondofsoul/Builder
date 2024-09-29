import React from 'react';
import styles from '../shared/Cart/MainCart/MainCart.module.scss';
import { Counter } from './Counter';

type CartParams = {
  imageUrl: string;
  title: string;
  price: number;
  id: string;
};

export const CartRight: React.FC<CartParams> = ({ imageUrl, title, price, id }) => {
  return (
    <div>
      <div className={styles.main__right_block}>
        <img src={imageUrl} alt="" className={styles.main__right_img} />
        <div className={styles.main__right_info}>
          <div className={styles.main__right_title}>{title}</div>
          <div className={styles.main__right_price}>{price}Р</div>
          <Counter id={id} />
        </div>
        <div className={styles.main__right_delete}>
          <button className={styles.main__right_remove}>Удалить товар</button>
        </div>
      </div>
    </div>
  );
};

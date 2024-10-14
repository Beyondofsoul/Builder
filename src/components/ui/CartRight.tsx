import React from 'react';
import styles from '../shared/Cart/MainCart/MainCart.module.scss';
import { Counter } from './Counter';
import { useDispatch } from 'react-redux';
import { removeItem, updateTotalPrice } from '../../redux/slices/CartSlice';

type CartParams = {
  imageUrl?: string;
  title?: string;
  price: number;
  id: string;
};

export const CartRight: React.FC<CartParams> = ({ imageUrl, title, price, id }) => {
  const dispatch = useDispatch();
  const onClickMinus = () => {
    dispatch(removeItem(id));
    dispatch(updateTotalPrice());
  };

  return (
    <div>
      <div className={styles.main__right_block}>
        <img src={imageUrl} alt={title} className={styles.main__right_img} />
        <div className={styles.main__right_info}>
          <div className={styles.main__right_title}>{title}</div>
          <div className={styles.main__right_price}>{price}Р</div>
          <Counter id={id} />
        </div>
        <div className={styles.main__right_delete}>
          <button className={styles.main__right_remove} onClick={onClickMinus}>
            Удалить товар
          </button>
        </div>
      </div>
    </div>
  );
};

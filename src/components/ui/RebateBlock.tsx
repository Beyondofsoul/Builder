import React from 'react';
import styles from '../shared/Rebate/Rebate.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { addItem } from '../../redux/slices/CartSlice';

type RebateBlockParams = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  offer: number;
  swap: string;
};

export const RebateBlock: React.FC<RebateBlockParams> = ({ id, imageUrl, title, price, offer }) => {
  const dispatch: AppDispatch = useDispatch();

  const onClickAdd = () => {
    const item = {
      id,
      imageUrl,
      title,
      price,
    };
    dispatch(addItem(item));
  };

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
            <h4 className={styles.rebate__price_present}>{price} ₽</h4>
            <p className={styles.rebate__price_past}>{offer} ₽</p>
          </div>
        </div>

        <button className={styles.rebate__info_btn} onClick={onClickAdd}>
          В корзину
        </button>
      </div>
    </div>
  );
};

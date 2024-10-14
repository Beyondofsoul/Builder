import React from 'react';
import styles from '../shared/Products/Products.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { addItem } from '../../redux/slices/CartSlice';

type ProductsParams = {
  imageUrl: string;
  title: string;
  price: number;
  id: string;
};

export const ProductsBlock: React.FC<ProductsParams> = ({ id, imageUrl, title, price }) => {
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
    <div>
      <div className={styles.products__block}>
        <img src={imageUrl} alt="img" />
        <p className={styles.products__text}>{title}</p>
        <div className={styles.products__price}>{price} ₽</div>
        <button className={styles.products_btn} onClick={onClickAdd}>
          В корзину
        </button>
      </div>
    </div>
  );
};

import React from 'react';
import styles from '../shared/Products/Products.module.scss';
import { Counter } from './Counter';

type ProductsParams = {
  imageUrl: string;
  title: string;
  price: number;
};

export const ProductsBlock: React.FC<ProductsParams> = ({ imageUrl, title, price }) => {
  return (
    <div>
      <div className={styles.products__block}>
        <img src={imageUrl} alt="img" />
        <p className={styles.products__text}>{title}</p>
        <div className={styles.products__price}>{price} ₽</div>
        <Counter />
      </div>
    </div>
  );
};

import React from 'react';
import styles from './HeaderCart.module.scss';

export const HeaderCart: React.FC = () => {
  return (
    <div className={styles.cart__header}>
      <div className={styles.container}>
        <p className={styles.cart__direction}>Главная → Корзина</p>
        <h1 className={styles.cart__title}>Корзина</h1>
      </div>
    </div>
  );
};

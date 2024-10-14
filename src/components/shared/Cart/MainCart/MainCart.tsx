import React from 'react';
import styles from './MainCart.module.scss';

import { useSelector } from 'react-redux';
import { CartRight } from '../../../ui/CartRight';
import { RootState } from '../../../../redux/store';

export const MainCart: React.FC = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);

  const totalCount = Object.values(items).reduce((sum, item) => sum + item.count, 0);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.main__left}>
            <div className={styles.main__left_header}>
              <h3 className={styles.main__left_title}>Итого</h3>
              <div className={styles.main__left_block}>
                <p className={styles.main__left_products}>Количество товара</p>
                <p className={styles.main__left_count}>{totalCount}</p>
              </div>
              <div className={styles.main__left_block}>
                <p className={styles.main__left_products}>Товаров на сумму</p>
                <p className={styles.main__left_count}>{totalPrice}Р</p>
              </div>
              <div className={styles.main__left_block}>
                <p className={styles.main__left_products}>Поставщик</p>
                <p className={styles.main__left_count}>Аксон</p>
              </div>
            </div>
            <div className={styles.main__left_border}>
              <button className={styles.main__left_btn}>Оформить Заказ</button>
            </div>
            <div className={styles.main__left_info}>
              <div className={styles.main__left_order}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-info">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                <p className={styles.main__left_description}>
                  Можно сделать заказ только от одного поставщика
                </p>
              </div>
              <div className={styles.main__left_order}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-truck">
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                  <path d="M15 18H9" />
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                  <circle cx="17" cy="18" r="2" />
                  <circle cx="7" cy="18" r="2" />
                </svg>
                <p className={styles.main__left_description}>
                  Доставка осуществляется курьерами поставщика или службой курьеров Достависта.
                  Также товар можно забрать самостоятельно от поставщика
                </p>
              </div>
              <div className={styles.main__left_order}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucideBox">
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                  <path d="m3.3 7 8.7 5 8.7-5" />
                  <path d="M12 22V12" />
                </svg>
                <p className={styles.main__left_description}>
                  Точная сумма доставки будет определена после после подтверждения заказа
                </p>
              </div>
            </div>
          </div>
          <div className={styles.main__right}>
            {Object.entries(items).map(([id, item]) => (
              <CartRight key={id} {...item} id={id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

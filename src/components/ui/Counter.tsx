import React, { useState } from 'react';
import styles from '../shared/Rebate/Rebate.module.scss';

export const Counter: React.FC = () => {
  const [cart, setCart] = useState(true);
  const [count, setCount] = useState(0);

  const changeCart = () => {
    setCart(!cart);
  };

  const onClickMinus = () => {
    if (count == 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      {' '}
      {cart === true ? (
        <button className={styles.rebate__info_btn} onClick={changeCart}>
          В корзину
        </button>
      ) : (
        <div className={styles.rebate__add}>
          <button className={styles.rebate__invoice} onClick={() => setCount(count + 1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-plus">
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </button>
          <div className={styles.rebate__counter}>{count}</div>
          <button onClick={onClickMinus} className={styles.rebate__invoice}>
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-minus">
              <path d="M5 12h14" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';

import 'swiper/css/navigation';
import styles from './Offers.module.scss';

import 'swiper/css';

export const Offers: React.FC = () => {
  const [swap, setSwap] = useState<number>(0);

  if (swap == 0) {
    return (
      <div>
        <div className={styles.Instruments}>
          <div className={styles.container}>
            <h1 className={styles.Instruments__title}>
              Специальные
              <br />
              предложения
            </h1>
            <p className={styles.Instruments__description}>
              на строительные материалы
              <br />и товары для Ремонта
            </p>
            <div className={styles.Instruments__footer}>
              <div className={styles.Instruments__buttons}>
                <button className={styles.Instruments__btn}>Подробнее</button>
                <div className={styles.buttons__arrows}>
                  <button className={styles.Instruments__arrow} onClick={() => setSwap(0)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="m12 19-7-7 7-7" />
                      <path d="M19 12H5" />
                    </svg>
                  </button>
                  <button className={styles.Instruments__arrow} onClick={() => setSwap(1)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.Instruments__second}>
          <div className={styles.container}>
            <h1 className={styles.Instruments__title}>
              Распродажа
              <br />
              инструментов
            </h1>
            <p className={styles.Instruments__description}>
              «СтройкаСтор» стремится сделать условия покупки
              <br />
              максимально выгодными для каждого покупателя, поэтому
              <br /> на сайте регулярно появляются товары со скидкой
            </p>
            <div className={styles.Instruments__footer}>
              <div className={styles.Instruments__buttons}>
                <button className={styles.Instruments__btn}>Подробнее</button>
                <div className={styles.buttons__arrows}>
                  <button className={styles.Instruments__arrow} onClick={() => setSwap(0)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="m12 19-7-7 7-7" />
                      <path d="M19 12H5" />
                    </svg>
                  </button>
                  <button className={styles.Instruments__arrow} onClick={() => setSwap(0)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

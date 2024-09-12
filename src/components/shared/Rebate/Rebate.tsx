import React from 'react';
import styles from './Rebate.module.scss';

import RuberoidPng from '../../../assets/Ruberoid.png';

export const Rebate: React.FC = () => {
  return (
    <div className={styles.rebate}>
      <div className={styles.container}>
        <div className={styles.rebate__actions}>
          <h2 className={styles.rebate__title}>Акции</h2>
          <button className={styles.rebate__btn}>
            Все акции
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
              className="lucide lucide-arrow-right">
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className={styles.rebate__actions_blocks}>
          <div className={styles.rebate__actions_block}>
            <div className={styles.rebate__actions_image}>
              <p className={styles.rebate__action}>−25%</p>
              <img src={RuberoidPng} alt="" />
            </div>
            <div className={styles.rebate__info}>
              <div className={styles.rebate__info_text}>
                <p className={styles.rebate__info_title}>
                  Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)
                </p>
                <div className={styles.rebate__price}>
                  <h4 className={styles.rebate__price_present}>449 ₽</h4>
                  <p className={styles.rebate__price_past}>499 ₽</p>
                </div>
              </div>
              <button className={styles.rebate__info_btn}>В корзину</button>
            </div>
          </div>
          <div className={styles.rebate__actions_block}>
            <div className={styles.rebate__actions_image}>
              <p className={styles.rebate__action}>−25%</p>
              <img src={RuberoidPng} alt="" />
            </div>
            <div className={styles.rebate__info}>
              <div className={styles.rebate__info_text}>
                <p className={styles.rebate__info_title}>
                  Рубероид РКП-350 ТУ, размер
                  <br /> материала 1 х 10 м (10м2, 1 рулон)
                </p>
                <div className={styles.rebate__price}>
                  <h4 className={styles.rebate__price_present}>449 ₽</h4>
                  <p className={styles.rebate__price_past}>499 ₽</p>
                </div>
              </div>
              <button className={styles.rebate__info_btn}>В корзину</button>
            </div>
          </div>
          <div className={styles.rebate__actions_block}>
            <div className={styles.rebate__actions_image}>
              <p className={styles.rebate__action}>−25%</p>
              <img src={RuberoidPng} alt="" />
            </div>
            <div className={styles.rebate__info}>
              <div className={styles.rebate__info_text}>
                <p className={styles.rebate__info_title}>
                  Рубероид РКП-350 ТУ, размер
                  <br /> материала 1 х 10 м (10м2, 1 рулон)
                </p>
                <div className={styles.rebate__price}>
                  <h4 className={styles.rebate__price_present}>449 ₽</h4>
                  <p className={styles.rebate__price_past}>499 ₽</p>
                </div>
              </div>
              <button className={styles.rebate__info_btn}>В корзину</button>
            </div>
          </div>
          <div className={styles.rebate__actions_block}>
            <div className={styles.rebate__actions_image}>
              <p className={styles.rebate__action}>−25%</p>
              <img src={RuberoidPng} alt="" />
            </div>
            <div className={styles.rebate__info}>
              <div className={styles.rebate__info_text}>
                <p className={styles.rebate__info_title}>
                  Рубероид РКП-350 ТУ, размер
                  <br /> материала 1 х 10 м (10м2, 1 рулон)
                </p>
                <div className={styles.rebate__price}>
                  <h4 className={styles.rebate__price_present}>449 ₽</h4>
                  <p className={styles.rebate__price_past}>499 ₽</p>
                </div>
              </div>
              <button className={styles.rebate__info_btn}>В корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import styles from './Rewiews.module.scss';

export const Rewiews: React.FC = () => {
  return (
    <div className={styles.rewiews}>
      <div className={styles.container}>
        <div className={styles.rewiews__header}>
          <h2 className={styles.rewiews__title}>Отзывы</h2>
          <div className={styles.rewiews__arrows}>
            <button className={styles.rewiews__arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </button>
            <button className={styles.rewiews__arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.rewiews__blocks}>
          <div className={styles.rewiews__block}>
            <div className={styles.rewiews__block_header}>
              <div className={styles.rewiews__info}>
                <div className={styles.rewiews__avatar}></div>
                <div className={styles.rewiews__name}>Петр</div>
              </div>
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 7.21311V14.4262H3.40625C5.27969 14.4262 6.8125 14.441 6.8125 14.4592C6.8125 14.4773 5.8 16.6166 4.5625 19.2131C3.325 21.8096 2.3125 23.9489 2.3125 23.967C2.3125 23.9852 3.84525 24 5.71869 24H9.12481L11.4062 19.2133L13.6875 14.4266V7.21331V0H6.84375H0V7.21311ZM18.3125 7.21311V14.4262H21.7188H25.1252L22.8438 19.2131L20.5623 24H23.9998H27.4373L29.7187 19.2133L32 14.4266V7.21331V0H25.1562H18.3125V7.21311Z"
                  fill="#FCEC41"
                />
              </svg>
            </div>
            <p className={styles.rewiews__text}>
              Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная.
              Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур
              нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где
              надо было просверлить 4 отверстия, всего за 100 ₽
            </p>
            <div className={styles.rewiews__date}>21 марта 2022 г.</div>
          </div>
          <div className={styles.rewiews__block}>
            <div className={styles.rewiews__block_header}>
              <div className={styles.rewiews__info}>
                <div className={styles.rewiews__avatar}></div>
                <div className={styles.rewiews__name}>Петр</div>
              </div>
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 7.21311V14.4262H3.40625C5.27969 14.4262 6.8125 14.441 6.8125 14.4592C6.8125 14.4773 5.8 16.6166 4.5625 19.2131C3.325 21.8096 2.3125 23.9489 2.3125 23.967C2.3125 23.9852 3.84525 24 5.71869 24H9.12481L11.4062 19.2133L13.6875 14.4266V7.21331V0H6.84375H0V7.21311ZM18.3125 7.21311V14.4262H21.7188H25.1252L22.8438 19.2131L20.5623 24H23.9998H27.4373L29.7187 19.2133L32 14.4266V7.21331V0H25.1562H18.3125V7.21311Z"
                  fill="#FCEC41"
                />
              </svg>
            </div>
            <p className={styles.rewiews__text}>
              Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная.
              Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур
              нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где
              надо было просверлить 4 отверстия, всего за 100 ₽
            </p>
            <div className={styles.rewiews__date}>21 марта 2022 г.</div>
          </div>
          <div className={styles.rewiews__block}>
            <div className={styles.rewiews__block_header}>
              <div className={styles.rewiews__info}>
                <div className={styles.rewiews__avatar}></div>
                <div className={styles.rewiews__name}>Петр</div>
              </div>
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 7.21311V14.4262H3.40625C5.27969 14.4262 6.8125 14.441 6.8125 14.4592C6.8125 14.4773 5.8 16.6166 4.5625 19.2131C3.325 21.8096 2.3125 23.9489 2.3125 23.967C2.3125 23.9852 3.84525 24 5.71869 24H9.12481L11.4062 19.2133L13.6875 14.4266V7.21331V0H6.84375H0V7.21311ZM18.3125 7.21311V14.4262H21.7188H25.1252L22.8438 19.2131L20.5623 24H23.9998H27.4373L29.7187 19.2133L32 14.4266V7.21331V0H25.1562H18.3125V7.21311Z"
                  fill="#FCEC41"
                />
              </svg>
            </div>
            <p className={styles.rewiews__text}>
              Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная.
              Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур
              нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где
              надо было просверлить 4 отверстия, всего за 100 ₽
            </p>
            <div className={styles.rewiews__date}>21 марта 2022 г.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

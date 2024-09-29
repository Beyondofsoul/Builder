import React from 'react';

import styles from '../shared/Rewiews/Rewiews.module.scss';

type SliderParams = {
  name: string;
  imageUrl: string;
  text: string;
  date: string;
};

export const Sliders: React.FC<SliderParams> = ({ name, imageUrl, text, date }) => {
  return (
    <div>
      <div className={styles.rewiews__block}>
        <div className={styles.rewiews__block_header}>
          <div className={styles.rewiews__info}>
            <div className={styles.rewiews__avatar}>
              <img src={imageUrl} />
            </div>
            <div className={styles.rewiews__name}>{name}</div>
          </div>
          <svg
            width="32"
            height="24"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 7.21311V14.4262H3.40625C5.27969 14.4262 6.8125 14.441 6.8125 14.4592C6.8125 14.4773 5.8 16.6166 4.5625 19.2131C3.325 21.8096 2.3125 23.9489 2.3125 23.967C2.3125 23.9852 3.84525 24 5.71869 24H9.12481L11.4062 19.2133L13.6875 14.4266V7.21331V0H6.84375H0V7.21311ZM18.3125 7.21311V14.4262H21.7188H25.1252L22.8438 19.2131L20.5623 24H23.9998H27.4373L29.7187 19.2133L32 14.4266V7.21331V0H25.1562H18.3125V7.21311Z"
              fill="#FCEC41"
            />
          </svg>
        </div>
        <p className={styles.rewiews__text}>{text}</p>
        <div className={styles.rewiews__date}>{date}</div>
      </div>
    </div>
  );
};

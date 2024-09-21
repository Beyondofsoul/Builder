import React from 'react';

import styles from '../shared/Categories/Categories.module.scss';

type CategoriesBlockParams = {
  title: string;
  imageUrl: string;
};

export const CategoriesBlock: React.FC<CategoriesBlockParams> = ({ imageUrl, title }) => {
  return (
    <div>
      {' '}
      <div className={styles.categories__block}>
        <p className={styles.categories__block_title}>{title}</p>
        <img src={imageUrl} alt="" className={styles.categories__block_img} />
      </div>
    </div>
  );
};

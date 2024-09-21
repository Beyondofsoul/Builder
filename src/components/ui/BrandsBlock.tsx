import React from 'react';
import styles from '../shared/Brands/Brands.module.scss';

type BrandsBlockParams = {
  imageUrl: string;
};

export const BrandsBlock: React.FC<BrandsBlockParams> = ({ imageUrl }) => {
  return (
    <div>
      {' '}
      <div className={styles.brands__block}>
        <img src={imageUrl} alt="" className={styles.brands__img} />
      </div>
    </div>
  );
};

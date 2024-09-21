import React, { useEffect, useState } from 'react';
import styles from './Products.module.scss';
import axios from 'axios';
import { ProductsBlock } from '../../ui/ProductsBlock';

const src = 'https://66ed39ba380821644cdc08c3.mockapi.io/Products?page=1&limit=8';

export const Products: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get(src);
      await setProducts(response.data);
    }
    getProducts();
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.products__title}>Популярные товары</h2>
        <div className={styles.products}>
          {products.map((obj: any) => (
            <ProductsBlock key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
};

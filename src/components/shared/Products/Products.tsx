import styles from './Products.module.scss';

import { ProductsBlock } from '../../ui/ProductsBlock';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../redux/slices/ProductsSlice';
import { AppDispatch } from '../../../redux/store';
import { useEffect } from 'react';

export const Products: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: any) => state.product.items);

  useEffect(() => {
    dispatch(fetchProducts());
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

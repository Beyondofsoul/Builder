import { Link } from 'react-router-dom';
import { Footer } from '../components/shared/Footer/Footer';
import styles from '../scss/error.module.scss';

export const NotFound = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.error}>
          <h1 className={styles.error__title}>404</h1>
          <h2 className={styles.error__found}>Страница не найдена</h2>
          <p className={styles.error__description}>
            Неправильно набран адрес или такая страница больше
            <br /> не существует
          </p>
          <Link to="Builder" className={styles.error__btn_block}>
            <button className={styles.error__btn}>Перейти на главную</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

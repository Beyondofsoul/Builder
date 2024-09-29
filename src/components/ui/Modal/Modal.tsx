import { Search } from 'lucide-react';
import React from 'react';
import styles from './Modal.module.scss';
import { useDispatch } from 'react-redux';
import { close } from '../../../redux/slices/HeaderSlice';

export const Modal: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.modal__overlay}>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <h2 className={styles.modal__title}>Выберите ваш город</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={styles.modal__close}
            onClick={() => dispatch(close())}>
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
        <div className={styles.modal__block}>
          <div className={styles.modal__block_search}>
            <input type="text" placeholder="Поиск" className={styles.modal__input} />
            <Search className={styles.modal__search} />
          </div>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>Москва</li>
            <li className={styles.nav__item}>Екатеринбург</li>
            <li className={styles.nav__item}>Челябинск</li>
            <li className={styles.nav__item}>Уфа</li>
            <li className={styles.nav__item}>Воронеж</li>
          </ul>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>Санкт-Петербург</li>
            <li className={styles.nav__item}>Казань</li>
            <li className={styles.nav__item}>Самара</li>
            <li className={styles.nav__item}>Омск</li>
            <li className={styles.nav__item}>Пермь</li>
          </ul>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>Новосибирск</li>
            <li className={styles.nav__item}>Нижний Новгород</li>
            <li className={styles.nav__item}>Ростов-на-Дону</li>
            <li className={styles.nav__item}>Красноярск</li>
            <li className={styles.nav__item}>Волгоград</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

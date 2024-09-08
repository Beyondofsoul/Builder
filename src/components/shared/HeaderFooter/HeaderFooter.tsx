import React from 'react';
import styles from './HeaderFooter.module.scss';

export const HeaderFooter: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__items}>
              <a href="" className={styles.nav__link}>
                Акции
              </a>
            </li>
            <li className={styles.nav__items}>
              <a href="" className={styles.nav__link}>
                Строительные материалы
              </a>
            </li>
            <li className={styles.nav__items}>
              <a href="" className={styles.nav__link}>
                Керамическая плитка
              </a>
            </li>
            <li className={styles.nav__items}>
              <a href="" className={styles.nav__link}>
                Краски
              </a>
            </li>
            <li className={styles.nav__items}>
              <a href="" className={styles.nav__link}>
                Сантехника
              </a>
            </li>
            <li className={styles.nav__items}>
              <a href="" className={styles.nav__link}>
                Напольные покрытия
              </a>
            </li>
            <li className={styles.nav__items}>
              <a href="" className={styles.nav__link}>
                Инструменты
              </a>
            </li>
            <li className={styles.nav__items}>
              <a href="" className={styles.nav__link}>
                Обои
              </a>
            </li>
            <li className={styles.nav__items}>
              <a href="" className={styles.nav__link}>
                Окна
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

import React from 'react';
import styles from './Header.module.scss';
import { Box, MapPin, Search, ShoppingCart, User } from 'lucide-react';
import LogoPng from '../../../assets/Logo.svg';

import { HeaderFooter } from '../HeaderFooter/HeaderFooter';

export const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header__top}>
        <div className={styles.container}>
          <div className={styles.nav__top}>
            <div className={styles.nav__geo}>
              <MapPin />
              <div className={styles.geo__title}>Москва</div>
            </div>
            <nav>
              <ul className={styles.nav__top_list}>
                <li className={styles.nav__top_item}>
                  <a href="#" className={styles.nav__top_link}>
                    Бренды
                  </a>
                </li>
                <li className={styles.nav__top_item}>
                  <a href="#" className={styles.nav__top_link}>
                    Доставка
                  </a>
                </li>
                <li className={styles.nav__top_item}>
                  <a href="#" className={styles.nav__top_link}>
                    Возврат
                  </a>
                </li>
                <li className={styles.nav__top_item}>
                  <a href="#" className={styles.nav__top_link}>
                    Документация
                  </a>
                </li>
                <li className={styles.nav__top_item}>
                  <a href="#" className={styles.nav__top_link}>
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.nav__main}>
            <img src={LogoPng} alt="Logo" />
            <button className={styles.header__btn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <line x1="21" x2="3" y1="6" y2="6" />
                <line x1="15" x2="3" y1="12" y2="12" />
                <line x1="17" x2="3" y1="18" y2="18" />
              </svg>
              Каталог
            </button>
            <div className={styles.header__search_block}>
              <div className={styles.header__search}>
                <input type="text" placeholder="Поиск " className={styles.header__input} />

                <Search className={styles.header__icon} />
              </div>
            </div>
            <ul className={styles.nav__main_list}>
              <li className={styles.nav__main_profile}>
                <User className={styles.nav__main_svg} />
                <a href="#" className={styles.nav__main_user}>
                  Профиль
                </a>
              </li>
              <li className={styles.nav__main_orders}>
                <Box className={styles.nav__main_box} />
                <a href="#" className={styles.nav__main_order}>
                  Заказы
                </a>
              </li>
              <li className={styles.nav__main_cart}>
                <ShoppingCart className={styles.nav__main_svg} />
                <a href="#" className={styles.nav__main_cart}>
                  Корзина
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <HeaderFooter />
    </>
  );
};

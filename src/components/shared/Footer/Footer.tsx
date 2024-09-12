import React from 'react';
import styles from './Footer.module.scss';
import LogoFooter from '../../../assets/LogoFooter.svg';
import { Mail, MapPin } from 'lucide-react';
import Frame from '../../../assets/Frame 102.png';

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__about}>
          <div className={styles.footer__info}>
            <img src={LogoFooter} alt="" className={styles.footer__logo} />
            <div className={styles.footer__email}>
              <Mail />
              info@stroykastore.ru
            </div>
            <div className={styles.footer__location}>
              <MapPin />
              Москва, ул. Камушкина 10
            </div>
          </div>
          <nav>
            <div className={styles.nav}>
              <ul className={styles.nav__profile}>
                <li className={styles.nav__profile_item}>
                  <a href="#" className={styles.nav__profile_link}>
                    Личный кабинет
                  </a>
                </li>
                <li className={styles.nav__profile_item}>
                  <a href="#" className={styles.nav__profile_link}>
                    Заказы
                  </a>
                </li>
                <li className={styles.nav__profile_item}>
                  <a href="#" className={styles.nav__profile_link}>
                    Избранное
                  </a>
                </li>
                <li className={styles.nav__profile_item}>
                  <a href="#" className={styles.nav__profile_link}>
                    Корзина
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.nav}>
              <ul className={styles.nav__catalog}>
                <li className={styles.nav__catalog_item}>
                  <a href="#" className={styles.nav__catalog_link}>
                    Каталог
                  </a>
                </li>
                <li className={styles.nav__catalog_item}>
                  <a href="#" className={styles.nav__catalog_link}>
                    Акции
                  </a>
                </li>
                <li className={styles.nav__catalog_item}>
                  <a href="#" className={styles.nav__catalog_link}>
                    Бренды
                  </a>
                </li>
                <li className={styles.nav__catalog_item}>
                  <a href="#" className={styles.nav__catalog_link}>
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.nav}>
              <ul className={styles.nav__documentation}>
                <li className={styles.nav__documentation_item}>
                  <a href="#" className={styles.nav__documentation_link}>
                    Стать продавцом
                  </a>
                </li>
                <li className={styles.nav__documentation_item}>
                  <a href="#" className={styles.nav__documentation_link}>
                    Доставка
                  </a>
                </li>
                <li className={styles.nav__documentation_item}>
                  <a href="#" className={styles.nav__documentation_link}>
                    Возврат
                  </a>
                </li>
                <li className={styles.nav__documentation_item}>
                  <a href="#" className={styles.nav__documentation_link}>
                    Документация
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className={styles.footer__footer}>
          <p className={styles.footer__text}>© СтройкаСтор</p>
          <img src={Frame} alt="" />
          <p className={styles.footer__text}>Cделано в KRUGLOV STUDIO</p>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import styles from './About.module.scss';

export const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.about__title}>О компании</h2>
        <p className={styles.about__text}>
          В СтройкаСтор вы всегда можете купить все необходимые товары для ремонта домами дачи.
          Хотите сделать ремонт в квартире? Строите загородный дом? Используйте строительные и
          отделочные материалы из нашего каталога.
        </p>
        <p className={styles.about__text_footer}>
          Быстрая доставка строительных товаров по низким ценам сделает ваши покупки более
          приятными. Ремонт может стоить дешево, если делать его с нами. Для вас всегда в наличии
          более 30 000 товаров для строительства по низким ценам каждый день. СтройкаСтор — это
          широкий ассортимент товаров для дома и ремонта недорого; Возможность заказать строительные
          и отделочные материалы для дома и дачи.
        </p>
      </div>
    </div>
  );
};

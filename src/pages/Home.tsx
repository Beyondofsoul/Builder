import React from 'react';
import { Header } from '../components/shared/Header/Header';
import { Offers } from '../components/shared/Offers/Offers';
import { Rebate } from '../components/shared/Rebate/Rebate';
import { Categories } from '../components/shared/Categories/Categories';
import { Products } from '../components/shared/Products/Products';
import { Brands } from '../components/shared/Brands/Brands';
import { Rewiews } from '../components/shared/Rewiews/Rewiews';
import { About } from '../components/shared/About/About';
import { Footer } from '../components/shared/Footer/Footer';

export const Home = () => {
  return (
    <div>
      <Header />
      <Offers />
      <Rebate />
      <Categories />
      <Products />
      <Brands />
      <Rewiews />
      <About />
      <Footer />
    </div>
  );
};

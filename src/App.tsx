import { About } from './components/shared/About/About';
import { Brands } from './components/shared/Brands/Brands';
import { Categories } from './components/shared/Categories/Categories';
import { Footer } from './components/shared/Footer/Footer';
import { Header } from './components/shared/Header/Header';
import { Offers } from './components/shared/Offers/Offers';
import { Products } from './components/shared/Products/Products';
import { Rebate } from './components/shared/Rebate/Rebate';
import { Rewiews } from './components/shared/Rewiews/Rewiews';

function App() {
  return (
    <>
      <Header />
      <Offers />
      <Rebate />
      <Categories />
      <Products />
      <Brands />
      <Rewiews />
      <About />
      <Footer />
    </>
  );
}

export default App;

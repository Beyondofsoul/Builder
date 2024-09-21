import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/Builder" element={<Home />} />
        <Route path="/Builder/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

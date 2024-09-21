import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { NotFound } from './pages/NotFound.tsx';
import { Home } from 'lucide-react';
import { Cart } from './pages/Cart.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

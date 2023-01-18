// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';

import { ProductsProvider } from './contexts/productsContext';
import { CategoriesProvider } from './contexts/categoriesContext';

import './index.css';
import App from './App';

Chart.register(ArcElement, Tooltip, Legend, Title);

const app = document.getElementById('root');
const root = createRoot(app);

root.render(
  <ProductsProvider>
    <CategoriesProvider>
      <App />
    </CategoriesProvider>
  </ProductsProvider>
);

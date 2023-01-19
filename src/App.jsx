import { useContext } from 'react';

import { Nav } from './components/Nav';
import { Modal } from './components/Modal';
import { Product } from './components/Product';

import { ProductsContext } from './contexts/productsContext';
import { CategoriesContext } from './contexts/categoriesContext';

export default function App() {
  const { products } = useContext(ProductsContext);
  const { category } = useContext(CategoriesContext);

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className='relative'>
      <Nav />
      <div
        className={`mx-auto flex w-full max-w-[424px] flex-wrap items-end justify-center space-x-2 space-y-6 px-2 pt-10 pb-2 sm:space-x-4 md:max-w-[768px] md:space-x-6 xl:max-w-full`}
      >
        {filteredProducts.map(
          ({ id, title, price, image, category, description }) => (
            <Product
              key={id}
              title={title}
              price={price}
              image={image}
              category={category}
              description={description}
            />
          )
        )}
      </div>
      <Modal />
    </div>
  );
}

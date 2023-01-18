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
        className={`w-full flex justify-end items-end flex-wrap space-x-2 space-y-6 px-12 py-12 lg:px-14 xl:px-16 2xl:px-20 md:space-x-4 lg:space-x-6 xl:space-x-8 md:space-y-8 lg:space-y-9 xl:space-y-12`}
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

import { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((res) => setProducts([...res]))
        .catch((err) => console.log('Error : ', err));
    };
    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

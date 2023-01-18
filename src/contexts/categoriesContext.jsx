import { createContext, useState, useEffect } from 'react';

export const CategoriesContext = createContext({
  category: '',
  setCategory: () => {},
  categories: [],
  setCategories: () => {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchData = () => {
      fetch('https://fakestoreapi.com/products/categories')
        .then((res) => res.json())
        .then((res) => setCategories([...res]))
        .catch((err) => console.log('Error : ', err));
    };
    fetchData();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{ category, setCategory, categories, setCategories }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

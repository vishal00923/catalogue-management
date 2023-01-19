import { useContext } from 'react';
import { Pie } from 'react-chartjs-2';

import { capitalize } from '../constants/helper';
import { ProductsContext } from '../contexts/productsContext';
import { CategoriesContext } from '../contexts/categoriesContext';

export const PieChart = () => {
  const { products } = useContext(ProductsContext);
  const { categories } = useContext(CategoriesContext);

  const countOfEachCategoryProduct = {
    electronics: products.filter(
      (product) => product.category === 'electronics'
    ).length,
    jewelery: products.filter((product) => product.category === 'jewelery')
      .length,
    mens: products.filter((product) => product.category === "men's clothing")
      .length,
    womens: products.filter(
      (product) => product.category === "women's clothing"
    ).length,
  };

  const chartData = {
    labels: categories.map((category) => capitalize(category)),
    datasets: [
      {
        label: 'Quantity',
        data: [
          countOfEachCategoryProduct.electronics,
          countOfEachCategoryProduct.jewelery,
          countOfEachCategoryProduct.mens,
          countOfEachCategoryProduct.womens,
        ],
        backgroundColor: ['#d22b2b', '#e97451', '#ffc300', '#1fcecb'],
      },
    ],
  };

  return (
    <Pie
      data={chartData}
      options={{
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Categories in Catalogue',
          },
        },
      }}
    />
  );
};

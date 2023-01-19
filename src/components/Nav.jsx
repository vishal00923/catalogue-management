import { useContext } from 'react';
import { IoCart } from 'react-icons/io5';

import { capitalize } from '../constants/helper';
import { CategoriesContext } from '../contexts/categoriesContext';

export const Nav = () => {
  const { setCategory, categories } = useContext(CategoriesContext);

  const handleSelect = (event) => {
    const { value } = event.target;
    setCategory(value);
  };

  return (
    <nav className='flex w-full items-center justify-between bg-blue-600 py-2 px-2 md:px-4 lg:px-6 xl:px-8 2xl:px-10'>
      <div className='px-2 py-1'>
        <IoCart className='h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14' />
      </div>
      <div className='px-2 py-1'>
        <select onChange={handleSelect}>
          <option value=''>Select Category</option>
          {categories.map((category, idx) => (
            <option key={idx} value={category}>
              {capitalize(category)}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

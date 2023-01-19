import { useState } from 'react';
import { truncate } from '../constants/helper';

export const Product = ({ title, price, image, category, description }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className='relative flex h-[400px] w-[350px] flex-col items-center justify-center overflow-auto rounded-lg border-2 shadow-xl scrollbar-hide md:h-[450px] md:w-[325px] xl:w-[425px] 2xl:w-[350px]'>
      <div className='flex justify-center py-2'>
        <img className='h-[90px] w-[90px]' src={image} alt={title} />
        <h6 className='absolute top-0 right-0 bg-blue-500 px-4 py-2 text-sm text-white shadow-lg'>
          {category}
        </h6>
      </div>
      <div className='flex flex-col items-start justify-center space-y-2 px-5 py-5'>
        <p className='font-semibold'>{title}</p>
        <p>Price :- {`$${price}`}</p>
        {description.length > 120 ? (
          <div className='flex flex-col items-start space-y-2.5'>
            {readMore ? (
              <p className='text-sm'>{description}</p>
            ) : (
              <p className='text-sm'>{truncate(description, 120)}</p>
            )}
            <button
              onClick={() => setReadMore((prev) => !prev)}
              className='rounded-[3.5px] bg-black px-4 py-2 text-sm text-white shadow-lg'
            >
              {readMore ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ) : (
          <p className='text-sm'>{description}</p>
        )}
      </div>
    </div>
  );
};

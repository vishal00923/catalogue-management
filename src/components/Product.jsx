import { useState } from 'react';
import { truncate } from '../constants/helper';

export const Product = ({ title, price, image, category, description }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className='w-[398px] h-[398px] border-2 rounded-lg flex flex-col items-center justify-center relative shadow-xl overflow-auto'>
      <div className='flex justify-center py-2'>
        <img className='w-[90px] h-[90px]' src={image} alt={title} />
        <h6 className='absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 text-sm shadow-lg'>
          {category}
        </h6>
      </div>
      <div className='px-5 py-5 flex flex-col justify-center items-start space-y-2'>
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
              className='bg-black text-white rounded-[3.5px] text-sm px-4 py-2 shadow-lg'
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

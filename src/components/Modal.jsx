import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { PieChart } from './PieChart';

export const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className='flex items-center justify-center h-60'>
        <button
          onClick={() => setShowModal(true)}
          className='bg-blue-500 text-white font-semibold fixed bottom-12 right-10 px-5 py-2 rounded-sm shadow-lg'
        >
          ANALYSE
        </button>
      </div>
      {showModal ? (
        <>
          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div
              className='fixed inset-0 w-full h-full bg-black opacity-40'
              onClick={() => setShowModal(false)}
            ></div>
            <div className='flex items-center min-h-[100vh] px-4 py-8'>
              <div className='relative w-full p-4 max-w-[512px] mx-auto bg-white rounded-md shadow-lg'>
                <AiOutlineClose
                  onClick={() => setShowModal(false)}
                  className='w-5 h-5 absolute top-4 right-5 cursor-pointer'
                  color='black'
                />
                <div className='mt-3 sm:flex'>
                  <div className='mt-2 text-center sm:ml-4 sm:text-left'>
                    <h2 className='text-2xl font-semibold'>Pie Chart</h2>
                    <div className='px-16 py-4 text-center'>
                      <PieChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

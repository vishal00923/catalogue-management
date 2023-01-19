import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { PieChart } from './PieChart';

export const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className='flex h-60 items-center justify-center'>
        <button
          onClick={() => setShowModal(true)}
          className='fixed bottom-12 right-10 rounded-sm bg-blue-500 px-5 py-2 font-semibold text-white shadow-lg'
        >
          ANALYSE
        </button>
      </div>
      {showModal ? (
        <>
          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div
              className='fixed inset-0 h-full w-full bg-black opacity-40'
              onClick={() => setShowModal(false)}
            ></div>
            <div className='flex min-h-[100vh] items-center px-4 py-8'>
              <div className='relative mx-auto w-full max-w-[512px] rounded-md bg-white p-4 shadow-lg'>
                <AiOutlineClose
                  onClick={() => setShowModal(false)}
                  className='absolute top-4 right-5 h-5 w-5 cursor-pointer'
                  color='black'
                />
                <div className='mt-3'>
                  <div className='mt-2 text-center sm:ml-4 sm:text-left'>
                    <h2 className='text-2xl font-semibold'>Pie Chart</h2>
                    <div className='px-16 py-4'>
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

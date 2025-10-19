import React from 'react';
import CardLayout from './CardLayout';

const AiProducts = () => {
  return (
    <div className="px-4 md:px-16">
      <div className="flex flex-col md:flex-row items-center lg:w-full lg:h-[186px]  ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#0b1b29] font-semibold text-wrap md:w-3/5 lg:w-[625px] md:mr-4">
          Revolutionising Industries with Top{' '}
          <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-300 text-transparent bg-clip-text">AI Products</span>
        </h1>
        <p className="text-black text-base sm:text-base md:w-2/5 lg:w-[479px] md:ml-4 lg:ml-[228px] text-wrap font-medium mt-4 md:mt-0">
          Explore AI-Powered products Uniquely Designed to Meet Your Business Needs and Drive Innovation.
        </p>
      </div>
      <div>
      <CardLayout/>
      </div>
    </div>
  );
};

export default AiProducts;

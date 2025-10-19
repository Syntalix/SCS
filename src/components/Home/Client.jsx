'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { DiCoda } from 'react-icons/di';

const Client = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div className='flex justify-center items-center' ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className='w-full sm:w-11/12 md:w-10/12 lg:w-[1406px] h-auto lg:h-[124px] bg-white p-4 lg:p-0'
      >
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-center text-black text-lg lg:text-xl'
        >
          Trusted by 400+ Clients and 20 Company.
        </motion.h4>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='flex flex-wrap gap-8 lg:mt-14 justify-center'
        >
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              className='flex flex-col items-center'
            >
              <h3 className='text-black text-lg lg:text-2xl font-bold flex flex-row justify-center items-center'>
                <DiCoda /> starsup
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Client;

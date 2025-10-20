'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import cardImage from '/assets/Experience/cardImage.png'; // Replace with your image path

const Card = ({ title, subtitle, description }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col pb-1.5 rounded-2xl border border-solid  border-zinc-600 max-w-[350px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="flex gap-0 justify-center py-0.5 pr-1.5 pl-5 text-base font-bold leading-6 text-zinc-800">
        <div className="flex-1 my-auto">{title}</div>
        <img
          loading="lazy"
          className="shrink-0 w-11 aspect-square"
        />
      </div>
      <div className="flex flex-col px-5 w-full rounded-xl">
        <Image
          loading="lazy"
          src={cardImage}
          className="w-full h-auto border border-solid aspect-[1.15] border-zinc-600"
        />
        <div className="flex gap-0 justify-center text-gray-500 rounded-3xl">
          <div className="flex-1 my-auto text-sm font-semibold leading-5">
            {subtitle}
          </div>
          <div className="justify-center px-3.5 py-4 text-base font-bold leading-4 text-center whitespace-nowrap">
            trees
          </div>
        </div>
        <div className="text-sm leading-5 text-zinc-800">
          {description}
        </div>
        <div className="flex gap-5 justify-between text-center leading-[155%]">
          <div className="my-auto text-xs italic text-gray-400">
            Quote, caption
          </div>
          <div className="justify-center px-4 py-3 text-base whitespace-nowrap rounded-xl border border-solid bg-neutral-700 border-zinc-600 text-neutral-300">
            Action
          </div>
        </div>
      </div>
      <div className="flex gap-0 justify-center px-5 py-4 text-xs leading-3 text-zinc-800">
        <div className="flex-1">Card footer 1</div>
        <div className="flex-1 text-right">Card footer 2</div>
      </div>
    </motion.div>
  );
};

const CardLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20 gap-6 md:flex-row md:flex-wrap md:justify-center lg:gap-20">
      <Card
        title="Card Title 1"
        subtitle="Card Subtitle 1"
        description="This is a description for card 1."
      />
      <Card
        title="Card Title 2"
        subtitle="Card Subtitle 2"
        description="This is a description for card 2."
      />
      <Card
        title="Card Title 3"
        subtitle="Card Subtitle 3"
        description="This is a description for card 3."
      />
    </div>
  );
};

export default CardLayout;

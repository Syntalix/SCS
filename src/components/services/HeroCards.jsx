import React from 'react';

const cardData = [
  {
    id: 1,
    image: 'services/strategy.png',
    title: "Strategy Services",
    description: "This is a short description for card 1."
  },
  {
    id: 2,
    image: 'services/marketing.png',
    title: "Marketing Services",
    description: "This is a short description for card 2."
  },
  {
    id: 3,
    image: 'services/design.png',
    title: "Design Services",
    description: "This is a short description for card 3."
  },
  {
    id: 4,
    image: 'services/development.png',
    title: "Development Services",
    description: "This is a short description for card 4."
  },
  
];

const Card = ({ image, title, description }) => (
  <div className="bg-white bg-opacity-70  rounded-lg overflow-hidden p-4 flex flex-col">
    <img src={image} alt={title} className="w-[55%] h-[50%] object-cover" />
    <h3 className="mt-4 text-xl font-medium text-[#8447E9]">{title}</h3>
    <p className="mt-5 text-gray-600">{description}</p>
    <a className="mt-4  text-gray-900 ">Learn More</a>
  </div>
);

const CardGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
    {cardData.map(card => (
      <Card key={card.id} image={card.image} title={card.title} description={card.description} />
    ))}
  </div>
);

export default CardGrid;

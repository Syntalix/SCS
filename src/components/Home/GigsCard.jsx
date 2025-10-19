import Image from "next/image";

const Card = ({ imageSrc, title, description, buttonText }) => (
  <div className="bg-white rounded-xl overflow-hidden w-[90%] lg:w-[332px] h-auto mx-auto border hover:border-purple-600/70 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
    <div className="relative w-full h-48 lg:h-[168px]">
      <Image src={imageSrc} alt={title} />
    </div>
    <div className="p-4 lg:py-6 px-4">
      <h2 className="text-lg text-black lg:text-xl font-semibold mb-2">
        {title}
      </h2>
      <p className="text-sm lg:text-base text-gray-700 mb-4">{description}</p>
      <button className="bg-purple-500 text-white px-3 py-1 lg:px-4 lg:py-2 rounded">
        {buttonText}
      </button>
    </div>
  </div>
);

export default Card;

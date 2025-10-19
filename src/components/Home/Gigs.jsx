import React from "react";
import Card from "./GigsCard";
import img from "/assets/Gigs/gigs.png";
const Gigs = () => {
  return (
    <div className="max-w-6xl mx-auto
    
    ">
      <div className="flex flex-col md:flex-row  items-center lg:w-full lg:h-[186px] px-4 md:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#0b1b29] font-semibold text-wrap md:w-3/5 lg:w-[625px] md:mr-4">
          Explore Our{" "}
          <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-300 text-transparent bg-clip-text">
            GIGS
          </span>
        </h1>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <Card
            imageSrc={img}
            title="Card Title 1"
            description="This is a description for card 1."
            buttonText="Read More"
          />
          <Card
            imageSrc={img}
            title="Card Title 2"
            description="This is a description for card 2."
            buttonText="Read More"
          />
          <Card
            imageSrc={img}
            title="Card Title 3"
            description="This is a description for card 3."
            buttonText="Read More"
          />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-16">
          <Card
            imageSrc={img}
            title="Card Title 4"
            description="This is a description for card 4."
            buttonText="Read More"
          />
          <Card
            imageSrc={img}
            title="Card Title 5"
            description="This is a description for card 5."
            buttonText="Read More"
          />
          <Card
            imageSrc={img}
            title="Card Title 6"
            description="This is a description for card 6."
            buttonText="Read More"
          />
        </div>
      </div>
    </div>
  );
};

export default Gigs;

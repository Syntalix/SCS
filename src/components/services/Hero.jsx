import Image from 'next/image'
import React from 'react'
import CardGrid from './HeroCards'

const Hero = () => {
  return (
    <section className=''>
        <div className='mx-auto max-w-full md:max-w-[90%] lg:px-8 pt-8'>
            <div className='mx-auto max-w-full'>
            <p className="text-base font-semibold leading-7 uppercase bg-custom-gradient text-white rounded-xl w-fit mx-auto md:mx-0 px-4 py-1">
                       Services
            </p>
            <h2 className='text-black text-semibold text-4xl mt-4 mx-auto md:mx-0 px-4 md:px-4 md:max-w-[50%]'>Our agency experts will provide you with a full stack of services</h2>

            </div>
            <div className=" flex items-center justify-center">
    <CardGrid />
  </div>
            {/* <div className="flex flex-col p-9 space-y-14 mx-auto">
      <div className="flex flex-col items-center  w-full  max-md:max-w-full">
        
        <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[25%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-center md:text-left max-md:mt-10">
                <Image
                  loading="lazy"
                  src={img1}
                  className="self-center md:self-start max-w-full aspect-square w-[100px]"
                />
                <div className="mt-6 text-xl tracking-normal leading-6 text-[#8447E9]">
                Strategy services
                </div>
                <div className="mt-2 text-base tracking-normal leading-6 text-neutral-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quaerat perspiciatis harum aliquam mollitia
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5  w-[25%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-center  max-md:mt-10">
              <Image
                  loading="lazy"
                  src={img2}
                  className="self-center md:self-start max-w-full aspect-square w-[100px]"
                />
                <div className="mt-6 text-xl tracking-normal leading-6 text-[#8447E9] md:text-left">
                Marketing services
                </div>
                <div className="self-stretch mt-3 text-base tracking-normal leading-6 text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quaerat perspiciatis harum aliquam mollitia
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[25%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center text-center md:text-left max-md:mt-10">
              <Image
                  loading="lazy"
                  src={img3}
                  className="self-center md:self-start max-w-full aspect-square w-[100px]"
                />
                <div className="mt-6 text-xl tracking-normal leading-6 text-[#8447E9]">
                Design services
                </div>
                <div className="self-stretch mt-3 text-base tracking-normal leading-6 text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quaerat perspiciatis harum aliquam mollitia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[25%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center text-center md:text-left max-md:mt-10">
            <Image
                  loading="lazy"
                  src={img4}
                  className="self-center md:self-start max-w-full aspect-square w-[100px]"
                />
              <div className="mt-6 text-xl tracking-normal leading-6 text-[#8447E9]">
              Development 
              services
              </div>
              <div className="self-stretch mt-2 text-base tracking-normal leading-6 text-[]">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda commodi delectus exercitationem voluptates neque minima 
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[25%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center text-center md:text-left max-md:mt-10">
            <Image
                  loading="lazy"
                  src={''}
                  className="self-center max-w-full aspect-square w-[100px]"
                />
              <div className="self-stretch mt-6 text-xl  tracking-normal leading-6 text-[#8447E9]">
                AI Mobile Application Developers
              </div>
              <div className="mt-2 text-base tracking-normal leading-6 text-neutral-500">
                Integration of AI into mobile apps
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center text-center md:text-left max-md:mt-10">
            <Image
                  loading="lazy"
                  src={''}
                  className="self-center max-w-full aspect-square w-[100px]"
                />
              <div className="mt-6 text-xl  tracking-normal leading-6 text-[#8447E9]">
                Midjourney Artists
              </div>
              <div className="self-stretch mt-2 text-base tracking-normal leading-6 text-neutral-500">
                Prompt engineering and editing for artistic visuals
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
        </div>
    </section>
  )
}

export default Hero
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import david from "/assets/Testimonials/david.png";
import rohan from "/assets/Testimonials/Rohan.jpg";
import sara from "/assets/Testimonials/sara.jpg";
import julie from "/assets/Testimonials/julie.jpg";
import John from "/assets/Testimonials/john.jpg";
import Image from "next/image";
import Google from "/assets/Testimonials/google_Icon.png";
import Quote from "/assets/Testimonials/Quote.png";

const Card = [
  {
    name: "Jeff Schwartz",
    position: "Tech Entrepreneur, US",
    image: david,
    review:
      '"Amazing machine learning gurus. Found creative solutions to problems. Very fast turnaround. I have more work for these guys. I highly recommend them for AI projects."',
    rating: 5,
    duration: "2 weeks",
    budget: "₹15,000-₹25,000",
    project: "AI Recommendation System",
  },
  {
    name: "Priya Patel",
    position: "Startup Founder, India",
    image: julie,
    review:
      '"We have been working together for months, and I will continue with them. If you need AI devs, they will be your wise choice to advise you. Excellent AI Mobile Apps development! Price was very reasonable for the quality delivered."',
    rating: 5,
    duration: "4 days",
    budget: "₹9,000-₹18,000",
    project: "AI Mobile Apps",
  },
  {
    name: "Marcus Johnson",
    position: "CTO, TechCorp Australia",
    image: rohan,
    review:
      '"Syntalix delivered our e-commerce platform ahead of schedule with exceptional quality. Their team understood our requirements perfectly and provided innovative solutions we hadn\'t even considered. The payment integration was flawless!"',
    rating: 5,
    duration: "3 weeks",
    budget: "₹45,000-₹60,000",
    project: "E-commerce Website",
  },
  {
    name: "Ahmed Hassan",
    position: "Business Owner, Dubai",
    image: John,
    review:
      '"Syntalix transformed our business with their AI chatbot solution. Customer satisfaction increased by 40% and we reduced support costs significantly. The chatbot handles 80% of queries automatically. ROI achieved in just 2 months!"',
    rating: 5,
    duration: "1 week",
    budget: "₹20,000-₹35,000",
    project: "AI Chatbot Integration",
  },
  {
    name: "Rachel Williams",
    position: "Operations Director, London",
    image: sara,
    review:
      '"The predictive analytics dashboard they built for us has been a game-changer. We can now forecast demand with 95% accuracy and optimize inventory accordingly. The interface is intuitive and the insights are actionable."',
    rating: 5,
    duration: "2 weeks",
    budget: "₹35,000-₹50,000",
    project: "Predictive Analytics System",
  },
];

const TestimonialCard = ({ name, position, image, review }) => (
  <div className=" relative rounded-md flex flex-col  max-h-[350px] w-full flex-shrink-0 grow-0 ">
    <div className="flex flex-row justify-between bg-muted/60 dark:bg-muted/40 shadow-lg ring-1 ring-border hover:shadow-xl hover:ring-border/60 ">
      <Image
        src={Quote}
        alt="Google"
        className="absolute top-5 h-7 w-7 left-1"
      />
      <div className="h-[150px] overflow-y-auto text-foreground text-sm scrollbar m-5 ml-10 leading-6 pr-1 dark:text-foreground">
        <div className="flex flex-row float-left">
          <svg
            baseProfile="tiny"
            height="24px"
            id="Layer_1"
            version="1.2"
            viewBox="0 0 24 24"
            width="24px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#fb8e28"
          >
            <g>
              <g>
                <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z" />
              </g>
            </g>
          </svg>
          <svg
            baseProfile="tiny"
            height="24px"
            id="Layer_1"
            version="1.2"
            viewBox="0 0 24 24"
            width="24px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#fb8e28"
          >
            <g>
              <g>
                <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z" />
              </g>
            </g>
          </svg>
          <svg
            baseProfile="tiny"
            height="24px"
            id="Layer_1"
            version="1.2"
            viewBox="0 0 24 24"
            width="24px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#fb8e28"
          >
            <g>
              <g>
                <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z" />
              </g>
            </g>
          </svg>
          <svg
            baseProfile="tiny"
            height="24px"
            id="Layer_1"
            version="1.2"
            viewBox="0 0 24 24"
            width="24px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#fb8e28"
          >
            <g>
              <g>
                <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z" />
              </g>
            </g>
          </svg>
          <svg
            baseProfile="tiny"
            height="24px"
            id="Layer_1"
            version="1.2"
            viewBox="0 0 24 24"
            width="24px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#fb8e28"
          >
            <g>
              <g>
                <path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z" />
              </g>
            </g>
          </svg>
        </div>
        <p className="h-full">{review}</p>
      </div>
      <Image
        src={Google}
        alt="Google"
        className="absolute h-5 w-5 top-2 right-1.5 bg-[#FAFAFA] p-0.5"
      />
    </div>
    <svg
      enableBackground="new 0 0 48 48"
      height="48px"
      id="Layer_3"
      version="1.1"
      viewBox="0 0 48 48"
      width="48px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="-mt-2 h-6 w-6 ml-[10%]"
    >
      <polygon
        fill="hsl(var(--background))"
        points="0,12.438 48,12.438 24,35.56"
        className="border border-border"
      />
    </svg>
    <div className="flex gap-5 p-[5%] items-center">
      <Image
        src={image}
        alt="David"
        className="h-16 w-16 rounded-full object-cover"
      />
      <div className="flex flex-col gap-2">
        <span className="text-lg font-semibold text-primary"> {name}</span>
        <p className="text-sm text-muted-foreground font-semibold">
          {position}
        </p>
      </div>
    </div>
  </div>
);
// const TestCard=({name, position, image, review})=>{
//     <div class="rplg-slider-review">
//         <div class="rplg-box">
//             <div class="rplg-box-content">
//                 <div class="rplg-stars" data-info="5,google,">
//                     <svg viewBox="0 0 1792 1792" width="17" height="17">
//                         <use xlink:href="#rp-star" fill="#fb8e28"></use></svg><svg viewBox="0 0 1792 1792" width="17" height="17"><use xlink:href="#rp-star" fill="#fb8e28"></use></svg><svg viewBox="0 0 1792 1792" width="17" height="17"><use xlink:href="#rp-star" fill="#fb8e28"></use></svg><svg viewBox="0 0 1792 1792" width="17" height="17"><use xlink:href="#rp-star" fill="#fb8e28"></use></svg><svg viewBox="0 0 1792 1792" width="17" height="17"><use xlink:href="#rp-star" fill="#fb8e28"></use></svg>
//                 </div>
//                     <span class="rplg-review-text"> He was very professional. He traveled a distance for me without hesitation. The pictures turned out great. I will use him again. </span><span class="rplg-review-badge" data-badge="google"><span class="rplg-social-logo rplg-google-logo"><svg viewBox="0 0 512 512" width="44" height="44"><use xlink:href="#rp-logo-g"></use></svg></span></span></div>
//             </div>
//             <div class="rplg-row"><div class="rplg-row-left">
//                 <img alt="Laura Agdanowski" width="128" height="128" title="Laura Agdanowski" onerror="if(this.src!='https://montram.com/wp-content/plugins/business-reviews-bundle/assets/img/google_avatar.png')this.src='https://montram.com/wp-content/plugins/business-reviews-bundle/assets/img/google_avatar.png';" nitro-lazy-src="https://cdn-jjjfn.nitrocdn.com/sEPflrwEsXZinhDlumYKnWvFBoAATdzj/assets/desktop/optimized/a-/a0f5ad98bd97982cfa3b745181e482d0.ALV-UjU-h2hsVPiMmmyqsuXBLiVAMatIlGdXPMhJf2CPlW-2AdkdBGcB=s120-c-rp-mo-s128-br100" class="rplg-review-avatar lazyloaded" decoding="async" nitro-lazy-empty="" id="NzEyOjI0MDgx-1" src="https://cdn-jjjfn.nitrocdn.com/sEPflrwEsXZinhDlumYKnWvFBoAATdzj/assets/desktop/optimized/a-/a0f5ad98bd97982cfa3b745181e482d0.ALV-UjU-h2hsVPiMmmyqsuXBLiVAMatIlGdXPMhJf2CPlW-2AdkdBGcB=s120-c-rp-mo-s128-br100"></div><div class="rplg-row-right"><a href="https://search.google.com/local/reviews?placeid=ChIJr9ZiNGBZhYARj0KKYMt10ZE" class="rplg-review-name rplg-trim" target="_blank" rel="noopener nofollow" title="Laura Agdanowski">Laura Agdanowski</a><div class="rplg-review-time rplg-trim" data-time="1676512896">a year ago</div></div></div></div>
// }

export default function Testimonials() {
  return (
    <div className="w-4/5 sm:w-full py-10 pb-15 xl:px-20 lg:px-10 mx-auto sm:mx-0 bg-background">
      <div className="flex items-center justify-center flex-col gap-6 py-10">
        <p className="text-center text-xs font-semibold leading-7 uppercase bg-custom-gradient rounded-xl w-fit px-3 py-0 text-white lg:text-left ">
          Testimonials
        </p>
        <h2 className="text-5xl font-cabm text-foreground md:text-6xl max-w-lg text-center font-semibold">
          Why Customer&apos;s{" "}
          <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-300 text-transparent bg-clip-text">
            Love Us
          </span>
        </h2>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          700: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]} // Include the Pagination module
        // pagination={{ clickable: true }}
      >
        {Card.map((card, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

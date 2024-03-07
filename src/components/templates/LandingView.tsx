import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext, useState } from "react";
import Link from "next/link";
import { ViewContext, slideUp } from "@constants";
import { TwitterIcon, Button, WelcomeSection, ProductListItem, CardCarousel, LetsWorkLink, BackgroundImage } from "@components";
import Image from "next/image";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  const testimonialsData = [
    {
      id: 1,
      name: 'Scum',
      title: 'Founder of My Slimes',
      company: 'My Slimes',
      image: '/images/testimonials.png',
      testimonial: "The team was always contactable, honest in their opinions, and patient to work through challenges as they arose. Very collaborative, listening to the client's needs, but also coming up with usability solutions that we didn't know about.",
    },
    {
      id: 2,
      name: 'PencilX',
      title: 'Title',
      company: 'Rulebreakers',
      image: '/images/logo.png',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    },
    {
      id: 3,
      name: 'Zen0m',
      title: 'Title',
      company: 'Monster Friends',
      image: '/images/logo.png',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    },
    {
      id: 4,
      name: 'Calder Moore',
      title: 'Title',
      company: 'In Search Of',
      image: '/images/logo.png',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    },
  ];

  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonialsData[0]);

  return (
    <div className="relative w-full h-full items-center justify-center">

      <BackgroundImage />

      <div className="relative z-10">

        <WelcomeSection title1="Think. Design." title2="Develop. Launch." />
      
        <CardCarousel />

        <div className="mt-500 ml-10">
          <Button title="Our work" link="/projects" />
        </div>

        <hr className="border-gray-700 mt-20"></hr>

        <div className="mt-20 ml-10">
          <div className="pb-10">
            <p className="text-5xl text-custom-gray mb-3">Our services.</p>
            <p className="text-5xl mb-3">Design-led digital</p>
            <p className="text-5xl">products.</p>
          </div>

          <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
            <div>
              <ul className="list-none p-0">
                <ProductListItem number="1" title="Design" style="" />
                <ProductListItem number="2" title="Development" style="" />
                <ProductListItem number="3" title="Minting Tools" style="border-b-2" />
              </ul>
            </div>
            <div>
              <ul className="list-none p-0">
                <ProductListItem number="4" title="Discord Management" style="" />
                <ProductListItem number="5" title="Tech Support" style="" />
                <ProductListItem number="6" title="E-Commerce" style="border-b-2" />
              </ul>
            </div>
          </div>

          <div className="mt-20">
            <Button title="What we do" link="/services" />
          </div>

        </div>

        <hr className="border-gray-700 mt-20"></hr>

        <div className="mx-10 mt-20">
          <p className="text-custom-gray text-5xl mb-3">Testimonials.</p>
          <p className="text-5xl">Our wall of love.</p>

          <div className="mt-20">
            
            <div className="flex justify-between border-t border-b border-gray-600">
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`py-2 px-4 cursor-pointer ${
                    selectedTestimonial.id === testimonial.id ? 'border-b-2 border-white' : 'border-gray-600 text-custom-gray'
                  }`}
                  onClick={() => setSelectedTestimonial(testimonial)}
                >
                  <p>{testimonial.name}</p> 
                  <p>{testimonial.company}</p>
                </div>
              ))}
            </div>
    
            <div className="flex items-center mt-10">
              <div className="flex w-1/2">
                
                <Image
                  src="/images/testimonials.png"
                  alt={selectedTestimonial.name}
                  width={256}
                  height={256}
                  className="rounded-md"
                />

                <div className="ml-10">
                  
                  <div className="font-semibold text-2xl">{selectedTestimonial.name}</div>
                  <div className="text-custom-gray text-2xl">{selectedTestimonial.title}</div>

                  <div className="flex mt-2">
                    <span className="mr-2"><TwitterIcon /></span>
                    <Image
                      src="/images/placeholder.png"
                      alt="placeholder"
                      width={19}
                      height={16}
                      // className="rounded-md"
                    />
                  </div>
                </div>
              </div>

              <div className="ml-8 w-1/2">
                <div className="relative">
                  <Image
                    src="/images/quote.png"
                    alt="quote"
                    width={68}
                    height={65}
                    className="absolute left-0 top-0"
                  />
                  <p className="ml-4 text-4xl italic">{selectedTestimonial.testimonial}</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <hr className="border-gray-700 mt-20"></hr>

        <div className="ml-10 mt-20">
          <p className="text-5xl text-custom-gray mb-3">About ourselves.</p>
          <p className="text-5xl">Perfeggcionism freaks.</p>
        
          <div className="w-1/2 mt-10 text-xl">
            <p>At EXP, we specialise in building cutting-edge identity systems to help 
              professional service providers increase their value and gain a 
              competitive advantage from branding & websites.</p>
                  <br></br>
              <p>We’ve worked with some of the Canberra region’s finest builders, 
              architects and interior designers and take pride in our expansive 
              portfolio. We will continue to complete work on time and within 
              budget – without compromising quality or safety.</p>
          </div>

          <div className="mt-20">
            <Button title="About us" link="/about" />
          </div>
        </div>

        <hr className="border-gray-700 mt-20"></hr>

        <LetsWorkLink />

      </div>
    </div>
  );
};

export default LandingView;

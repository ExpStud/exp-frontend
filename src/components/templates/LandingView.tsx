import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext, useState } from "react";
import Link from "next/link";
import { ViewContext, slideUp } from "@constants";
import {
  TwitterIcon,
  Button,
  WelcomeSection,
  ProductListItem,
  CardCarousel,
  LetsWorkLink,
  BackgroundImage,
} from "@components";
import Image from "next/image";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

type Testimonial = {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
  testimonial: string;
  twitter: string;
  exchangeArt?: string;
  tensor?: string;
};

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Scum",
    title: "Founder of My Slimes",
    company: "My Slimes",
    image: "/images/testimonials/1-scum.jpg",
    testimonial:
      "The team was always contactable, honest in their opinions, and patient to work through challenges as they arose. Very collaborative, listening to the client's needs, but also coming up with usability solutions that we didn't know about.",
    twitter: "https://twitter.com/SCUMSOL",
    exchangeArt: "https://exchange.art/scum/series",
  },
  {
    id: 2,
    name: "Robbie Shilstone",
    title: "Founder of Publique",
    company: "Publique",
    image: "/images/testimonials/robbie.jpg",
    testimonial:
      "EXP went above and beyond to make Publique a success. No idea ever felt to big to implement. They were perfectly suited to create this experience exactly how I envisioned it.",
    twitter: "https://twitter.com/shilstone_arts",
    exchangeArt: "https://exchange.art/shilstone-arts/series",
  },
  {
    id: 3,
    name: "Calder Moore",
    title: "In Search Of",
    company: "In Search Of",
    image: "/images/testimonials/calder.gif",
    testimonial:
      "Commissioning EXP Studios was a great decision. They were super upfront about costs and worked with my budget to suit my needs. They provided works in progress along the way which I was always in absolutely in love with what they had done. Will definitely be returning to expand the website once it is ready to do so.",
    twitter: "https://twitter.com/CalderMoore_",
    exchangeArt: "https://exchange.art/caldermoore/series",
  },
  {
    id: 4,
    name: "Andy Rew",
    title: "Founder of CyberFrogs",
    company: "CyberFrogs",
    image: "/images/testimonials/39-andres.jpg",
    testimonial:
      'Working with EXP has felt like working with an extension of my core team. Their attentiveness, attention to detail and their understanding of complex systems and web3 intricacies has made our contracted work not only pain free, but enjoyable. The EXP team just "gets it" and they have helped amplify our products in ways I previously thought unobtainable with outside contractors. They approached our contract as if they were working on their own project.',
    twitter: "https://twitter.com/CyberFrogsNFT",
    tensor: "https://www.tensor.trade/trade/cyber_frogs",
  },
  {
    id: 5,
    name: "Zen0",
    title: "Founder of Monster Friends",
    company: "Monster Friends",
    image: "/images/testimonials/zen0.gif",
    testimonial:
      "EXP did an awesome job at building a showcase for my art releases, as well as a rarity explorer for my Glyphscapes collection. They were efficient and designed everything accurately to my spec, as well as being flexible when changes needed to be made. I look forward to working together again in the future! :)",
    twitter: "https://twitter.com/zen0m",
    exchangeArt: "https://exchange.art/zen0/series",
  },
];

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonialsData[0]
  );

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
                <ProductListItem
                  number="3"
                  title="Minting Tools"
                  style="border-b-2"
                />
              </ul>
            </div>
            <div>
              <ul className="list-none p-0">
                <ProductListItem
                  number="4"
                  title="Discord Management"
                  style=""
                />
                <ProductListItem number="5" title="Tech Support" style="" />
                <ProductListItem
                  number="6"
                  title="E-Commerce"
                  style="border-b-2"
                />
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
                    selectedTestimonial.id === testimonial.id
                      ? "border-b-2 border-white"
                      : "border-gray-600 text-custom-gray"
                  }`}
                  onClick={() => setSelectedTestimonial(testimonial)}
                >
                  <p>{testimonial.name}</p>
                  <p>{testimonial.company}</p>
                </div>
              ))}
            </div>

            <div className="flex items-start mt-10">
              <div className="flex w-1/2">
                <Image
                  src={selectedTestimonial.image}
                  alt={selectedTestimonial.name}
                  width={256}
                  height={256}
                  className="rounded-md"
                />

                <div className="ml-10">
                  <div className="font-semibold text-2xl">
                    {selectedTestimonial.name}
                  </div>
                  <div className="text-custom-gray text-2xl">
                    {selectedTestimonial.title}
                  </div>

                  <div className="flex mt-2">
                    <span className="mr-2">
                      <TwitterIcon href={selectedTestimonial.twitter} />
                    </span>
                    {selectedTestimonial?.exchangeArt && (
                      <a
                        href={selectedTestimonial?.exchangeArt}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.8802 6.93244e-06H1.4443C0.647658 6.93244e-06 0 0.644569 0 1.43679V10.8002C0 10.8002 4.21606e-07 12.2365 1.28249 12.2365H2.58532C3.88727 12.2365 3.87312 10.8218 3.87312 10.8218L3.89566 3.91822L10.8585 3.89523C10.8585 3.89523 12.3028 3.89523 12.3028 2.60522V1.29488C12.3028 -0.0145829 10.8806 6.93244e-06 10.8806 6.93244e-06H10.8802Z"
                            fill="white"
                          />
                          <path
                            d="M7.1365 18.0002H16.5724C17.369 18.0002 18.0167 17.3556 18.0167 16.5634V7.20001C18.0167 7.20001 18.0167 5.76367 16.7342 5.76367H15.4314C14.1294 5.76367 14.1436 7.17835 14.1436 7.17835L14.121 14.082L7.15816 14.105C7.15816 14.105 5.71387 14.105 5.71387 15.395V16.7053C5.71387 18.0148 7.13606 18.0002 7.13606 18.0002H7.1365Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    )}
                    {selectedTestimonial?.tensor && (
                      <a
                        href={selectedTestimonial?.tensor}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <svg
                          width="24"
                          height="20"
                          viewBox="0 0 24 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.0353 0L0 10.0656H4.38729L7.1407 7.31215V17.1054L10.0353 20V0ZM13.2527 0L23.288 10.0656H18.9007L16.1473 7.31215V17.1054L13.2527 20V0Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    )}
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
                  <p className="ml-4 text-4xl italic">
                    {selectedTestimonial.testimonial}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mt-20"></hr>

        <div className="ml-8 mt-20">
          <p className="text-5xl text-custom-gray mb-3">About ourselves.</p>
          <p className="text-5xl">Perfeggcionism freaks.</p>

          <div className="w-1/2 mt-10 text-xl">
            <p>
              At EXP, we specialise in building cutting-edge identity systems to
              help professional service providers increase their value and gain
              a competitive advantage from branding & websites.
            </p>
            <br></br>
            <p>
              We&apos;ve worked with some of the Canberra region&apos;s finest
              builders, architects and interior designers and take pride in our
              expansive portfolio. We will continue to complete work on time and
              within budget - without compromising quality or safety.
            </p>
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

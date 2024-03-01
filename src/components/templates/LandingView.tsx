import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext, useState } from "react";
import Link from "next/link";
import { ViewContext, slideUp } from "@constants";
import { TwitterIcon, Button, WelcomeSection } from "@components";
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
      name: "Scum",
      company: "My Slimes",
      image: "/images/logo.png",
      testimonial:
        "The team was always contactable, honest in their opinions, and patient to work through challenges as they arose. Very collaborative, listening to the client's needs, but also coming up with usability solutions that we didn't know about.",
    },
    {
      id: 2,
      name: "PencilX",
      company: "Rulebreakers",
      image: "/images/logo.png",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    },
    {
      id: 3,
      name: "Zen0m",
      company: "Monster Friends",
      image: "/images/logo.png",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    },
    {
      id: 4,
      name: "Calder Moore",
      company: "In Search Of",
      image: "/images/logo.png",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    },
  ];

  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonialsData[0]
  );

  return (
    <div className="relative w-full h-full items-center justify-cente">
      <WelcomeSection title1="Think. Design." title2="Develop. Launch." />

      <div className="container ml-128 p-10">
        <div className="mt-10">
          <Button title="Our work" link="/projects" />
        </div>
      </div>

      <hr className="border-gray-500"></hr>

      <div className="container ml-128 m-20">
        <div className="pb-10">
          <p className="text-5xl text-gray-500">Our Services.</p>
          <p className="text-5xl">Design-led digital</p>
          <p className="text-5xl">products.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <ul className="list-none p-0">
              <li className="flex items-center border-t-2 border-gray-500 border-dotted p-5">
                <span className="mr-2 text-gray-500 text-5xl">1</span>
                <span className="text-white text-2xl">Design</span>
              </li>
              <li className="flex items-center border-t-2 border-b-2 border-dotted border-gray-500 p-5">
                <span className="mr-2 text-gray-500 text-5xl">2</span>{" "}
                <span className="text-white text-2xl">Development</span>
              </li>
              <li className="flex items-center border-b-2 border-dotted border-gray-500 p-5">
                <span className="mr-2 text-gray-500 text-5xl">3</span>{" "}
                <span className="text-white text-2xl">Minting Tools</span>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="list-none p-0">
              <li className="flex items-center border-t-2 border-dotted border-gray-500 p-5">
                <span className="mr-2 text-gray-500 text-5xl">4</span>{" "}
                <span className="text-white text-2xl">Discord Management</span>
              </li>
              <li className="flex items-center border-t-2 border-b-2 border-dotted border-gray-500 p-5">
                <span className="mr-2 text-gray-500 text-5xl">5</span>{" "}
                <span className="text-white text-2xl">Tech Support</span>
              </li>
              <li className="flex items-center border-b-2 border-dotted border-gray-500 p-5">
                <span className="mr-2 text-gray-500 text-5xl">6</span>{" "}
                <span className="text-white text-2xl">E-Commerce</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <Button title="What we do" link="/services" />
        </div>
      </div>

      <div className="container ml-128 p-10">
        <p className="text-gray-500 text-5xl">Testimonials.</p>
        <p className="text-5xl">Our wall of love.</p>

        <div className="mt-8">
          <div className="flex justify-between border-t border-b">
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`py-2 px-4 cursor-pointer ${
                  selectedTestimonial.id === testimonial.id
                    ? "border-b-2 border-white"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedTestimonial(testimonial)}
              >
                <p>{testimonial.name}</p>
                <p>{testimonial.company}</p>
              </div>
            ))}
          </div>

          <div className="border-b p-4 flex items-center">
            <div className="flex items-center">
              <img
                src={selectedTestimonial.image}
                alt={selectedTestimonial.name}
                className="w-16 h-16 rounded-full"
              />

              <div className="ml-4">
                <div className="font-semibold">{selectedTestimonial.name}</div>
                <div className="text-gray-500">
                  {selectedTestimonial.company}
                </div>

                <div className="flex mt-2">
                  <span className="mr-2">Icon 1</span>
                  <span>Icon 2</span>
                </div>
              </div>
            </div>

            <div className="ml-8">
              <div className="relative">
                <div className="absolute left-0 top-0 text-4xl text-gray-500">
                  &ldquo;
                </div>
                <p className="ml-4">{selectedTestimonial.testimonial}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container ml-128 p-10">
        <p className="text-5xl text-gray-500">About ourselves.</p>
        <p className="text-5xl">Perfeggcionism freaks.</p>

        <div className="w-1/2 mt-10">
          <p>
            At EXP, we specialise in building cutting-edge identity systems to
            help professional service providers increase their value and gain a
            competitive advantage from branding & websites. We’ve worked with
            some of the Canberra region’s finest builders, architects and
            interior designers and take pride in our expansive portfolio. We
            will continue to complete work on time and within budget – without
            compromising quality or safety.
          </p>
        </div>

        <div className="mt-10">
          <Button title="About us" link="/about" />
        </div>
      </div>

      <div className="container ml-128 p-10 text-8xl">
        <Link href="/contact">
          <p>Let&apos;s work together.</p>
          <p>⟶</p>
        </Link>
      </div>

      {/* <motion.div {...slideUp(showView)}>
        <h2 className=" text-2xl md:text-6xl px-5 text-center">
          expstud.io coming soon
        </h2>
      </motion.div>
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
      >
        <TwitterIcon />
      </motion.div> */}
    </div>
  );
};

export default LandingView;

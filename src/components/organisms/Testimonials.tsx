import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { Client, clients } from "@constants";
import { TwitterIcon } from "@components";
import Image from "next/image";

const Testimonials: FC = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Client>(
    clients[0]
  );
  const [previousId, setPreviousId] = useState<number>(clients[0].id);
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right"
  >("right");

  const handleTestimonialChange = (testimonial: Client) => {
    setPreviousId(selectedTestimonial.id); // Store the current ID before changing
    setSelectedTestimonial(testimonial);
  };

  useEffect(() => {
    // Determine the animation direction based on ID comparison
    const direction =
      selectedTestimonial.id === previousId
        ? "right"
        : selectedTestimonial.id > previousId
        ? "right"
        : "left";
    setAnimationDirection(direction);
  }, [selectedTestimonial.id, previousId]);

  return (
    <div className="left-margin mt-20 max-w-[1265px] lg:pr-6">
      <p className="text-custom-gray text-5xl mb-3">Testimonials.</p>
      <p className="text-4xl md:text-5xl">Our wall of love.</p>

      <div className="mt-20 flex border-t border-b border-gray-600 overflow-x-auto">
        {clients.map((testimonial) => {
          if (testimonial.testimonial) {
            return (
              <div
                key={testimonial.id}
                className={`py-2 px-4 cursor-pointer w-full min-w-[160px] transition-500 border-b-2 ${
                  selectedTestimonial.id === testimonial.id
                    ? "border-white"
                    : "border-custom-black text-custom-gray hover:text-white"
                }`}
                onClick={() => handleTestimonialChange(testimonial)}
              >
                <p>{testimonial.name}</p>
                <p>{testimonial.company}</p>
              </div>
            );
          }
        })}
      </div>
      <div className="flex items-center h-full min-h-[400px]">
        <AnimatePresence mode="wait">
          <TestimonialItem
            selectedTestimonial={selectedTestimonial}
            key={selectedTestimonial.id}
            animationDirection={animationDirection}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

interface Props {
  selectedTestimonial: Client;
  animationDirection: "left" | "right";
}

const TestimonialItem: FC<Props> = (props: Props) => {
  const { selectedTestimonial, animationDirection } = props;
  console.log(
    animationDirection,
    selectedTestimonial.id,
    clients.length,
    selectedTestimonial.id === clients.length - 1
  );
  const slide =
    animationDirection === "right"
      ? {
          hidden: { opacity: 0, x: 150 },
          show: {
            opacity: 1,
            x: 0,
            transition: { delay: 0.2, duration: 0.4, ease: "linear" },
          },
          exit: {
            opacity: 0,
            x: selectedTestimonial.id === clients.length - 1 ? 150 : -150,
            transition: { duration: 0.4, ease: "linear" },
          },
        }
      : {
          hidden: { opacity: 0, x: -150 },
          show: {
            opacity: 1,
            x: 0,
            transition: { delay: 0.2, duration: 0.4, ease: "linear" },
          },
          exit: {
            opacity: 0,
            x: selectedTestimonial.id === 1 ? -150 : 150,
            transition: { duration: 0.4, ease: "linear" },
          },
        };

  return (
    <motion.div
      className="flex flex-col lg:flex-row items-start mt-10 pr-5 lg:pr-10 gap-10 "
      initial="hidden"
      animate="show"
      exit="exit"
      variants={slide}
      key={selectedTestimonial.name}
    >
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <Image
          src={selectedTestimonial.image}
          alt={selectedTestimonial.name}
          width={256}
          height={256}
          className="rounded-md"
        />

        <div className="flex flex-col items-start">
          <div className="text-2xl">{selectedTestimonial.name}</div>
          <div className="text-custom-gray text-2xl">
            {selectedTestimonial.title}
          </div>

          <div className="flex mt-6">
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

      <div className="lg:ml-8 lg:w-1/2">
        <div className="relative">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/quote.png`}
            alt="quote"
            width={68}
            height={65}
            className="absolute left-0 top-0"
          />
          <p className="ml-4 text-xl md:text-3xl xl:text-4xl italic">
            {selectedTestimonial.testimonial}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;

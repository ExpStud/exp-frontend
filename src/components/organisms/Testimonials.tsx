import { AnimatePresence } from "framer-motion";
import { FC, useRef, useState } from "react";
import { Client, clients } from "@constants";
import { TestimonialsItem } from "@components";

const Testimonials: FC = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Client>(
    clients[0]
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTestimonialChange = (testimonial: Client, index: number) => {
    setSelectedTestimonial(testimonial);

    // Scroll the selected testimonial into view
    const container = containerRef.current;
    const selectedElement = container?.children[index] as HTMLElement;

    if (selectedElement) {
      selectedElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center", // Ensures horizontal scrolling
      });
    }
  };

  return (
    <div className="min-h-[100svh] xl:min-h-full xl:h-[100svh] max-h-[1080px] lg:flex justify-center border-b border-white border-opacity-10 font-barlow">
      <div className=" px-5 xl:px-0 max-w-[1256px] py-10 xl:py-20">
        <p className="text-custom-gray text-5xl mb-3 font-barlow">
          Testimonials.
        </p>
        <p className="text-4xl md:text-5xl text-sand font-barlow">
          Our wall of love.
        </p>

        <div
          className="mt-20 flex border-b border-white/20 overflow-x-auto"
          ref={containerRef}
        >
          {clients.map((testimonial, index) => {
            if (testimonial.testimonial) {
              return (
                <div
                  key={testimonial.id}
                  className={`py-2 px-4 cursor-pointer w-full min-w-[160px] transition-500 border-b-2 ${
                    selectedTestimonial.id === testimonial.id
                      ? "border-sand"
                      : "border-custom-black text-custom-gray hover:text-white"
                  }`}
                  onClick={() => handleTestimonialChange(testimonial, index)}
                >
                  <p>{testimonial.name}</p>
                  <p>{testimonial.company}</p>
                </div>
              );
            }
          })}
        </div>
        <div className="flex items-start h-full min-h-[400px]">
          <AnimatePresence mode="wait">
            <TestimonialsItem
              selectedTestimonial={selectedTestimonial}
              key={selectedTestimonial.id}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

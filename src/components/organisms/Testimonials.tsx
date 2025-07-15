import { AnimatePresence } from "framer-motion";
import { FC, useRef, useState } from "react";
import { Client, clients } from "@constants";
import { TestimonialsItem } from "@components";
import { useWindowSize } from "@hooks";

const Testimonials: FC = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Client>(
    clients[0]
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [winWidth] = useWindowSize();

  const handleTestimonialChange = (testimonial: Client, index: number) => {
    setSelectedTestimonial(testimonial);

    // Scroll the selected testimonial into view
    const container = containerRef.current;
    const selectedElement = container?.children[index] as HTMLElement;

    if (selectedElement && winWidth < 640) {
      selectedElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center", // Ensures horizontal scrolling
      });
    }
  };

  return (
    <div className="landing-container lg:flex justify-center overflow-hidden  vertical-padding">
      <div className="max-w-[1256px] ">
        <h2 className="mb-3">Testimonials.</h2>
        <h2 className="text-sand">Our wall of love.</h2>

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
                      : "border-custom-black text-grayscale-200 hover:text-white"
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

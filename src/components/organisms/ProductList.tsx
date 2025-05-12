import { FC, useRef } from "react";
import { Button, ProductListItem } from "@components";
import { PRODUCT_LIST } from "@constants";
import { motion, useInView } from "framer-motion";
import { useViewStore } from "@contexts";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.6 },
  },
};

const ProductList: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40% 0px" });
  const { showView } = useViewStore();

  return (
    <motion.div
      ref={ref}
      className="landing-container col-centered"
      variants={containerVariants}
      initial="hidden"
      animate={isInView && showView ? "visible" : "hidden"}
    >
      <div className="flex flex-col xl:flex-row items-start justify-center gap-14 xl:gap-40 2xl:gap-64 vertical-padding">
        <div className="flex flex-col gap-5 md:w-[410px] h-full justify-between">
          <div className="flex flex-col gap-8">
            <p className="text-4xl md:text-5xl font-normal !leading-[1.3] tracking-wide md:min-w-[380px] font-primary">
              Aesthetic digital products.
            </p>
            <p className="text-custom-gray text-lg xl:text-xl font-regular !tracking-wide ">
              At Sandbox Studio, we specialize in providing best-in-class web
              design, brand design, and web development services, tailored to
              our individual client needs.
            </p>
          </div>
          <p className="text-custom-gray text-lg xl:text-xl font-regular">
            Curious to learn more?
          </p>
          <Button
            title="Check full list of services"
            link="/services"
            className="!min-w-[306px] h-[48px]"
          />
        </div>

        <motion.div
          className="flex flex-col gap-6 md:gap-10 w-full"
          variants={containerVariants}
        >
          <motion.p
            className="text-white/60 text-xl xl:text-3xl font-regular !tracking-wide font-primary"
            variants={fadeInUp}
          >
            Our services.
          </motion.p>

          <div className="flex flex-col w-full">
            {PRODUCT_LIST.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <ProductListItem icon={item.icon} title={item.title} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductList;

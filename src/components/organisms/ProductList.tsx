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

// Parent container animation
// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2, // Delay between child animations
//       delayChildren: 0.3, // Delay before starting child animations
//     },
//   },
// };

// // Child element animation
// const childVariants = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

const ProductList: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-25% 0px" });
  const { showView } = useViewStore();

  return (
    <motion.div
      ref={ref}
      className="min-h-[100svh] xl:min-h-full xl:h-[100svh] max-h-[1080px] w-full col-centered px-5 lg:px-0"
      variants={containerVariants}
      initial="hidden"
      animate={isInView && showView ? "visible" : "hidden"}
    >
      <div className="flex flex-col lg:flex-row items-start justify-center gap-14 xl:gap-40 2xl:gap-64 py-10">
        <motion.div
          className="flex flex-col gap-5 md:w-[410px] h-full justify-between"
          variants={containerVariants}
        >
          <div className="flex flex-col gap-8">
            <motion.p
              className="text-4xl md:text-5xl font-normal !leading-[1.3] tracking-wide"
              variants={fadeInUp}
            >
              Design-led digital products.
            </motion.p>
            <motion.p
              className="text-custom-gray text-lg lg:text-xl font-regular !tracking-wide font-barlow"
              variants={fadeInUp}
            >
              Founded in January 2023, Sandbox Studio emerged from the nearly
              decade-long partnership between Miguel Corzo and Wallace Palmer.
              Having spent over ten years working together, our collaborative
              journey began in diverse industries.
            </motion.p>
          </div>

          <motion.div variants={fadeInUp}>
            <Button
              title="Check full list of services"
              link="/services"
              className="!min-w-[306px] h-[48px]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-10"
          variants={containerVariants}
        >
          <motion.p
            className="text-white/60 text-xl lg:text-3xl font-regular !tracking-wide font-barlow"
            variants={fadeInUp}
          >
            Our services.
          </motion.p>

          <div className="flex flex-col">
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

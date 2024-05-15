import Link from "next/link";
import { FC, HTMLAttributes, useEffect, useState } from "react";
import { CloseIcon, ExpIcon, MenuIcon } from "@components";
import { AnimatePresence, motion } from "framer-motion";
import {
  fastExitAnimation,
  menuItemVariants,
  midExitAnimation,
  openMenuVariants,
} from "@constants";
import Image from "next/image";
import { useRouter } from "next/router";
import { useWindowSize } from "src/hooks";

const parentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // This will delay the animation of each child by 0.2 seconds
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -5, x: 20 },
  show: { opacity: 1, y: 0, x: 0, transition: { duration: 0.3 } },
};

const item2Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

const Navigation: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { ...componentProps } = props;

  const [open, setOpen] = useState(false);
  const [winWidth] = useWindowSize();

  //stop page scroll (when modal or menu open)
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  return (
    <div
      className={`z-50 h-[100vh] w-12 md:w-16 flex flex-col text-gray-100 ${
        componentProps.className ?? ""
      }`}
    >
      {winWidth && (
        <motion.div
          className="z-20 fixed top-0 left-0 bottom-0 bg-black flex flex-col items-start justify-between py-7 px-2 md:px-4"
          variants={openMenuVariants(
            winWidth < 768 ? 48 : 64,
            winWidth < 900 ? winWidth : 800
          )}
          initial="closed"
          animate={open ? "open" : "closed"}
        >
          <AnimatePresence mode="wait">
            {!open ? (
              <motion.div key="closed">
                <MenuIcon
                  onClick={() => setOpen(!open)}
                  className="scale-90 md:scale-100 z-50"
                />
              </motion.div>
            ) : (
              <motion.div key="opened" {...fastExitAnimation}>
                <CloseIcon
                  onClick={() => setOpen(!open)}
                  className="scale-90 md:scale-100 z-50"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                {...menuItemVariants}
                className=" h-full pl-16 md:pl-32 z-0"
              >
                <motion.div
                  className="flex flex-col gap-8"
                  // {...menuItemVariants}
                  variants={parentVariants}
                  initial="hidden"
                  animate="show"
                >
                  <NavigationItem href="/">Home</NavigationItem>
                  <NavigationItem href="/projects">Our work</NavigationItem>
                  <NavigationItem href="/services">What we do</NavigationItem>
                  <NavigationItem href="/about">About us</NavigationItem>
                  <NavigationItem href="/contact">Contact us</NavigationItem>

                  <div className="flex flex-col gap-2 pt-12">
                    <motion.p variants={item2Variants} className="opacity-60">
                      Follow us
                    </motion.p>
                    <motion.a
                      variants={item2Variants}
                      href="https://www.instagram.com/expstudio_/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Instagram
                    </motion.a>
                    <motion.a
                      variants={item2Variants}
                      href="https://twitter.com/rulebreakers___"
                      rel="noreferrer"
                      target="_blank"
                    >
                      LinkdIn
                    </motion.a>
                    <motion.a
                      variants={item2Variants}
                      href="https://twitter.com/exp_studio_"
                      rel="noreferrer"
                      target="_blank"
                    >
                      X
                    </motion.a>
                  </div>
                  {/*  corner image */}
                  <Image
                    src="/images/exp-corner.svg"
                    alt="exp"
                    width={673}
                    height={637}
                    className="absolute top-0 right-0 -z-10 w-3/4 lg:w-auto"
                  />
                </motion.div>
              </motion.div>
            ) : (
              <></>
            )}
          </AnimatePresence>

          <ExpIcon className="scale-90 md:scale-100 fixed bottom-7" />
        </motion.div>
      )}
      {/* background shadow */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="z-0 fixed inset-0 bg-background-black bg-opacity-80 "
            onClick={() => setOpen(false)}
            {...midExitAnimation}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

interface NavigationItemProps {
  children: React.ReactNode;
  href: string;
}
const NavigationItem: FC<NavigationItemProps> = (
  props: NavigationItemProps
) => {
  const { children, href } = props;

  const router = useRouter();
  const active = router.asPath === href;

  return (
    <motion.div variants={itemVariants}>
      <Link
        href={href}
        className={`text-4xl lg:text-5xl transition-200 hover:opacity-100 ${
          active ? "opacity-100" : "opacity-60"
        }`}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default Navigation;

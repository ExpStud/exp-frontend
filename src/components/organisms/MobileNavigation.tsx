import Link from "next/link";
import {
  FC,
  HTMLAttributes,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { ExpIcon, TwoLinesIcon } from "@components";
import {
  AnimatePresence,
  Variants,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import Image from "next/image";
import { useRouter } from "next/router";
import { useWindowSize } from "src/hooks";

interface Props extends HTMLAttributes<HTMLDivElement> {
  showHeader?: boolean;
  type?: string;
  scrollRef: RefObject<HTMLDivElement>;
}

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

const MobileNavigation: FC<Props> = (props: Props) => {
  const {
    type = "scroll",
    showHeader = true,
    scrollRef,
    ...componentProps
  } = props;

  const [open, setOpen] = useState(false);

  // stop page scroll (when modal or menu open)
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  return (
    <>
      <motion.div
        className={`cursor-pointer fixed right-3 top-3 z-50 h-14 w-14 bg-background-black rounded-full flex items-center justify-center ${componentProps.className}`}
        onClick={() => setOpen(!open)}
      >
        <TwoLinesIcon animate={open} />
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-x-0 top-0 bottom-0 bg-custom-black z-10"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.div
              className="flex flex-col gap-4 items-start h-full ml-5 lg:ml-10 mt-20"
              variants={parentVariants}
              initial="hidden"
              animate="show"
            >
              <MobileNavigationItem href="/">Home</MobileNavigationItem>
              <MobileNavigationItem href="/projects">
                Our work
              </MobileNavigationItem>
              <MobileNavigationItem href="/services">
                What we do
              </MobileNavigationItem>
              <MobileNavigationItem href="/about">
                About us
              </MobileNavigationItem>
              <MobileNavigationItem href="/contact">
                Contact us
              </MobileNavigationItem>
              <motion.div variants={item2Variants}>
                <Image
                  src="/images/exp-corner.svg"
                  alt="exp"
                  width={673}
                  height={637}
                  className="absolute rotate-90 bottom-0 right-0 -z-20"
                />
              </motion.div>
              <motion.div className="flex flex-col gap-0 pt-12 text-lg">
                <motion.p
                  className="opacity-60 text-white/60"
                  variants={item2Variants}
                >
                  Follow us
                </motion.p>
                <motion.a
                  href="https://www.instagram.com/expstudio_/"
                  rel="noreferrer"
                  target="_blank"
                  variants={item2Variants}
                >
                  Instagram
                </motion.a>
                <motion.a
                  href="https://twitter.com/rulebreakers___"
                  rel="noreferrer"
                  target="_blank"
                  variants={item2Variants}
                >
                  LinkdIn
                </motion.a>
                <motion.a
                  href="https://twitter.com/exp_studio_"
                  rel="noreferrer"
                  target="_blank"
                  variants={item2Variants}
                >
                  X
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
    // </header>
  );
};

interface NIProps {
  children: React.ReactNode;
  href: string;
}
const MobileNavigationItem: FC<NIProps> = (props: NIProps) => {
  const { children, href } = props;

  const router = useRouter();
  const active = router.asPath === href;

  return (
    <motion.div variants={itemVariants}>
      <Link
        href={href}
        className={`text-5xl transition-200 hover:opacity-100  ${
          active ? "opacity-100" : "opacity-60"
        }`}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default MobileNavigation;

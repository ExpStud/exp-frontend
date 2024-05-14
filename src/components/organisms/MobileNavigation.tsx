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
import {
  dropdownAnimations,
  dropdownItemsAnimations,
  midExitAnimation,
} from "src/constants";

interface Props extends HTMLAttributes<HTMLDivElement> {
  showHeader?: boolean;
  type?: string;
  scrollRef: RefObject<HTMLDivElement>;
}
const MobileNavigation: FC<Props> = (props: Props) => {
  const {
    type = "scroll",
    showHeader = true,
    scrollRef,
    ...componentProps
  } = props;

  const [open, setOpen] = useState(false);

  const [animateHeader, setAnimateHeader] = useState<boolean>(false);
  const [winWidth] = useWindowSize();

  //scroll variables
  const counterRef = useRef<number>();
  const { scrollY, scrollYProgress } = useScroll({ container: scrollRef });

  const height = 104;
  const headerVariants: Variants = {
    show: {
      y: 0,
      transition: {
        delay: 0.25,
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    hidden: {
      y: -height,
      transition: {
        delay: 0.25,
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log("Scroll", latest);

    // if (latest > 0.95) setAnimateHeader(true);
    if (latest < 0.01) setAnimateHeader(true);
  });

  //hide header on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Scroll", latest);

    //first instance
    if (counterRef.current === undefined) {
      setAnimateHeader(false);
      counterRef.current = latest;
      return;
    }

    //scroll down
    if (counterRef.current < latest) {
      if (counterRef.current + 30 < latest) {
        setAnimateHeader(false);
        counterRef.current = latest;
      }
      return;
    }

    //scroll up
    if (counterRef.current > latest) {
      if (counterRef.current > latest + 30) {
        setAnimateHeader(true);
        counterRef.current = latest;
      }
      return;
    }
  });

  useEffect(() => {
    setAnimateHeader(showHeader);
  }, [showHeader]);

  // stop page scroll (when modal or menu open)
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  return (
    <header
      className={`top-0 z-50 w-full h-0 ${type === "scroll" ? "fixed" : type} ${
        componentProps.className ?? ""
      } `}
    >
      <motion.div
        variants={headerVariants}
        initial={showHeader ? "show" : "hidden"}
        animate={animateHeader ? "show" : "hidden"}
        className="h-16 w-screen bg-custom-black flex justify-between px-5 md:px-10 items-center "
      >
        <ExpIcon className="scale-90 md:scale-100 " animate={false} />
        <TwoLinesIcon animate={open} onClick={() => setOpen(!open)} />
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-x-0 top-10 bottom-0 bg-custom-black -z-10"
              {...midExitAnimation}
            >
              <motion.div
                className="flex flex-col gap-8 items-start h-full ml-5 lg:ml-10 mt-20"
                {...dropdownAnimations}
                initial="hidden"
                animate="show"
              >
                <NavigationItem href="/">Home</NavigationItem>
                <NavigationItem href="/projects">Our work</NavigationItem>
                <NavigationItem href="/services">What we do</NavigationItem>
                <NavigationItem href="/about">About us</NavigationItem>
                <NavigationItem href="/contact">Contact us</NavigationItem>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  src="/images/exp-corner.svg"
                  alt="exp"
                  width={673}
                  height={637}
                  className="absolute rotate-90 bottom-0 right-0 -z-10"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
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
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{
      //   duration: 0.4,
      //   ease: "easeInOut",
      //   type: "spring",
      //   stiffness: 300,
      //   damping: 24,
      // }}
      variants={dropdownItemsAnimations}
    >
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

export default MobileNavigation;

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
    console.log("Scroll", latest);
    // if (latest > 0.95) setAnimateHeader(true);
    if (latest < 0.01) setAnimateHeader(true);
  });

  //hide header on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Scroll", latest);
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

  //stop page scroll (when modal or menu open)
  // useEffect(() => {
  //   if (open) document.body.style.overflow = "hidden";
  //   else document.body.style.overflow = "auto";
  // }, [open]);

  return (
    // <header
    //   className={`absolute top-0 z-10 h-16 w-screen bg-custom-black flex justify-between px-5 md:px-10 items-center  ${
    //     componentProps.className ?? ""
    //   }`}
    // >

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
        <ExpIcon className="scale-90 md:scale-100 " />
        <TwoLinesIcon animate={open} onClick={() => setOpen(!open)} />
      </motion.div>
    </header>
    // <>
    //   <div className="fixed col-centered z-10 left-5 top-5 bg-custom-black h-14 w-14 rounded-full">
    //     <ExpIcon className=" scale-90 md:scale-100 " />
    //   </div>
    //   <div className="fixed col-centered z-10 right-5 top-5 bg-custom-black h-14 w-14 rounded-full">
    //     <TwoLinesIcon animate={open} onClick={() => setOpen(!open)} />
    //   </div>
    // </>
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
    <Link
      href={href}
      className={`text-4xl lg:text-5xl transition-200 hover:opacity-100 ${
        active ? "opacity-100" : "opacity-60"
      }`}
    >
      {children}
    </Link>
  );
};

export default MobileNavigation;

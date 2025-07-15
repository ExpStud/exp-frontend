import { FC, useEffect, useRef, useState } from "react";
import {
  motion,
  useCycle,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import {
  TwoLinesIcon,
  NavigationMenu,
  Logo,
  NavigationItem,
} from "@components";
import { menuItems, midEnterAnimation } from "@constants";
import { useWindowSize } from "@hooks";

interface Props {
  showHeader?: boolean; //used to show header if isStatic is false
  headerType?: string;
}

const Header: FC<Props> = (props: Props) => {
  const { headerType = "scroll", showHeader = true } = props;

  const [animateHeader, setAnimateHeader] = useState<boolean>(true);

  //scroll variables
  const scrollRef = useRef<number>();
  const { scrollY } = useScroll();

  //hide header on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("scrollY", latest);
    //first instance
    if (scrollRef.current === undefined) {
      // setAnimateHeader(false);
      scrollRef.current = latest;
      return;
    }

    //set true above scroll threshold
    if (latest < 30) {
      setAnimateHeader(true);
      scrollRef.current = latest;
      return;
    }

    //scroll down
    if (scrollRef.current < latest) {
      if (scrollRef.current + 30 < latest) {
        setAnimateHeader(false);
        scrollRef.current = latest;
      }
      return;
    }
  });

  useEffect(() => {
    setAnimateHeader(showHeader);
  }, [showHeader]);

  // Check initial scroll position on mount
  useEffect(() => {
    if (scrollY.get() > 30) {
      setAnimateHeader(false); // Hide header if already scrolled down
    } else {
      setAnimateHeader(true); // Show header if near the top
    }
  }, [scrollY]);

  return (
    <header
      className={`top-0 z-50 transition-all duration-500 w-full ${
        headerType === "scroll" ? "fixed" : headerType
      } `}
    >
      {headerType !== "scroll" ? (
        <HeaderItems />
      ) : (
        <motion.div
          className={`transition-200 ${animateHeader ? "" : "bg-black"} `}
        >
          <HeaderItems />
        </motion.div>
      )}
    </header>
  );
};

const HeaderItems: FC = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const [winWidth] = useWindowSize();

  return (
    <motion.div
      className="page-px flex items-center justify-between w-full py-4 md:py-8 z-20 bg-transparent"
      {...midEnterAnimation}
    >
      <Link href="/" className="text-sand-300 text-2xl md:text-3xl font-bold">
        <Logo type="small" />
      </Link>
      {winWidth > 768 ? (
        <nav className="row-centered gap-8 lg:gap-14">
          {menuItems.map((item, index) => (
            <NavigationItem key={index} item={item} />
          ))}
          <Link
            href={menuItems[menuItems.length - 1].href}
            className={`text-base font-barlow font-semibold w-[166px] h-[36px] col-centered rounded-3xl 
              transition-200 text-black bg-sand hover:text-sand-300 hover:bg-batman border-2 border-sand 
              
              `}
          >
            Get an Estimate
          </Link>
        </nav>
      ) : (
        <>
          <TwoLinesIcon
            animate={open}
            onClick={() => cycleOpen()}
            className="z-[100]"
          />
          <NavigationMenu open={open} toggleMenu={cycleOpen} />
        </>
      )}
    </motion.div>
  );
};
export default Header;

import { FC, useEffect, useRef, useState } from "react";
import {
  motion,
  useCycle,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { TwoLinesIcon, NavigationMenu } from "@components";
import { midEnterAnimation } from "@constants";

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
    //first instance
    if (scrollRef.current === undefined) {
      setAnimateHeader(false);
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

  return (
    <header
      className={`top-0 z-10 transition-all duration-500 w-full ${
        headerType === "scroll" ? "fixed" : headerType
      } `}
    >
      {headerType !== "scroll" ? (
        <HeaderItems />
      ) : (
        <motion.div
          className={`transition-200 ${animateHeader ? "" : "bg-black/90"} `}
        >
          <HeaderItems />
        </motion.div>
      )}
    </header>
  );
};

const HeaderItems: FC = () => {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <motion.div
      className="flex items-center justify-between w-full px-4 md:px-6 py-4 md:py-6 z-20 bg-transparent"
      {...midEnterAnimation}
    >
      <Link href="/" className="text-sand-300 text-2xl md:text-3xl font-bold">
        sandbox
      </Link>
      <TwoLinesIcon
        animate={open}
        onClick={() => cycleOpen()}
        className="z-[100]"
      />
      <NavigationMenu open={open} toggleMenu={cycleOpen} />
    </motion.div>
  );
};
export default Header;

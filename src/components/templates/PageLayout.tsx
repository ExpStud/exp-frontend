import { FC, ReactNode, createRef, useRef, useState } from "react";
import {
  PageHead,
  Footer,
  SplashScreen,
  Navigation,
  MobileNavigation,
  Header,
} from "@components";
import { enterAnimation } from "@constants";
import { useViewStore } from "@contexts";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  footer?: boolean;
  fixed?: boolean;
  headerType?: string;
  mainClass?: string;
  assets?: boolean[];
}

const PageLayout: FC<Props> = (props: Props) => {
  const {
    footer = true,
    fixed = true,
    children,
    mainClass = "",
    assets = [],
  } = props;

  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`flex flex-col lg:min-h-screen h-full bg-background-black ${
        fixed ? "fixed inset-0" : ""
      }`}
    >
      <PageHead
        title="Sandbox | Design & Development Studio"
        description="Providing cutting-edge web design and development solutions"
        url="https://sandboxstud.io/"
        twitter="sandbox_studio_"
      />
      <div className="z-0 flex flex-col h-full relative">
        <main
          className={`flex flex-col h-full w-full overflow-y-auto ${mainClass}`}
        >
          <motion.div ref={scrollRef} {...enterAnimation}>
            {children}
          </motion.div>
          {footer && <Footer />}
        </main>
      </div>

      {/* modals */}
      {assets && <SplashScreen assets={assets} />}
    </div>
  );
};
export default PageLayout;

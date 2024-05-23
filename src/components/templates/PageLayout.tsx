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
import { ViewContext } from "@contexts";
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

  //context for splash screen & modals
  const [showView, setShowView] = useState<boolean>(false);

  const value = {
    showView,
    setShowView,
  };

  return (
    <ViewContext.Provider value={value}>
      <div
        className={`flex flex-col lg:min-h-screen h-full bg-background-black ${
          fixed ? "fixed inset-0" : ""
        }`}
      >
        <PageHead
          title="EXP | All-In-One Design & Development Studio"
          description="Providing cutting-edge web design and development solutions"
          url="https://expstud.io/"
          twitter="expstudio_"
        />
        <MobileNavigation className="lg:hidden" scrollRef={scrollRef} />
        <Navigation className="hidden lg:flex" />
        <div className="z-0 flex flex-col h-full left-padding relative">
          <main
            className={`flex flex-col h-full w-full overflow-y-auto ${mainClass}`}
          >
            <motion.div ref={scrollRef} {...enterAnimation}>
              {children}
            </motion.div>
            <Footer />
          </main>
        </div>

        {/* modals */}
        {assets && <SplashScreen assets={assets} />}
      </div>
    </ViewContext.Provider>
  );
};
export default PageLayout;

import { FC, ReactNode, useState } from "react";
import { PageHead, Footer, SplashScreen, Navigation } from "@components";
import { enterAnimation, ViewContext } from "@constants";
import { AnimatePresence, motion } from "framer-motion";

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
    fixed = false,
    children,
    mainClass = "",
    assets = [],
  } = props;

  //context for splash screen & modals
  const [showView, setShowView] = useState<boolean>(false);

  const value = {
    showView,
    setShowView,
  };

  return (
    <ViewContext.Provider value={value}>
      <div
        className={`flex lg:min-h-screen h-full bg-background-black ${
          fixed ? "absolute inset-0" : ""
        }`}
      >
        <PageHead
          title="EXP Studio"
          description="Web Development Solutions"
          url="https://expstud.io/"
          twitter="expstudio_"
        />
        <Navigation />
        <div className="z-0 flex flex-col h-full w-full bg-custom-black">
          <motion.main
            className={`flex flex-col h-full w-full ${mainClass} ${
              footer ? "mb-8 md:mb-auto" : ""
            }`}
            {...enterAnimation}
          >
            {children}
          </motion.main>
          {footer && <Footer />}
        </div>

        {/* modals */}
        {assets && <SplashScreen assets={assets} />}
      </div>
    </ViewContext.Provider>
  );
};
export default PageLayout;

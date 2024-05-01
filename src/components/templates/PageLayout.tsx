import { FC, ReactNode, useState } from "react";
import { PageHead, Footer, SplashScreen, Navigation } from "@components";
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
          title="EXP Studio"
          description="Web Development Solutions"
          url="https://expstud.io/"
          twitter="expstudio_"
        />
        <Navigation />
        <div className="z-0 flex flex-col h-full left-padding relative">
          <motion.main
            className={`flex flex-col h-full w-full overflow-y-auto ${mainClass}`}
            {...enterAnimation}
          >
            <div>{children}</div>
            <Footer />
          </motion.main>
        </div>

        {/* modals */}
        {assets && <SplashScreen assets={assets} />}
      </div>
    </ViewContext.Provider>
  );
};
export default PageLayout;

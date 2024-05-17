import { Dispatch, SetStateAction, FC, useContext, useRef } from "react";
import {
  WelcomeSection,
  LetsWorkLink,
  BackgroundImage,
  AnimateWrapper,
} from "@components";
import Image from "next/image";
import ServiceListItem from "../molecules/ServiceListItem";
import { ViewContext } from "src/contexts";
import { useInView } from "framer-motion";
import { handleAssetLoad } from "@utils";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const ServicesView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  const listRef = useRef<HTMLHRElement>(null);

  const listInView = useInView(listRef, {
    once: true,
  });

  return (
    <div className="margin-left w-full h-full relative overflow-x-hidden">
      <BackgroundImage />

      <AnimateWrapper animate={showView}>
        <WelcomeSection />
        <div className="left-margin mt-0 sm:mt-12 md:mt-10 lg:mt-0 text-4xl sm:text-6xl xl:text-7xl font-medium ">
          <p
            className={`mb-3 text-3xl sm:text-4xl md:text-5xl lg:!text-6xl 2xl:!text-7xl max-w-[1256px] pr-4`}
          >
            We guide companies through moments of transformation.
          </p>
        </div>
        {/* bg image */}
        <div className="hidden 2xs:block absolute -top-0 2xl:top-0 -left-0 lg:left-0 xl:-left-20 2xl:-left-28 -z-[2] w-[100vw] h-[800px] lg:h-[900px] 2xl:h-[980px] ">
          <Image
            src="/images/services/final.png"
            alt="Services"
            fill
            className="hidden lg:block object-cover -z-[10]"
            priority
            onLoad={() => setAssets && handleAssetLoad(0, setAssets)}
          />
          <Image
            src="/images/services/final_mobile.png"
            alt="Services"
            fill
            className="lg:hidden object-cover -z-[10]"
            priority
            onLoad={() => setAssets && handleAssetLoad(0, setAssets)}
          />
        </div>
        {/* invisible container */}
        {/* xs:mt-10 hidden 2xs:block relative aspect-[5/4] xs:aspect-[2/1] sm:aspect-[3/1] lg:aspect-[3.5/1] w-full bg- bg-opacity-50 */}
        <div
          className="relative opacity-10 hidden 2xs:block
          h-[360px] xs:h-[400px] md:h-[360px] lg:h-[400px] xl:h-[440px] 2xl:h-[520px] aspect-[8/7] xs:aspect-[5/3]  md:aspect-[3/1] lg:aspect-[3.5/1] "
        ></div>
      </AnimateWrapper>

      <div className="left-margin z-10">
        <AnimateWrapper animate={showView && listInView}>
          <div className="!opacity-100" ref={listRef}>
            <p className="text-5xl text-custom-gray mb-3">Our services.</p>
            <p className="text-4xl md:text-5xl">The full list.</p>
          </div>
          <p className="md:w-1/2 mt-10 text-xl pr-3">
            At EXP Studio, we curate a suite of refined and sophisticated
            services to elevate your digital presence and business strategies.
          </p>
        </AnimateWrapper>

        <div className="top-margin max-w-[1256px] ">
          <ServiceListItem
            title="All-Encompassing Development Solutions"
            description="From conceptualization to execution, we bring ideas to life, delivering solutions that transcend expectations."
            showView={showView}
          />
          <ServiceListItem
            title="Mobile & Web Design"
            description="Immerse your audience in a seamless digital experience with our meticulously crafted designs for mobile and web platforms."
            showView={showView}
          />
          <ServiceListItem
            title="Blockchain Development on Solana"
            description="Step into the future with our cutting-edge blockchain development solutions on the Solana ecosystem. "
            showView={showView}
          />
          <ServiceListItem
            title="Third Party Integrations"
            description="Embark on a seamless online journey with multiple integrated options."
            showView={showView}
          />
          <ServiceListItem
            title="Discord Services"
            description="Creating organized and secure communal spaces on Discord for online communities."
            showView={showView}
          />
          <ServiceListItem
            title="Advisory"
            description="Navigate the complexities of Web 3 with our advisory services as we provide insights and guidance into the ever-evolving landscape."
            showView={showView}
          />
        </div>
      </div>
      <hr className="border-white border-opacity-10 top-margin"></hr>

      <LetsWorkLink />
    </div>
  );
};

export default ServicesView;

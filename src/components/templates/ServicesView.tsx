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
        <WelcomeSection
        // title1="We guide companies through moments of transformation."
        // title1Class="!text-4xl md:!text-6xl 2xl:!text-7xl max-w-[1256px] pr-8 "
        />
        <div className="left-margin mt-0 sm:mt-12 md:mt-10 lg:mt-0 text-4xl sm:text-6xl xl:text-7xl font-medium ">
          <p
            className={`mb-3 text-3xl sm:text-4xl md:text-5xl lg:!text-6xl 2xl:!text-7xl max-w-[1256px] pr-4`}
          >
            We guide companies through moments of transformation.
          </p>
        </div>
        {/* <div className="absolute w-full -top-2 -left-10 lg:-left-20  z-[100] padding-left aspect-[2/2] md:aspect-[1600/1067] overflow-hidden "> */}
        <div className="hidden 2xs:block absolute top-0 -left-10 lg:-left-20 -z-[2] h-[800px] lg:h-[900px] w-[110vw]">
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
        <div className="mt-10 hidden 2xs:block relative aspect-[5/4] sm:aspect-[3/1.5] md:aspect-[3/1] lg:aspect-[3/1] w-full bg- bg-opacity-50">
          {/* <Image
            src="/images/services/cover.jpg"
            alt="Services"
            fill
            className="z-0 rounded-xl object-cover"
            priority
          /> */}
        </div>
      </AnimateWrapper>

      <AnimateWrapper animate={listInView}>
        <div className="left-margin top-margin z-10">
          <div className="!opacity-100" ref={listRef}>
            <p className="text-5xl text-custom-gray mb-3">Our services.</p>
            <p className="text-4xl md:text-5xl">The full list.</p>
          </div>

          <p className="md:w-1/2 mt-10 text-xl pr-3">
            At EXP Studio, we curate a suite of refined and sophisticated
            services to elevate your digital presence and business strategies.
          </p>

          <div className="top-margin max-w-[1256px] ">
            <ServiceListItem
              title="UI/UX Web & Mobile Design"
              description="Immerse your audience in a seamless digital experience with our meticulously crafted UI/UX designs for web and mobile platforms. Our designs embody sophistication and user-centric principles."
            />
            <ServiceListItem
              title="Brand Design"
              description="Make a lasting impression with our bespoke brand design services. We meticulously shape your brand identity, ensuring it resonates with authenticity and leaves a distinctive mark in the market."
            />
            <ServiceListItem
              title="Marketing & SEO"
              description="Drive your digital presence to new heights with our tailored marketing and SEO strategies. We craft campaigns that not only captivate but also optimize your visibility in the vast digital landscape."
            />
            <ServiceListItem
              title="Blockchain Development on Solana"
              description="Step into the future with our cutting-edge blockchain development solutions on the Solana ecosystem. Our expertise combines innovation and precision, ensuring your projects thrive in the decentralized world."
            />
            <ServiceListItem
              title="Community Management with Discord"
              description="Foster meaningful connections through our expert community management services on Discord. We curate engaging and interactive spaces, fostering a sense of community around your brand."
            />
            <ServiceListItem
              title="Web 3 Advisory"
              description="Navigate the complexities of the Web 3.0 era with our strategic advisory services. We provide insights and guidance to ensure your digital strategies align with the ever-evolving landscape."
            />
            <ServiceListItem
              title="E-Commerce Services"
              description="Embark on a seamless online retail journey with our E-commerce services. Whether through Shopify or custom solutions, we tailor e-commerce experiences that transcend transactions, creating lasting customer connections."
            />
            <ServiceListItem
              title="All-Encompassing Development Solutions"
              description="Experience the synergy of creativity and technology with our all-encompassing development solutions. From conceptualization to execution, we bring ideas to life, delivering solutions that transcend expectations."
            />
          </div>
        </div>
      </AnimateWrapper>
      <hr className="border-white border-opacity-10 top-margin"></hr>

      <LetsWorkLink />
    </div>
  );
};

export default ServicesView;

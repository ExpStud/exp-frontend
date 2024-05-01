import { Dispatch, SetStateAction, FC } from "react";
import { WelcomeSection, LetsWorkLink, BackgroundImage } from "@components";
import Image from "next/image";
import ServiceListItem from "../molecules/ServiceListItem";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const ServicesView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="margin-left relative w-full h-full">
      <WelcomeSection
        title1="We guide companies through moments of transformation."
        title1Class="!text-4xl md:!text-6xl 2xl:!text-7xl max-w-[1256px] pr-8 "
      />
      <BackgroundImage />

      <div className="absolute w-full -top-2 left-0 md:-left-[77px] -z-[2] padding-left aspect-[1/2] md:aspect-square xl:aspect-[1600/1067]  ">
        <Image
          src="/images/services/transparent.png"
          alt="Services"
          fill
          className="object-cover"
          // onLoadingComplete={() => handleAssetLoad(0, setAssets)}
        />
      </div>
      <div className="left-margin top-margin relative aspect-[1500/750] lg:aspect-[1500/430] w-[78.5%]">
        <Image
          src="/images/services/cover.jpg"
          alt="Services"
          fill
          className="z-0 rounded-xl object-cover"
          // onLoadingComplete={() => handleAssetLoad(0, setAssets)}
        />
      </div>

      <div className="left-margin top-margin">
        <div className="font-medium">
          <p className="text-5xl text-custom-gray mb-3">Our services.</p>
          <p className="text-4xl md:text-5xl">The full list.</p>
        </div>

        <p className="md:w-1/2 mt-10 text-xl pr-3">
          At EXP Studio, we curate a suite of refined and sophisticated services
          to elevate your digital presence and business strategies.
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

      <hr className="border-white border-opacity-10 top-margin"></hr>

      <LetsWorkLink />
    </div>
  );
};

export default ServicesView;

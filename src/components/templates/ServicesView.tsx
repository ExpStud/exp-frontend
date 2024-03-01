import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext, useState } from "react";
import Link from "next/link";
import { ViewContext, slideUp } from "@constants";
import { TwitterIcon, WelcomeSection } from "@components";
import Image from "next/image";
import ServiceListItem from "../molecules/ServiceListItem";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const ServicesView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <div className="relative w-full h-full items-center justify-center">
      <WelcomeSection
        title1="We guide companies through moments"
        title2="of transformation."
      />

      <Image
        src="/images/services.png"
        alt="Services"
        width={1256}
        height={360}
        className="px-2 lg:px-20 2xl:px-0 w-full"
        // onLoadingComplete={() => handleAssetLoad(0, setAssets)}
      />

      <div className="container ml-128 p-10 mt-10">
        <div className="text-5xl font-medium">
          <p className="text-gray-400">Our services.</p>
          <p>The full list.</p>
        </div>

        <p className="w-1/2 mt-10 text-xl">
          At EXP Studio, we curate a suite of refined and sophisticated services
          to elevate your digital presence and business strategies.
        </p>

        <div className="mt-10 border-t border-dotted">
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

      <div className="container ml-128 p-10 text-8xl">
        <Link href="/contact">
          <p>Let&apos;s work together.</p>
          <p>⟶</p>
        </Link>
      </div>
    </div>
  );
};

export default ServicesView;

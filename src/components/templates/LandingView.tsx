import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext, useState } from "react";
import Link from "next/link";
import { ViewContext, slideUp } from "@constants";
import {
  TwitterIcon,
  Button,
  WelcomeSection,
  ProductListItem,
  CardCarousel,
  LetsWorkLink,
  BackgroundImage,
  Testimonials,
  ProductList,
  About,
} from "@components";
import Image from "next/image";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const LandingView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="relative w-full h-full items-center justify-center pl-6 md:pl-16">
      <BackgroundImage />

      <div className="relative">
        <WelcomeSection title1="Think. Design." title2="Develop. Launch." />
        <CardCarousel />
        <Button title="Our work" link="/projects" className="ml-10" />

        <hr className="border-white border-opacity-10 mt-12 lg:mt-20"></hr>
        <ProductList />

        <hr className="border-white border-opacity-10 mt-12 lg:mt-20"></hr>
        <Testimonials />

        <hr className="border-white border-opacity-10 mt-12 lg:mt-20"></hr>
        <About />

        <hr className="border-white border-opacity-10 mt-12 lg:mt-20"></hr>
        <LetsWorkLink />
      </div>
    </div>
  );
};

export default LandingView;

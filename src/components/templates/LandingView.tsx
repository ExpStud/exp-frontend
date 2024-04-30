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

        <div className="ml-8 mt-20">
          <p className="text-5xl text-custom-gray mb-3">About ourselves.</p>
          <p className="text-5xl">Perfeggcionism freaks.</p>

          <div className="w-1/2 mt-10 text-xl">
            <p>
              At EXP, we specialise in building cutting-edge identity systems to
              help professional service providers increase their value and gain
              a competitive advantage from branding & websites.
            </p>
            <br></br>
            <p>
              We&apos;ve worked with some of the Canberra region&apos;s finest
              builders, architects and interior designers and take pride in our
              expansive portfolio. We will continue to complete work on time and
              within budget - without compromising quality or safety.
            </p>
          </div>

          <div className="mt-20">
            <Button title="About us" link="/about" />
          </div>
        </div>

        <hr className="border-white border-opacity-10 mt-12 lg:mt-20"></hr>

        <LetsWorkLink />
      </div>
    </div>
  );
};

export default LandingView;

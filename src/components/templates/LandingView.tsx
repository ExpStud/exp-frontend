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

      <div className="relative z-10">
        <WelcomeSection title1="Think. Design." title2="Develop. Launch." />

        <CardCarousel />

        <div className="ml-10">
          <Button title="Our work" link="/projects" />
        </div>

        <hr className="border-gray-700 mt-20"></hr>

        <div className="mt-20 ml-10">
          <div className="pb-10">
            <p className="text-5xl text-custom-gray mb-3">Our services.</p>
            <p className="text-5xl mb-3">Design-led digital</p>
            <p className="text-5xl">products.</p>
          </div>

          <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
            <div>
              <ul className="list-none p-0">
                <ProductListItem number="1" title="Design" style="" />
                <ProductListItem number="2" title="Development" style="" />
                <ProductListItem
                  number="3"
                  title="Minting Tools"
                  style="border-b-2"
                />
              </ul>
            </div>
            <div>
              <ul className="list-none p-0">
                <ProductListItem
                  number="4"
                  title="Discord Management"
                  style=""
                />
                <ProductListItem number="5" title="Tech Support" style="" />
                <ProductListItem
                  number="6"
                  title="E-Commerce"
                  style="border-b-2"
                />
              </ul>
            </div>
          </div>

          <div className="mt-20">
            <Button title="What we do" link="/services" />
          </div>
        </div>

        <hr className="border-gray-700 mt-20"></hr>

        <Testimonials />

        <hr className="border-gray-700 mt-20"></hr>

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

        <hr className="border-gray-700 mt-20"></hr>

        <LetsWorkLink />
      </div>
    </div>
  );
};

export default LandingView;

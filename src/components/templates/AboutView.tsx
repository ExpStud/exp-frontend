import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext, useState } from "react";
import Link from "next/link";
import { ViewContext, slideUp } from "@constants";
import { TwitterIcon, WelcomeSection, LetsWorkLink, BackgroundImage } from "@components";
import Image from "next/image";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const AboutView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <div className="relative w-full h-full items-center justify-center">
      
      <BackgroundImage />

      <div className="relative z-10">

        <WelcomeSection title1="About us." title2="" />

        <div className="ml-10 mt-20 flex justify-between">
          <div className="text-5xl font-medium">
            <p className="text-custom-gray mb-3">Our journey.</p>
            <p>Perfeggcionism freaks.</p>
          </div>
        
          <div className="w-1/2 mt-10 text-xl">
            <p>Founded in January 2023, EXP Studio emerged from the nearly decade-long partnership between Miguel Corzo and Wallace Palmer. Having spent over ten years working together, our collaborative journey began in diverse industries. Transitioning from SaaS engineers to trailblazers in the web 3 space, we bring authentic expertise to the table.</p>
          </div>
        </div>

        <div className="ml-10 mt-20 flex flex-row text-xl text-custom-gray">
          <div>
            <p className="text-9xl font-light text-custom-purple">03</p>
            <p>Years active</p>
          </div>

          <div className="ml-20">
            <p className="text-9xl font-light text-custom-purple">14</p>
            <p>Projects completed</p>
          </div>
        </div>

        <hr className="border-gray-700 mt-20"></hr>

        <div className="ml-10 mt-20 text-5xl font-medium">
          <p className="text-custom-gray mb-3">Our team.</p>
          <p>Perfeggcionism freaks.</p>

          <p className="text-xl w-1/2 mt-10 font-normal">What sets us apart is not just our services but the passion and expertise each team member brings. We thrive on challenges, push creative boundaries, and are dedicated to delivering solutions that exceed expectations.</p>
        </div>

        <div className="ml-10 mt-20 flex">

          <Image
              src="/images/about/14-nacho.jpg"
              alt="Miguel"
              width={608}
              height={608}
              className="grayscale rounded-md"
            />

          <div className="flex flex-col justify-items-start w-1/2 ml-10">
            <p>Miguel Corzo</p>
            <p className="text-custom-gray">Project Manager and Designer: With a decade-long career, Miguel brings a wealth of experience to the table. As EXP&apos;s project manager and designer, Miguel orchestrates seamless collaborations, and development cycles ensuring your vision comes to life with precision and creativity.</p>

            <p className="mt-5">Experience</p>
            <div className="text-custom-gray">
              <p>
                My Slimes & All in Time (1 year and counting)
              </p>
              <p>
                Project Manager at DeGods & y00ts (1 year)
              </p>
              <p>
                Hot Heads (1 year)
              </p>
            </div>
          </div>
        </div>

        <div className="ml-10 flex items-end">
          <div className="flex flex-col w-1/2">
            <p>Wallace Palmer</p>
            <p className="text-custom-gray">As EXP&apos;s lead developer, Wallace is the driving force behind the technical brilliance at EXP Studio. With over 10 years development experience in various industries he has evolved from SaaS web & mobile engineering to pioneering modern solutions on the Solana Blockchain.</p>

            <p className="mt-5">Experience</p>
            <div className="text-custom-gray">
              <p>
                Liberty Square (1 year and counting)
              </p>
              <p>
                Lead Developer at DeGods & y00ts (1 year)
              </p>
            </div>
          </div>

          <Image
            src="/images/about/33-nino.jpg"
            alt="Wallace"
            width={608}
            height={608}
            className="grayscale rounded-md"
          />
        </div>

        <hr className="border-gray-700 mt-20"></hr>

        <LetsWorkLink />

      </div>

    </div>
  );
};

export default AboutView;

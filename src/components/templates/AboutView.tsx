import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext, useState } from "react";
import Link from "next/link";
import { ViewContext, slideUp } from "@constants";
import { TwitterIcon, WelcomeSection } from "@components";
import Image from "next/image";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const AboutView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <div className="relative w-full h-full items-center justify-center overflow-y-scroll">
      
      <WelcomeSection title1="About us." title2="" />

      <div className="container ml-128 p-10 flex justify-between">
        <div className="text-5xl font-medium">
          <p className="text-gray-500">Our journey.</p>
          <p>Perfeggcionism freaks.</p>
        </div>
      
        <div className="w-1/2 mt-10 text-xl">
          <p>Founded in January 2023, EXP Studio emerged from the nearly decade-long partnership between Miguel Corzo and Wallace Palmer. Having spent over ten years working together, our collaborative journey began in diverse industries. Transitioning from SaaS engineers to trailblazers in the web 3 space, we bring authentic expertise to the table.</p>
        </div>
      </div>

      <div className="container ml-128 p-10 flex flex-row text-xl text-gray-300">
        <div>
          <p className="text-9xl font-light text-custom-purple">03</p>
          <p>Years active</p>
        </div>

        <div className="ml-20">
          <p className="text-9xl font-light text-custom-purple">14</p>
          <p>Projects completed</p>
        </div>
      </div>

      <div className="container ml-128 p-10 text-5xl font-medium">
        <p className="text-gray-500">Our team.</p>
        <p>Perfeggcionism freaks.</p>

        <p className="text-xl w-1/2 mt-5 font-normal">What sets us apart is not just our services but the passion and expertise each team member brings. We thrive on challenges, push creative boundaries, and are dedicated to delivering solutions that exceed expectations.</p>
      </div>

      <div className="container ml-128 p-10 flex">

        <Image
            src="/images/miguel.png"
            alt="Miguel"
            width={608}
            height={608}
            className="px-2 lg:px-20 2xl:px-0"
            // onLoadingComplete={() => handleAssetLoad(0, setAssets)}
          />

        <div className="flex flex-col justify-items-start w-1/2">
          <p>Miguel Corzo</p>
          <p className="text-gray-400">Project Manager and Designer: With a decade-long career, Miguel brings a wealth of experience to the table. As EXP's project manager and designer, Miguel orchestrates seamless collaborations, and development cycles ensuring your vision comes to life with precision and creativity.</p>

          <p className="mt-5">Experience</p>
          <p className="text-gray-400">My Slimes & All in Time (1 year and counting)
          Project Manager at DeGods & y00ts (1 year)
          Hot Heads (1 year)</p>
        </div>
      </div>

      <div className="container ml-128 p-10 flex">
        <div className="flex flex-col justify-items-end w-1/2">
          <p>Wallace Palmer</p>
          <p className="text-gray-400">As EXP's lead developer, Wallace is the driving force behind the technical brilliance at EXP Studio. With over 10 years development experience in various industries he has evolved from SaaS web & mobile engineering to pioneering modern solutions on the Solana Blockchain.</p>

          <p className="mt-5">Experience</p>
          <p className="text-gray-400">Liberty Square (1 year and counting)
          Lead Developer at DeGods & y00ts (1 year)</p>
        </div>

        <Image
          src="/images/wallace.png"
          alt="Wallace"
          width={608}
          height={608}
          className="px-2 lg:px-20 2xl:px-0"
          // onLoadingComplete={() => handleAssetLoad(0, setAssets)}
        />
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

export default AboutView;

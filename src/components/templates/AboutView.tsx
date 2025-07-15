import {
  Dispatch,
  SetStateAction,
  FC,
  useRef,
  useState,
  useEffect,
} from "react";
import {
  WelcomeSection,
  LetsWorkLink,
  BackgroundImage,
  AnimateWrapper,
} from "@components";
import Image from "next/image";
import { useViewStore } from "src/contexts";
import { motion, useInView } from "framer-motion";
import { introContainerVariants, introItemVariants } from "@constants";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

export interface TeamMember {
  name: string;
  title: string;
  image: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Wallace Palmer (Darth)",
    title: "Founder & Lead Developer",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/about/sketch-wallace.jpg`,
    twitter: "https://x.com/DarthDegen",
    linkedin: "https://www.linkedin.com/in/wallace-palmer-4b93473a/",
  },
  {
    name: "Miguel Corzo (Blem)",
    title: "Founder & Project Lead",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/about/sketch-miguel.jpg`,
    twitter: "https://x.com/otablem",
    linkedin: "https://www.linkedin.com/in/miguel-andres-corzo",
  },
  {
    name: "Raff",
    title: "Lead Designer",
    image: `${process.env.CLOUDFLARE_STORAGE}/images/about/sketch-raff.jpg`,
    twitter: "",
    linkedin: "https://www.linkedin.com/in/miguel-corzo-12345678/",
  },
];

const AboutView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useViewStore();

  return (
    <div className="page-py page-px lg:min-h-screen relative w-full h-full items-center justify-center z-0">
      <BackgroundImage setAssets={setAssets} />
      <motion.div
        className="flex flex-col gap-6 "
        variants={introContainerVariants}
        initial="hidden"
        animate={showView ? "show" : "hidden"}
      >
        <motion.h1 variants={introItemVariants}>
          Meet the <span className="text-sand font-medium">Sandbox</span> Team
        </motion.h1>
        <motion.p
          variants={introItemVariants}
          className="max-w-[700px] text-lg lg:text-xl"
        >
          Our team is a tight-knit unit of talented individuals. Years of
          collaboration has made us not only a team with strong chemistry, but a
          team that delivers.
        </motion.p>
        {/* Team Members */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={introItemVariants}
        >
          {/* {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))} */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutView;

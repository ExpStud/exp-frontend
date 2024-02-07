import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext, useState } from "react";
import Link from "next/link";
import { ViewContext, slideUp } from "@constants";
import { TwitterIcon, WelcomeSection, ProjectItem } from "@components";
import Image from "next/image";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const ProjectsView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <div className="relative w-full h-full items-center justify-center overflow-y-scroll">
      
      <WelcomeSection title1="Projects." title2="" />

      <div className="container ml-128 mt-20 p-10">

        <ProjectItem title="Our services." subtitle="The full list." description="Services
          My Slimes & All in Time (1 year and counting)
          Project Manager at DeGods & y00ts (1 year)
          Hot Heads (1 year)" />

        <ProjectItem title="Our services." subtitle="The full list." description="Services
          My Slimes & All in Time (1 year and counting)
          Project Manager at DeGods & y00ts (1 year)
          Hot Heads (1 year)" />

        <ProjectItem title="Our services." subtitle="The full list." description="Services
          My Slimes & All in Time (1 year and counting)
          Project Manager at DeGods & y00ts (1 year)
          Hot Heads (1 year)" />

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

export default ProjectsView;

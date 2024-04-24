import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext, useState } from "react";
import Link from "next/link";
import { ViewContext, slideUp } from "@constants";
import { TwitterIcon, WelcomeSection, ProjectItem, LetsWorkLink, BackgroundImage } from "@components";
import Image from "next/image";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const ProjectsView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <div className="relative w-full h-full items-center justify-center" >
      
      <BackgroundImage />

      <div className="relative z-10">

        <WelcomeSection title1="Projects." title2="" />

        <hr className="border-gray-700 mt-20"></hr>

        <div className="container ml-10">

          <ProjectItem 
            title="Our services." 
            subtitle="The full list." 
            first="Services My Slimes & All in Time (1 year and counting)"
            second="Project Manager at DeGods & y00ts (1 year)"
            third="Hot Heads (1 year)" 
          />

          <hr className="border-gray-700 mt-20"></hr>

          <ProjectItem 
            title="Our services." 
            subtitle="The full list." 
            first="Services My Slimes & All in Time (1 year and counting)"
            second="Project Manager at DeGods & y00ts (1 year)"
            third="Hot Heads (1 year)" 
          />

          <hr className="border-gray-700 mt-20"></hr>

          <ProjectItem 
            title="Our services." 
            subtitle="The full list." 
            first="Services My Slimes & All in Time (1 year and counting)"
            second="Project Manager at DeGods & y00ts (1 year)"
            third="Hot Heads (1 year)" 
          />

        </div>

        <hr className="border-gray-700 mt-20"></hr>

        <LetsWorkLink />
      </div>
    </div>
  );
};

export default ProjectsView;

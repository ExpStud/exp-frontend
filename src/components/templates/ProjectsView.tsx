import { Dispatch, SetStateAction, FC } from "react";

import {
  WelcomeSection,
  ProjectItem,
  LetsWorkLink,
  BackgroundImage,
} from "@components";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const ProjectsView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="relative w-screen h-full items-center justify-center pl-6 lg:pl-0">
      <BackgroundImage />

      <WelcomeSection title1="Projects." className="ml-10" />

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

      <hr className="border-gray-700 mt-20"></hr>

      <ProjectItem
        title="Our services."
        subtitle="The full list."
        first="Services My Slimes & All in Time (1 year and counting)"
        second="Project Manager at DeGods & y00ts (1 year)"
        third="Hot Heads (1 year)"
      />

      <hr className="border-gray-700 mt-20"></hr>

      <LetsWorkLink />
    </div>
  );
};

export default ProjectsView;

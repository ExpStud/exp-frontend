"use client";

import { FC } from "react";
import { Button, Gallery } from "@components";

const ProjectGallery: FC = () => {
  return (
    <div className="landing-container-left flex flex-col items-start justify-center gap-10">
      <div>
        <h2 className="mb-3">Check out</h2>
        <h2 className="text-sand">our work.</h2>
      </div>
      <Gallery></Gallery>
      <Button
        title="See more projects"
        link="/services"
        className="!min-w-[240px] h-[48px]"
      />
    </div>
  );
};

export default ProjectGallery;

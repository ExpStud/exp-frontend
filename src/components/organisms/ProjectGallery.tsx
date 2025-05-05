"use client";

import { FC } from "react";
import { Button, Gallery } from "@components";

const ProjectGallery: FC = () => {
  return (
    <div className="landing-container-left py-10 flex flex-col justify-center">
      <div className="flex flex-col items-start justify-center gap-0 h-full max-w-[1920px]">
        <div>
          <h2 className="mb-3">Check out</h2>
          <h2 className="text-sand">our work.</h2>
        </div>
        <Gallery itemWidth={608}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-[608px] h-[555px] bg-red-200 rounded-3xl p-10"
            >
              <h3 className="font-bold text-lg mb-2">Project {i + 1}</h3>
              <p className="text-sm text-gray-600">In Search Of Substance</p>
            </div>
          ))}
        </Gallery>
        <Button
          title="See more projects"
          link="/services"
          className="!min-w-[240px] !min-h-[48px] mt-5 2xl:mt-10"
        />
      </div>
    </div>
  );
};

export default ProjectGallery;

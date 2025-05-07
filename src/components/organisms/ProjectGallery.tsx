"use client";

import { FC } from "react";
import { Button, Gallery, GalleryItem } from "@components";
import { GalleryType, clients } from "@constants";

const carouselData: GalleryType[] = [
  clients[0].carousel![0],
  clients[0].carousel![1],
  clients[3].carousel![0],
  clients[1].carousel![0],
];

const ProjectGallery: FC = () => {
  return (
    <div className="landing-container-left py-10 flex flex-col justify-center 2010:items-center">
      <div className="flex flex-col items-start justify-center gap-0 h-full max-w-[1864px]">
        <div>
          <h2 className="mb-3">Check out</h2>
          <h2 className="text-sand">our work.</h2>
        </div>
        <Gallery itemWidth={608}>
          {carouselData.map((item, i) => (
            <GalleryItem key={i} data={item} />
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

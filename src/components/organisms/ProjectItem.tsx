import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import { Project } from "@constants";
import { AnimateWrapper } from "@components";
import { useInView } from "framer-motion";

interface Props {
  project: Project;
}

const ProjectItem: FC<Props> = (props: Props) => {
  const { project } = props;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <AnimateWrapper animate={isInView}>
      <div
        className="left-margin top-margin flex flex-col lg:flex-row lg:items-center justify-between py-4 lg:pr-10 xl:pr-[10vw] max-w-[1680px]"
        ref={ref}
      >
        <div className="flex flex-col h-full gap-14">
          <div className="flex flex-col gap-3 ">
            <h3 className="text-white text-4xl lg:text-5xl">{project.name}</h3>
            <p className="text-white/60 text-lg lg:text-xl">
              {project.published !== null
                ? `Published in ${project.published}`
                : `Coming Soon in ${new Date().getFullYear()}`}
            </p>
          </div>

          <p className="text-white/60 text-lg lg:text-xl max-w-[500px]">
            {project.description}
          </p>

          <div className="flex gap-20">
            <div className="flex flex-col gap-0">
              <p className="text-white/60">Services</p>
              {project.services.map((service, index) => (
                <p className="text-white/ " key={index}>
                  {service}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-0">
              <p className="text-white/60">Links</p>
              {project.links.map((link, index) => (
                <a
                  className="text-white/ "
                  key={index}
                  href={link.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* <div className="top-margin hidden lg:flex">
          <Button title="View project" link="/about" />
        </div> */}
        </div>

        <Image
          src=""
          alt="project"
          width={608}
          height={480}
          className="top-margin px-6 lg:px-20 2xl:px-0 bg-white rounded-md max-w-[320px] md:max-w-[608px] aspect-[608/480]"
        />
        {/* <div className="top-margin lg:hidden">
        <Button title="View project" link="/about" />
      </div> */}
      </div>
      <hr className="border-white border-opacity-10 top-margin" />
    </AnimateWrapper>
  );
};

export default ProjectItem;

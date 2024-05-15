import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import { Project } from "@constants";
import { AnimateWrapper } from "@components";
import { useInView } from "framer-motion";

interface Props {
  project: Project;
  showView: boolean;
}

const ProjectItem: FC<Props> = (props: Props) => {
  const { project, showView } = props;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <AnimateWrapper animate={showView && isInView}>
      <div
        className="left-margin top-margin flex flex-col lg:flex-row lg:items-center justify-between py-4 lg:pr-10 xl:pr-[10vw] max-w-[1680px]"
        ref={ref}
      >
        <Image
          src={project.image}
          alt="project"
          width={912}
          height={759}
          className="lg:hidden mb-6 rounded-md"
        />
        <div className="flex flex-col h-full gap-14 lg:pr-8">
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
          src={project.image}
          alt="project"
          width={912}
          height={759}
          className="hidden lg:block mt-2  px-6 lg:px-20 2xl:px-0  rounded-md self-start"
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

import { FC } from "react";
import { Button } from "@components";
import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  first: string;
  second: string;
  third: string;
}

const ProjectItem: FC<Props> = (props: Props) => {
  const { title, subtitle, first, second, third } = props;

  return (
    <div className="left-margin top-magin flex flex-col lg:flex-row items-center justify-between py-4">
      <div className="justify-space-between">
        <div className="text-5xl font-medium">
          <p className="text-custom-gray mb-3">{title}</p>
          <p className="text-4xl md:text-5xl">{subtitle}</p>
        </div>

        <div className="mt-20">
          <p>Services</p>
          <div>
            <p className="text-gray-400">{first}</p>
            <p className="text-gray-400">{second}</p>
            <p className="text-gray-400">{third}</p>
          </div>
        </div>

        <div className="mt-20">
          <Button title="View project" link="/about" />
        </div>
      </div>

      <Image
        src=""
        alt="project"
        width={608}
        height={480}
        className="px-2 lg:px-20 2xl:px-0 bg-white rounded-md max-w-[320px] md:max-w-auto"
      />
    </div>
  );
};

export default ProjectItem;

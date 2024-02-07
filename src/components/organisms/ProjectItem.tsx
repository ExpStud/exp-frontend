import { FC } from "react";
import { Button } from "@components";
import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  description: string;

}

const ProjectItem: FC<Props> = (props: Props) => {
  const { title, subtitle, description } = props;

  return (
    <div className="flex items-center justify-between py-4 mt-20">
      <div className="w-1/2 justify-space-between">
        <div className="text-5xl font-medium">
          <p className="text-gray-400">{title}</p>
          <p>{subtitle}</p>
        </div>

        <div className="mt-20">
          <p>Services</p>
          <p className="text-gray-400">{description}</p>
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
            className="px-2 lg:px-20 2xl:px-0 bg-white"
            // onLoadingComplete={() => handleAssetLoad(0, setAssets)}
          />
    </div>
  );
};

export default ProjectItem;

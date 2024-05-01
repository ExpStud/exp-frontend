import { FC } from "react";

interface Props {
  title: string;
  description: string;
}

const ServiceListItem: FC<Props> = (props: Props) => {
  const { title, description } = props;

  return (
    <div className="flex flex-col md:flex-row gap-4  items-start justify-between py-8 border-t border-dotted border-white border-opacity-40 pr-3">
      <div className="md:w-1/2">
        <p className="text-xl font-medium">{title}</p>
      </div>

      <div className="md:w-1/2">
        <p className="text-white text-opacity-60">{description}</p>
      </div>
    </div>
  );
};

export default ServiceListItem;

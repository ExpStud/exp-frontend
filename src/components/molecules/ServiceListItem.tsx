import { FC } from "react";

interface Props {
  title: string;
  description: string;
}

const ServiceListItem: FC<Props> = (props: Props) => {
  const { title, description } = props;

  return (
    <div className="flex items-center justify-between py-8 border-t border-dotted border-gray-600">
      <div className="w-1/2">
        <p className="text-xl font-medium">{title}</p>
      </div>

      <div className="w-1/2">
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ServiceListItem;

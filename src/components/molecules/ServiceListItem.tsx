import { FC, useRef } from "react";
import { AnimateWrapper } from "@components";
import { useInView } from "framer-motion";

interface Props {
  title: string;
  description: string;
  showView: boolean;
}

const ServiceListItem: FC<Props> = (props: Props) => {
  const { title, description, showView } = props;

  const ref = useRef<HTMLHRElement>(null);

  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <AnimateWrapper animate={showView && isInView}>
      <div
        className="flex flex-col md:flex-row gap-4  items-start justify-between py-8 border-t border-dotted border-white border-opacity-40 pr-3"
        ref={ref}
      >
        <div className="md:w-1/2">
          <p className="text-xl font-medium">{title}</p>
        </div>

        <div className="md:w-1/2">
          <p className="text-white text-opacity-60">{description}</p>
        </div>
      </div>
    </AnimateWrapper>
  );
};

export default ServiceListItem;

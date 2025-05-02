import Image from "next/image";
import { FC } from "react";

interface Props {
  icon: string;
  title: string;
}

const ProductListItem: FC<Props> = (props: Props) => {
  const { icon, title } = props;

  return (
    <div className="flex items-center gap-5 border-b border-white border-opacity-40 border-dotted p-5 w-[260px] xl:w-[363px]">
      <Image
        src={`${process.env.CLOUDFLARE_STORAGE}/images/icons/${icon}`}
        alt={title}
        width={24}
        height={24}
      />
      <p className="text-white text-xl md:text-2xl font-normal tracking-wide">
        {title}
      </p>
    </div>
  );
};

export default ProductListItem;

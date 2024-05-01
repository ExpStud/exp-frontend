import { FC } from "react";

interface Props {
  title: string;
  number: string;
  style?: string;
}

const ProductListItem: FC<Props> = (props: Props) => {
  const { title, number, style } = props;

  const defaultStyle =
    "flex items-center border-t border-white border-opacity-40 border-dotted p-5";

  const mergedStyles = `${defaultStyle} ${style}`;

  return (
    <li className={mergedStyles}>
      <span className="mr-2 text-custom-dark-purple text-4xl md:text-5xl w-[26px]">
        {number}
      </span>
      <span className="text-white text-xl md:text-2xl ml-3 md:ml-10 ">
        {title}
      </span>
    </li>
  );
};

export default ProductListItem;

import { FC } from "react";

interface Props {
  title: string;
  number: string;
  style: string;
}

const ProductListItem: FC<Props> = (props: Props) => {
  const { title, number, style } = props;

  const defaultStyle ="flex items-center border-t-2 border-gray-700 border-dotted p-5";

  const mergedStyles = `${defaultStyle} ${style}`;

  return (
    <li className={mergedStyles}>
      <span className="mr-2 text-custom-dark-purple text-5xl">{number}</span><span className="text-white text-2xl ml-10">{title}</span>
    </li>
  );
};

export default ProductListItem;

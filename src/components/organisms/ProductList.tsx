import { FC } from "react";
import { Button, ProductListItem } from "@components";

interface Props {}

const ProductList: FC<Props> = (props: Props) => {
  return (
    <div className="mt-12 lg:mt-20 ml-10">
      <div className="pb-10">
        <p className="text-5xl text-custom-gray mb-3">Our services.</p>
        <p className="text-4xl md:text-5xl mb-3">Design-led digital</p>
        <p className="text-4xl md:text-5xl">products.</p>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 mt-8 lg:mt-20 max-w-[1250px]">
        <div>
          <ul className="list-none p-0">
            <ProductListItem number="1" title="Design" />
            <ProductListItem number="2" title="Development" />
            <ProductListItem
              number="3"
              title="Minting Tools"
              style="md:border-b"
            />
          </ul>
        </div>
        <div>
          <ul className="list-none p-0">
            <ProductListItem number="4" title="Discord Management" />
            <ProductListItem number="5" title="Tech Support" />
            <ProductListItem number="6" title="E-Commerce" style="border-b" />
          </ul>
        </div>
      </div>

      <div className="mt-12 md:mt-20">
        <Button title="What we do" link="/services" />
      </div>
    </div>
  );
};

export default ProductList;

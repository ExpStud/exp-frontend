import { FC } from "react";
import { Button, ProductListItem } from "@components";

interface Props {}

const ProductList: FC<Props> = (props: Props) => {
  return (
    <div className="mt-12 lg:mt-20 left-margin">
      <div className="pb-10">
        <p className="text-5xl text-custom-gray mb-3">Our services.</p>
        <p className="text-4xl md:text-5xl mb-3">Design-led digital</p>
        <p className="text-4xl md:text-5xl">products.</p>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 mt-8 lg:mt-20 max-w-[1250px]">
        <div>
          <ul className="list-none p-0">
            <ProductListItem number="1" title="Development" />
            <ProductListItem number="2" title="Custom Design" />
            <ProductListItem
              number="3"
              title="Blockchain Solutions"
              style="md:border-b"
            />
          </ul>
        </div>
        <div>
          <ul className="list-none p-0">
            <ProductListItem number="4" title="Third Party Integrations" />
            <ProductListItem number="5" title="Discord Services" />
            <ProductListItem number="6" title="Tech Support" style="border-b" />
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

import { FC } from "react";
import { Button, ProductListItem } from "@components";
import { PRODUCT_LIST } from "@constants";

const ProductList: FC = () => {
  return (
    <div className="min-h-[100svh] xl:min-h-full xl:h-[100svh] max-h-[1080px] w-screen col-centered ">
      <div className="flex flex-col lg:flex-row items-start justify-center gap-14 xl:gap-40 2xl:gap-64 px-4 lg:px-0 py-10">
        <div className="flex flex-col gap-5 w-[410px] h-full justify-between">
          <div className="flex flex-col gap-8">
            <p className="text-4xl md:text-5xl font-normal !leading-[1.3] tracking-wide">
              Design-led digital products.
            </p>
            <p className="text-custom-gray text-lg lg:text-xl font-regular !tracking-wide font-barlow">
              Founded in January 2023, Sandbox Studio emerged from the nearly
              decade-long partnership between Miguel Corzo and Wallace Palmer.
              Having spent over ten years working together, our collaborative
              journey began in diverse industries.
            </p>
          </div>
          <Button
            title="Check full list of services"
            link="/services"
            className="!min-w-[306px] h-[48px]"
          />
        </div>

        <div className="flex flex-col gap-10">
          <p className="text-white/60 text-xl lg:text-3xl font-regular !tracking-wide font-barlow">
            Our services.
          </p>
          <div className="flex flex-col">
            {PRODUCT_LIST.map((item, index) => (
              <ProductListItem
                key={index}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

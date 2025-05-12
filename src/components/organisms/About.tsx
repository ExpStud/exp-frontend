import { FC } from "react";
import { Button } from "@components";
import Image from "next/image";

const About: FC = () => {
  return (
    <div className="landing-container col-centered max-w-screen overflow-hidden py-16 lg:py-10">
      <div className="flex flex-col xl:flex-row gap-16 xl:gap-32 max-w-[1256px]">
        <div className="flex flex-col gap-10 xl:gap-14 max-w-[608px]">
          <div>
            <h2 className="mb-3">Our team.</h2>
            <h2 className="text-sand">Learn more.</h2>
          </div>
          <div>
            <p className="font-regular text-lg xl:text-xl mb-5">
              Founded in January 2023, Sandbox Studio emerged from the nearly
              decade-long partnership between Miguel Corzo and Wallace Palmer.
              Having spent over ten years in collaboration, our journey has
              spanned diverse industries.
            </p>
            <p className=" font-regular text-lg xl:text-xl">
              We&apos;ve worked with some of the finest artist, builders, and
              graphic designers and take pride in our expansive portfolio.
            </p>
          </div>
          <Button title="About us" link="/about" />
        </div>
        {/* <div className="w-[90vw] md:w-[608px] xl:!w-[780px] relative xl:-mr-64 aspect-[807/512]"> */}
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/logo-art.png`}
          alt="Sandbox Art"
          width={807}
          height={512}
          className="xl:-mr-64 object-cover scale-95"
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default About;

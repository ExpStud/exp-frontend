import { FC } from "react";
import { Button } from "@components";
import Image from "next/image";

const About: FC = () => {
  return (
    <div className="landing-container col-centered">
      <div className="flex flex-col xl:flex-row gap-16 xl:gap-32 max-w-[1256px]">
        <div className="flex flex-col gap-10 xl:gap-14 max-w-[608px]">
          <div>
            <h2 className="mb-3">Learn more</h2>
            <h2 className="text-sand">about the team.</h2>
          </div>
          <div>
            <p className="font-barlow font-light text-lg xl:text-xl mb-5">
              At EXP, we specialise in building cutting-edge identity systems to
              help professional service providers increase their value and gain
              a competitive advantage from branding & websites.
            </p>
            <p className="font-barlow font-light text-lg xl:text-xl">
              We&apos;ve worked with some of the Canberra region&apos;s finest
              builders, architects and interior designers and take pride in our
              expansive portfolio. We will continue to complete work on time and
              within budget - without compromising quality or safety.
            </p>
          </div>
          <Button title="About us" link="/about" />
        </div>
        <div className="w-[90vw] md:w-[608px] xl:w-[780px] aspect-video relative xl:-mr-64">
          <Image
            src={`${process.env.CLOUDFLARE_STORAGE}/images/logo-art.jpg`}
            alt="Sandbox Art"
            fill
            className="border-art object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

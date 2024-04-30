import { FC } from "react";
import { Button } from "@components";

interface Props {}

const LandingView: FC<Props> = (props: Props) => {
  return (
    <div className="left-margin mt-12 md:mt-20 pr-5">
      <p className="text-5xl text-custom-gray mb-3">About ourselves.</p>
      <p className="text-4xl md:text-5xl">Perfeggcionism freaks.</p>

      <div className="lg:w-1/2 mt-10 text-xl  max-w-[800px]">
        <p>
          At EXP, we specialise in building cutting-edge identity systems to
          help professional service providers increase their value and gain a
          competitive advantage from branding & websites.
        </p>
        <br></br>
        <p>
          We&apos;ve worked with some of the Canberra region&apos;s finest
          builders, architects and interior designers and take pride in our
          expansive portfolio. We will continue to complete work on time and
          within budget - without compromising quality or safety.
        </p>
      </div>

      <div className="mt-12 md:mt-20">
        <Button title="About us" link="/about" />
      </div>
    </div>
  );
};

export default LandingView;

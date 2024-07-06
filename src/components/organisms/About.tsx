import { FC } from "react";
import { Button } from "@components";

interface Props {}

const LandingView: FC<Props> = (props: Props) => {
  return (
    <div className="left-margin top-margin">
      <p className="text-5xl text-custom-gray mb-3">About ourselves.</p>
      <p className="text-4xl md:text-5xl">Building Experience.</p>

      <div className="lg:w-1/2 mt-10 text-xl  max-w-[608px]">
        <p>
          At Sandbox Studio, we pride ourselves in crafting experiences to help artists,
          creators, and professionals increase their online impact through
          design & websites.
        </p>
        <br></br>
        <p>
          {/* Using our vast experience in multiple industries to influence timeless
          web solutions. */}
        </p>
      </div>

      <div className="mt-8">
        <Button title="About us" link="/about" />
      </div>
    </div>
  );
};

export default LandingView;

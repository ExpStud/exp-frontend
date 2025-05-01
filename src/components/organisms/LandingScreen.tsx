import { Logo } from "@components";
import { FC } from "react";

interface Props {}

const LandingScreen: FC<Props> = (props: Props) => {
  return (
    <div className="min-h-[100svh] w-screen flex flex-col items-center justify-end gap-5 lg:gap-10">
      <Logo />
      <div className="col-centered uppercase w-[350px] h-[49px] lg:text-lg text-sand-300 bg-sand/10 border border-exp-gray-100 font-bold rounded-3xl">
        Design & Development Studio
      </div>
      <p className="text-3xl lg:text-4xl ">
        proof is in the pudding, click play below
      </p>
      <div className="bg-black rounded-t-3xl w-[800px] 2xl:w-[900px] aspect-video"></div>
    </div>
  );
};

export default LandingScreen;

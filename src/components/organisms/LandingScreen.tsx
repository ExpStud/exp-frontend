import { Logo } from "@components";
import { FC } from "react";

interface Props {}

const LandingScreen: FC<Props> = (props: Props) => {
  return (
    <div className="min-h-[100svh] w-screen flex flex-col items-center justify-end">
      <Logo />
    </div>
  );
};

export default LandingScreen;

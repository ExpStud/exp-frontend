import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext, useState } from "react";
import { ViewContext, slideUp } from "@constants";
import { TwitterIcon, WelcomeSection } from "@components";
import Image from "next/image";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const ContactView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <div className="relative w-full h-full items-center justify-center">
      <WelcomeSection title1="How can we help?" title2="Let's work together." />

      <div className="container ml-128 p-10 flex">
        <div className="w-1/3 pr-10">
          <p>
            Working together takes some practice to get in sync, but once we
            find our rhythm, the result can be magical!
          </p>
          <p>Hate contact forms?</p>
          <p>hello@expstudio.co</p>
        </div>

        <div className="w-2/3">
          <p>What are you looking for?</p>
          <p>Please choose an option below</p>
        </div>
      </div>
    </div>
  );
};

export default ContactView;

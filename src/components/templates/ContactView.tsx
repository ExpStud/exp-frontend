import { motion } from "framer-motion";
import { Dispatch, SetStateAction, FC, useContext, useState } from "react";
import { ViewContext, slideUp } from "@constants";
import {
  TwitterIcon,
  WelcomeSection,
  ContactForm,
  BackgroundImage,
} from "@components";
import Image from "next/image";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const ContactView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  const handleSubmit = (formData: any) => {
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="relative w-full h-full items-center justify-center">
      <BackgroundImage />

      <div className="relative z-10">
        <WelcomeSection
          title1="How can we help?"
          title2="Let's work together."
        />

        <hr className="border-gray-700 mt-20"></hr>

        <div className="ml-10 mt-10 flex">
          <div className="w-1/3 pr-10">
            <p>
              Working together takes some practice to get in sync, but once we
              find our rhythm, the result can be magical!
            </p>
            <p className="mt-10">Hate contact forms?</p>
            <p>hello@expstudio.co</p>
          </div>

          <div className="w-2/3 mb-20">
            {/* <p>What are you looking for?</p>
            <p>Please choose an option below</p> */}

            <ContactForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;

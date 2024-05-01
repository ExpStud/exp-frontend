import { Dispatch, SetStateAction, FC, useContext } from "react";
import { ViewContext } from "@constants";
import { WelcomeSection, ContactForm, BackgroundImage } from "@components";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const ContactView: FC<Props> = (props: Props) => {
  const { setAssets } = props;

  return (
    <div className="relative w-full h-full items-center justify-center overflow-hidden">
      <BackgroundImage />

      <div className="relative z-10">
        <WelcomeSection
          title1="How can we help?"
          title2="Let's work together."
        />

        <hr className="border-white border-opacity-10 top-margin"></hr>

        <div className="left-margin mt-10  flex flex-col lg:flex-row  lg:gap-20">
          <div className="lg:w-1/3 pr-10 max-w-[350px] mb-10">
            <p className="text-white text-opacity-60 text-xl">
              Working together takes some practice to get in sync, but once we
              find our rhythm, the result can be magical!
            </p>
            <p className="mt-10">Hate contact forms?</p>
            <p>hello@expstudio.co</p>
          </div>

          <div className="lg:w-2/3 max-w-[835px] mb-20 pr-5">
            {/* <p>What are you looking for?</p>
            <p>Please choose an option below</p> */}

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;

import { Dispatch, SetStateAction, FC, useContext } from "react";
import {
  WelcomeSection,
  ContactForm,
  BackgroundImage,
  AnimateWrapper,
} from "@components";
import { ViewContext } from "src/contexts";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const ContactView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  return (
    <div className="relative w-full h-full items-center justify-center overflow-hidden">
      <BackgroundImage setAssets={setAssets} />

      <div className="relative z-10">
        <AnimateWrapper animate={showView} opacity={true}>
          <WelcomeSection
            title1="How can we help?"
            title2="Let's work together."
          />
        </AnimateWrapper>

        <hr className="border-white border-opacity-10 top-margin"></hr>

        <AnimateWrapper animate={showView} opacity={true}>
          <div className="left-margin top-margin  flex flex-col lg:flex-row lg:gap-20">
            <div className="lg:w-1/3 pr-10 max-w-[350px] mb-10">
              <p className="text-white text-opacity-60 text-xl">
                Working together takes some practice to get in sync, but once we
                find our rhythm, the result can be magical!
              </p>
              <p className="mt-10">Hate contact forms?</p>
              <p>hello@expstudio.co</p>
            </div>

            <div className="lg:w-2/3 max-w-[835px] mb-20 pr-5">
              <p>What are you looking for?</p>
              <p className="opacity-60">Let us know what you need below:</p>

              <div className="lg:w-[49%] my-8 mr-4 pb-2 border-b border-white ">
                <p>
                  Get a quote <br /> For new projects
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </AnimateWrapper>
      </div>
    </div>
  );
};

export default ContactView;

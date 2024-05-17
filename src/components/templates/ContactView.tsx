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
    <div className="relative w-full h-full items-center justify-center overflow-hidden mb-10 ">
      <BackgroundImage setAssets={setAssets} />

      <AnimateWrapper animate={showView}>
        <div className="relative z-10">
          <WelcomeSection
            title1="How can we help?"
            title2="Let's work together."
          />

          <hr className="border-white border-opacity-10 top-margin"></hr>

          <div className="left-margin top-margin  flex flex-col lg:flex-row lg:gap-20">
            <div className="lg:w-1/3 pr-10 max-w-[350px] mb-10">
              <p className="text-white text-opacity-60 text-xl">
                Collaboration is our expertise, feel free to reach out with any
                questions.
              </p>
              <p className="mt-10">Hate contact forms?</p>
              <a
                rel="noreferrer"
                target="_blank"
                href="mailto:miguel@expstud.io"
                className="hover:underline"
              >
                miguel@expstud.io
              </a>
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
        </div>
      </AnimateWrapper>
    </div>
  );
};

export default ContactView;

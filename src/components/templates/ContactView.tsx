import { Dispatch, SetStateAction, FC, useContext } from "react";
import {
  WelcomeSection,
  ContactForm,
  BackgroundImage,
  AnimateWrapper,
} from "@components";
import { useViewStore } from "src/contexts";
import { introContainerVariants, fadeInUp, stagger } from "@constants";
import { motion } from "framer-motion";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const ContactView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useViewStore();

  return (
    <div className="page-py page-px col-centered relative w-full h-full min-h-[70svh] xl:min-h-screen overflow-hidden mb-10 ">
      <BackgroundImage setAssets={setAssets} />
      <motion.div
        className="col-start gap-8 md:gap-12 max-w-[824px] w-full"
        variants={stagger(0.2, 0.2)}
        initial="hidden"
        animate={showView ? "show" : "hidden"}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="flex w-full justify-between">
          <motion.div className="flex flex-col lg:gap-2" variants={fadeInUp}>
            <h1 className="text-white">How can we help?</h1>
            <p className="max-w-[425px]">
              Take a few seconds to fill out the form below and we will get back
              to you as soon as possible!
            </p>
          </motion.div>
          <motion.div className="hidden lg:flex flex-col " variants={fadeInUp}>
            <p className="text-white font-light">Hate contact forms?</p>
            <a
              rel="noreferrer"
              target="_blank"
              href="mailto:info@sandboxstud.io"
              className="underline tracking-wide font-barlow"
            >
              info@sandboxstud.io
            </a>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col gap-5 lg:gap-10 w-full"
          variants={fadeInUp}
        >
          <div className="border-b border-white/20 pb-3">
            <p>
              Get a quote <br /> For new projects
            </p>
          </div>
          <ContactForm />
        </motion.div>
        <motion.div
          className="flex lg:hidden flex-col mb-6"
          variants={fadeInUp}
        >
          <p className="text-white font-light">Hate contact forms?</p>
          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:info@sandboxstud.io"
            className="underline tracking-wide font-barlow"
          >
            info@sandboxstud.io
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactView;

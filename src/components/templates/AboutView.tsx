import { Dispatch, SetStateAction, FC } from "react";
import { BackgroundImage, TeamMemberCard } from "@components";
import { useViewStore } from "src/contexts";
import { motion } from "framer-motion";
import {
  introContainerVariants,
  introItemVariants,
  teamMembers,
} from "@constants";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const AboutView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useViewStore();

  return (
    <div className="page-py page-px xl:min-h-[80vh] relative w-full h-full items-center justify-center z-0 mb-10">
      <BackgroundImage setAssets={setAssets} />
      <motion.div
        className="flex flex-col gap-2"
        variants={introContainerVariants}
        initial="hidden"
        animate={showView ? "show" : "hidden"}
      >
        <motion.h1 variants={introItemVariants}>
          Meet the <span className="text-sand font-medium">Sandbox</span> Team
        </motion.h1>
        <motion.p
          variants={introItemVariants}
          className="subheading max-w-[700px] pb-8"
        >
          Our team is a tight-knit unit of talented individuals. Years of
          collaboration has made us not only a team with strong chemistry, but a
          team that delivers.
        </motion.p>
        {/* Team Members */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4 px-4 md:px-0 max-w-[1290px]"
          variants={introItemVariants}
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutView;

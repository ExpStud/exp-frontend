import {
  Dispatch,
  SetStateAction,
  FC,
  useContext,
  Fragment,
  useCallback,
  useState,
} from "react";
import {
  WelcomeSection,
  ProjectItem,
  LetsWorkLink,
  BackgroundImage,
  AnimateWrapper,
} from "@components";
import { ViewContext } from "@contexts";
import { projects } from "@constants";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const ProjectsView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  const [animate, setAnimate] = useState(false);

  return (
    <div className="relative w-full h-full">
      <BackgroundImage setAssets={setAssets} />
      <AnimateWrapper animate={showView}>
        <WelcomeSection title1="Projects." />
        <hr className="border-white border-opacity-10 top-margin"></hr>
      </AnimateWrapper>

      {projects.map((project, index) => (
        <ProjectItem project={project} key={index} />
      ))}

      <LetsWorkLink />
    </div>
  );
};

export default ProjectsView;

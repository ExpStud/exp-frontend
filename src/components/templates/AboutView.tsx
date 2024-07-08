import {
  Dispatch,
  SetStateAction,
  FC,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";
import {
  WelcomeSection,
  LetsWorkLink,
  BackgroundImage,
  AnimateWrapper,
} from "@components";
import Image from "next/image";
import { ViewContext } from "src/contexts";
import { useInView } from "framer-motion";

interface Props {
  setAssets?: Dispatch<SetStateAction<boolean[]>>;
}

const yearsActive = 8;
const projectsCompleted = 17;

const AboutView: FC<Props> = (props: Props) => {
  const { setAssets } = props;
  const { showView } = useContext(ViewContext);

  const [showCounter, setCounter] = useState(false);
  const [showProjectsCounter, setShowProjectsCounter] = useState(false);

  const [yearsCount, setYearsCount] = useState<number>(0);
  const [projectsCount, setProjectsCount] = useState<number>(0);

  const teamRef = useRef<HTMLHRElement>(null);
  const darthRef = useRef<HTMLHRElement>(null);

  const teamInView = useInView(teamRef, {
    once: true,
  });
  const darthInView = useInView(darthRef, {
    once: true,
  });

  //years active counter
  useEffect(() => {
    const timer = setInterval(() => {
      if (showCounter && yearsCount < yearsActive) {
        setYearsCount((prevNumber) => prevNumber + 1);
      }
    }, 125);

    if (yearsCount === yearsActive) {
      clearInterval(timer);
      setShowProjectsCounter(true);
    }
    return () => {
      clearInterval(timer);
    };
  }, [projectsCount, showCounter, yearsCount]);

  //projects completed counter
  useEffect(() => {
    const timer = setInterval(() => {
      if (showProjectsCounter && projectsCount < projectsCompleted) {
        setProjectsCount((prevNumber) => prevNumber + 1);
      }
    }, 125);

    if (projectsCount === projectsCompleted) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [projectsCount, showProjectsCounter]);

  return (
    <div className="relative w-full h-full items-center justify-center">
      <BackgroundImage setAssets={setAssets} />

      <div className="relative z-10">
        <AnimateWrapper
          animate={showView}
          onAnimationComplete={() => setCounter(true)}
        >
          <WelcomeSection title1="About us." />

          <div className="left-margin mt-20 flex flex-col lg:flex-row justify-between max-w-[1220px]">
            <div className="font-medium">
              <p className="text-5xl text-custom-gray mb-3">Our journey.</p>
              <p className="text-4xl md:text-5xl pb-10">
                Perfeggcionism freaks.
              </p>
            </div>

            <div className="lg:w-1/2 text-xl max-w-[608px]">
              <p>
                Founded in January 2023, EXP Studio emerged from the nearly
                decade-long partnership between Miguel Corzo and Wallace Palmer.
                Having spent over ten years working together, our collaborative
                journey began in diverse industries. Transitioning from SaaS
                engineers to trailblazers in the Web 3 space, we bring authentic
                expertise to the table.
              </p>
            </div>
          </div>

          <div className="left-margin mt-20 flex flex-row text-xl text-custom-gray">
            <div>
              <p className="text-9xl font-light text-custom-purple">
                {yearsCount}
              </p>
              <p>Years active</p>
            </div>

            <div className="ml-20">
              <p className="text-9xl font-light text-custom-purple">
                {projectsCount}
              </p>
              <p>Projects completed</p>
            </div>
          </div>
        </AnimateWrapper>

        <hr className="border-white border-opacity-10 mt-32" />

        <AnimateWrapper animate={teamInView}>
          <div className="left-margin mt-20 text-5xl font-medium" ref={teamRef}>
            <p className="text-5xl text-custom-gray mb-3">Our team.</p>
            <p className="text-4xl md:text-5xl"> Chemistry personified.</p>

            <p className="text-xl lg:w-1/2 mt-10 font-normal">
              What sets us apart is not just our services but the passion and
              expertise each team member brings. We thrive on challenges, push
              creative boundaries, and are dedicated to delivering solutions
              that exceed expectations.
            </p>
          </div>
          <div className="left-margin mt-20 flex flex-col lg:flex-row gap-2">
            <Image
              src="/images/about/14-nacho.jpg"
              alt="Miguel"
              width={608}
              height={608}
              className="rounded-md grayscale-image"
            />

            <div className="flex flex-col justify-items-start lg:w-1/2 max-w-[608px] lg:ml-10">
              <p>Miguel Corzo (Otablem)</p>
              <p className="text-custom-gray">
                With a decade-long career, Miguel brings a wealth of experience
                to the table. As EXP&apos;s project manager and founder, Miguel
                orchestrates seamless collaborations, and development cycles
                ensuring your vision comes to life with precision and
                creativity.
              </p>

              <p className="mt-5">Web 3 Experience</p>
              <div className="text-custom-gray">
                <p>
                  My Slimes & All in Time Project Manager (2 years and counting)
                </p>
                <p>Slimes Studio Project Manager (1 year and counting)</p>
                <p>Project Manager at DeGods & y00ts (1 year) </p>
                <p>Project Manager at Hot Heads (1 year)</p>
              </div>

              <p className="mt-5">Web 2 Experience</p>
              <div className="text-custom-gray">
                <p>Account Support & Customer Service (1 year)</p>
                <p>Technical Support (1 year)</p>
                <p>Mobile Application Specialist (3 years)</p>
                <p>Product Owner & Manager (1 year)</p>
                <p>Software Sales (1 year) </p>
              </div>
            </div>
          </div>
        </AnimateWrapper>

        <AnimateWrapper animate={darthInView}>
          <div
            className="left-margin mt-10 flex flex-col-reverse lg:flex-row lg:items-end gap-2"
            ref={darthRef}
          >
            <div className="flex flex-col lg:w-1/2 max-w-[608px]">
              <p>Wallace Palmer</p>
              <p className="text-custom-gray">
                As EXP&apos;s lead developer, Wallace is the driving force
                behind the technical brilliance at EXP Studio. With over 10
                years development experience in various industries he has
                evolved from SaaS web & mobile engineering to pioneering modern
                solutions on the Solana Blockchain.
              </p>

              <p className="mt-5">Web 3 Experience</p>
              <div className="text-custom-gray">
                <p>Lead Developer at DeGods & y00ts (1 year)</p>
                <p>Blockchain Freelancing (3 year)</p>
              </div>

              <p className="mt-5">Web 2 Experience</p>
              <div className="text-custom-gray">
                <p>Mobile Application Development Lead (5 year)</p>
                <p>Full Stack Web Developer (2 years)</p>
                <p>Technical Support (2 years)</p>
              </div>
            </div>

            <Image
              src="/images/about/33-nino.jpg"
              alt="Wallace"
              width={608}
              height={608}
              className="rounded-md grayscale-image transition-300"
            />
          </div>
        </AnimateWrapper>

        <hr className="border-white border-opacity-10 mt-20"></hr>

        <LetsWorkLink />
      </div>
    </div>
  );
};

export default AboutView;

import Link from "next/link";
import { FC, useState } from "react";
import { CloseIcon, ExpIcon, MenuIcon } from "@components";
import { AnimatePresence, motion } from "framer-motion";
import {
  exitAnimation,
  menuItemVariants,
  midExitAnimation,
  openMenuVariants,
} from "@constants";
import Image from "next/image";
import { useRouter } from "next/router";
import { useWindowSize } from "src/hooks";

interface Props {}

const Navigation: FC<Props> = (props: Props) => {
  const {} = props;

  const [open, setOpen] = useState(false);
  const [winWidth] = useWindowSize();

  return (
    <div className="z-50 bg-black h-[100vh] w-16 flex flex-col text-gray-100">
      <motion.div
        className="z-10 fixed top-0 left-0 bottom-0 bg-black flex flex-col items-start justify-between py-7 px-4"
        variants={openMenuVariants(winWidth < 900 ? winWidth : 800)}
        initial="closed"
        animate={open ? "open" : "closed"}
      >
        {!open ? (
          <MenuIcon onClick={() => setOpen(!open)} />
        ) : (
          <CloseIcon onClick={() => setOpen(!open)} />
        )}
        <AnimatePresence>
          {open && (
            <motion.div
              className="flex flex-col gap-8 h-full pl-16 md:pl-32"
              {...menuItemVariants}
            >
              <NavigationItem href="/">Home</NavigationItem>
              <NavigationItem href="/projects">Our work</NavigationItem>
              <NavigationItem href="/services">What we do</NavigationItem>
              <NavigationItem href="/about">About us</NavigationItem>
              <NavigationItem href="/contact">Contact us</NavigationItem>

              <div className="flex flex-col gap-2 pt-12">
                <p className="opacity-60">Follow us</p>
                <a
                  href="https://www.instagram.com/expstudio_/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Instagram
                </a>
                <a
                  href="https://twitter.com/rulebreakers___"
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkdIn
                </a>
                <a
                  href="https://twitter.com/exp_studio_"
                  rel="noreferrer"
                  target="_blank"
                >
                  X
                </a>
              </div>
              {/*  corner image */}
              <Image
                src="/images/exp-corner.svg"
                alt="exp"
                width={673}
                height={637}
                className="absolute top-0 right-0 -z-10"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <ExpIcon />
      </motion.div>

      {/* background shadow */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="z-0 fixed inset-0 bg-background-black bg-opacity-80 "
            onClick={() => setOpen(false)}
            {...midExitAnimation}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

interface NavigationItemProps {
  children: React.ReactNode;
  href: string;
}
const NavigationItem: FC<NavigationItemProps> = (
  props: NavigationItemProps
) => {
  const { children, href } = props;

  const router = useRouter();
  const active = router.asPath === href;

  return (
    <Link
      href={href}
      className={`text-4xl lg:text-5xl transition-200 hover:opacity-100 hover:shadow-sm ${
        active ? "opacity-100" : "opacity-60"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navigation;

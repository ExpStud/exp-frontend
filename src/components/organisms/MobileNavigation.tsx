import Link from "next/link";
import { FC, HTMLAttributes, useEffect, useState } from "react";
import { CloseIcon, ExpIcon, MenuIcon, TwoLinesIcon } from "@components";
import { AnimatePresence, motion } from "framer-motion";
import {
  fastExitAnimation,
  menuItemVariants,
  midExitAnimation,
  openMenuVariants,
} from "@constants";
import Image from "next/image";
import { useRouter } from "next/router";
import { useWindowSize } from "src/hooks";

const MobileNavigation: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { ...componentProps } = props;

  const [open, setOpen] = useState(false);
  const [winWidth] = useWindowSize();

  //stop page scroll (when modal or menu open)
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  return (
    <div
      className={`fixed top-0 z-50 h-16 w-screen bg-footer-purple flex justify-between px-5 md:px-10 items-center  ${
        componentProps.className ?? ""
      }`}
    >
      <ExpIcon className="scale-90 md:scale-100 " />
      <TwoLinesIcon animate={open} onClick={() => setOpen(!open)} />
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
      className={`text-4xl lg:text-5xl transition-200 hover:opacity-100 ${
        active ? "opacity-100" : "opacity-60"
      }`}
    >
      {children}
    </Link>
  );
};

export default MobileNavigation;

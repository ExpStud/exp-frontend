import { FC, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useWindowSize } from "@hooks";
import {
  dekstopMenuParent,
  menuChild2Variants,
  menuChildVariants,
  midExitAnimation,
} from "@constants";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  toggleMenu: (i?: number) => void;
  open: boolean;
  menuVariants?: any;
  childVariants?: any;
}

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Our work" },
  { href: "/services", label: "What we do" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/exp_studio_/",
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/104833153/",
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/sandbox_studio_",
    label: "X",
  },
];

const NavigationMenu: FC<Props> = (props: Props) => {
  const {
    toggleMenu,
    open,
    menuVariants = dekstopMenuParent,
    childVariants = menuChild2Variants,
  } = props;
  const [winWidth, winHeight] = useWindowSize();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const ref = useRef(null);

  const isTablet: boolean = winWidth < 900;
  //stop page scroll (when modal or menu open)
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (open) {
      timeoutRef.current = setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 700);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open]);
  return (
    <>
      {/* backsplash */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="z-0 fixed inset-0 bg-background-black bg-opacity-80 cursor-pointer"
            onClick={() => toggleMenu()}
            {...midExitAnimation}
          />
        )}
      </AnimatePresence>
      {/* menu */}
      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <motion.aside
            key="main-menu"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: isTablet ? winWidth : 669, opacity: 1 }}
            exit={{
              width: 0,
              transition: { duration: 0.5, delay: 0.25 },
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
            className="bg-black fixed top-0 right-0 z-50 "
            ref={ref}
          >
            <motion.nav
              variants={menuVariants}
              initial={"hidden"}
              animate={"show"}
              exit={"closed"}
              className="h-screen pl-16 md:pl-24 pt-10 lg:pt-16 z-0 flex flex-col gap-8 0"
              key="nav"
            >
              {menuItems.map((item, index) => (
                <NavigationItem key={index} href={item.href}>
                  {item.label}
                </NavigationItem>
              ))}
              {/* Corner Image */}
              <motion.div variants={childVariants} className="-z-20">
                <Image
                  src={`${process.env.CLOUDFLARE_STORAGE}/images/exp-corner.svg`}
                  alt="exp"
                  width={673}
                  height={637}
                  className="absolute top-0 right-0 -z-10 w-3/4 lg:w-auto"
                />
              </motion.div>
              {/* Social Links */}
              <motion.div
                className="flex flex-col gap-2 pt-12"
                variants={childVariants}
              >
                <p className="text-custom-dark-gray">Follow us</p>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    rel="noreferrer"
                    target="_blank"
                    className="text-white/70 transition-200 hover:text-white/100"
                  >
                    {link.label}
                  </a>
                ))}
              </motion.div>
            </motion.nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
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
    <motion.div variants={menuChildVariants}>
      <Link
        href={href}
        className={`text-4xl lg:text-5xl transition-200 hover:opacity-100 ${
          active ? "opacity-100" : "opacity-60"
        }`}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default NavigationMenu;

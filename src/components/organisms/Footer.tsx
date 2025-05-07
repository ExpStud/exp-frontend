import { FC, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={`relative bg-sand`}>
      <div className="flex justify-between gap-2 md:gap-4 mx-5 md:mx-10 pt-10">
        <div className="flex flex-col text-xl gap-1.5">
          <FooterItem href="/">Home</FooterItem>
          <FooterItem href="/projects">Our work</FooterItem>
          <FooterItem href="/services">What we do</FooterItem>
          <FooterItem href="/about">About us</FooterItem>
          <FooterItem href="/contact">Contact us</FooterItem>
          <p className="text-xs font-barlow text-black mt-14">
            ©{year} SANDBOX STUDIO™
          </p>
        </div>
        <div className="flex flex-col gap-1 text-sm lg:text-base text-black">
          <p>Follow us</p>
          <a
            href="https://www.instagram.com/exp_studio_/"
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/exp-studio-llc"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/exp_studio_"
            rel="noreferrer"
            target="_blank"
          >
            X
          </a>
        </div>
      </div>
      <hr className="border-footer-border mt-3"></hr>
      <div className="relative w-full h-auto">
        {/* <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/footer/footer-blem.jpg`}
          alt="footer"
          width={1536}
          height={180}
          className="hidden lg:block w-full h-auto aspect-[2/1] md:aspect-[6/1] lg:aspect-[9/1] object-cover"
        />
        <Image
          src={`${process.env.CLOUDFLARE_STORAGE}/images/footer/footer-blem.jpg`}
          alt="footer"
          width={1536}
          height={180}
          className="lg:hidden w-full h-auto aspect-[1.75/1] md:aspect-[6/1] lg:aspect-[9/1] object-cover"
        /> */}
        {/* Adjust the background color and opacity here */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-[#6242cb] opacity-60 mix-blend-overlay"></div> */}
      </div>
    </footer>
  );
};

interface FooterItemProps {
  children: React.ReactNode;
  href: string;
}
const FooterItem: FC<FooterItemProps> = (props: FooterItemProps) => {
  const { children, href } = props;

  return (
    <UnderlineAnimation underlineColor="black">
      <Link
        href={href}
        className={`text-lg md:text-xl transition-300 text-black opacity-100`}
      >
        {children}
      </Link>
    </UnderlineAnimation>
  );
};

interface UnderlineAnimationProps {
  children: ReactNode; // The text or content to display
  underlineColor?: string; // Color of the underline (default: black)
  className?: string; // Additional classes for styling
}

const UnderlineAnimation: FC<UnderlineAnimationProps> = ({
  children,
  underlineColor = "black",
  className = "",
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute bottom-0 left-0 h-[2px]"
        style={{ backgroundColor: underlineColor }}
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Footer;

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="bg-footer-purple z-10">
      <div className="flex flex-col justify-between mx-10 sm:flex-row gap-2 md:gap-4 text-custom-purple">
        <div className="flex flex-col mt-20">
          <FooterItem href="/">Home</FooterItem>
          <FooterItem href="/projects">Our work</FooterItem>
          <FooterItem href="/services">What we do</FooterItem>
          <FooterItem href="/about">About us</FooterItem>
          <FooterItem href="/contact">Contact us</FooterItem>
          <p className="mt-20 mb-10 text-xs font-normal text-copyright-purple">
            ©2024 EXP STUDIO™
          </p>
        </div>
        <div className="flex flex-col mt-20 mr-10">
          <p className="mb-3 text-copyright-purple">Follow us</p>
          <a
            href="https://instagram.com"
            rel="noreferrer"
            target="_blank"
            className="mb-3 cursor-pointer hover:bg-clip-text hover:bg-orange-gradient hover:text-transparent transition-bg duration-200"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            rel="noreferrer"
            target="_blank"
            className="mb-3 cursor-pointer hover:bg-clip-text hover:bg-orange-gradient hover:text-transparent transition-bg duration-200"
          >
            Linkedin
          </a>
          <a
            href="https://twitter.com/rulebreakers___"
            rel="noreferrer"
            target="_blank"
            className="mb-3 cursor-pointer hover:bg-clip-text hover:bg-orange-gradient hover:text-transparent transition-bg duration-200"
          >
            X
          </a>
        </div>
      </div>
      <Image
        src="/images/footer-image.png"
        alt="footer"
        width={608}
        height={608}
        className="w-full h-auto grayscale-purple"
      />
    </footer>
  );
};

interface FooterItemProps {
  children: React.ReactNode;
  href: string;
}
const FooterItem: FC<FooterItemProps> = (
  props: FooterItemProps
) => {
  const { children, href } = props;

  return (
    <Link
      href={href}
      className={`mb-3 text-xl font-medium cursor-pointer hover:bg-clip-text hover:bg-orange-gradient hover:text-transparent transition-bg duration-200"`}
    >
      {children}
    </Link>
  );
};

export default Footer;

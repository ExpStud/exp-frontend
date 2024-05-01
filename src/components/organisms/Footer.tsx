import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer: FC = () => {
  const router = useRouter();
  const year = new Date().getFullYear();

  return (
    <footer
      className={`relative bg-footer-purple z-10 ${
        router.asPath === "/" ? "left-padding" : ""
      }`}
    >
      <div className="flex justify-between  gap-2 md:gap-4 text-custom-purple  mx-5 md:mx-10 pt-10">
        <div className="flex flex-col text-xl gap-1.5">
          <FooterItem href="/">Home</FooterItem>
          <FooterItem href="/projects">Our work</FooterItem>
          <FooterItem href="/services">What we do</FooterItem>
          <FooterItem href="/about">About us</FooterItem>
          <FooterItem href="/contact">Contact us</FooterItem>
          <p className="text-xs font-normal text-copyright-purple mt-14">
            ©{year} EXP STUDIO™
          </p>
        </div>
        <div className="flex flex-col gap-1 text-sm lg:text-base">
          <p className="text-copyright-purple">Follow us</p>
          <a
            href="https://www.instagram.com/expstudio_/"
            rel="noreferrer"
            target="_blank"
            className="transition-300 hover:text-white hover:text-opacity-80"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/exp-studio-llc"
            rel="noreferrer"
            target="_blank"
            className="transition-300 hover:text-white hover:text-opacity-80"
          >
            Linkedin
          </a>
          <a
            href="https://twitter.com/exp_studio_"
            rel="noreferrer"
            target="_blank"
            className="transition-300 hover:text-white hover:text-opacity-80"
          >
            X
          </a>
        </div>
      </div>
      <hr className="border-footer-border mt-3"></hr>
      <div className="relative w-full h-auto">
        <Image
          src="/images/footer/footer-blem.jpg"
          alt="footer"
          width={1536}
          height={180}
          className="hidden lg:block w-full h-auto aspect-[2/1] md:aspect-[6/1] lg:aspect-[9/1] object-cover"
        />
        <Image
          src="/images/footer/footer-blem.jpg"
          alt="footer"
          width={1536}
          height={180}
          className="lg:hidden w-full h-auto aspect-[1.75/1] md:aspect-[6/1] lg:aspect-[9/1] object-cover"
        />
        {/* Adjust the background color and opacity here */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#6242cb] opacity-60 mix-blend-overlay"></div>
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
    <Link
      href={href}
      className={`text-lg md:text-xl transition-300 hover:text-white hover:text-opacity-80`}
    >
      {children}
    </Link>
  );
};

export default Footer;

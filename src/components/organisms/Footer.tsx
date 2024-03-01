import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="relative w-screen h-[500px] bg-exp-purple-500 text-exp-purple-200 flex flex-col justify-between ">
      <div className="flex flex-col gap-12 py-10 px-14">
        <div className="flex justify-between w-full font-barlow font-medium">
          <div className="flex flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/">Our work</Link>
            <Link href="/">What we do</Link>
            <Link href="/">About us</Link>
            <Link href="/">Contact us</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="opacity-60">Follow us</p>
            <a href="" rel="noreferrer" target="_blank">
              Instagran
            </a>
            <a href="" rel="noreferrer" target="_blank">
              LinkedIn
            </a>
            <a href="" rel="noreferrer" target="_blank">
              X
            </a>
          </div>
        </div>
        <p>©2024 EXP STUDIO™</p>
      </div>

      <Image
        src="/images/footer.png"
        alt="footer"
        height={180}
        width={1536}
        className="w-screen min-h-[120px] object-cover"
      />
    </footer>
  );
};

export default Footer;

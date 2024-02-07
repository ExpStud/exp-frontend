import { FC } from "react";
import Image from "next/image";

const Footer: FC = () => {
  return <footer className="">
    <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4">
        <div className="sm:w-1/3">
          <div className="hidden flex-col md:flex-row items-center justify-center gap-4 lg:gap-14 text-3xl md:text-4xl text-white">
            <a
              href="https://twitter.com/rulebreakers___"
              rel="noreferrer"
              target="_blank"
              className="cursor-pointer hover:bg-clip-text hover:bg-orange-gradient hover:text-transparent transition-bg duration-200"
            >
              Twitter
            </a>
            <a
              href="https://twitter.com/rulebreakers___"
              rel="noreferrer"
              target="_blank"
              className="cursor-pointer hover:bg-clip-text hover:bg-orange-gradient hover:text-transparent transition-bg duration-200"
            >
              Discord
            </a>
            <a
              href="https://twitter.com/rulebreakers___"
              rel="noreferrer"
              target="_blank"
              className="cursor-pointer hover:bg-clip-text hover:bg-orange-gradient hover:text-transparent transition-bg duration-200"
            >
              Marketplace
            </a>
          </div>
        </div>
        <Image
        src="/images/footer.png"
        alt="footer"
        width={608}
        height={608}
        className="px-2 lg:px-20 2xl:px-0"
        // onLoadingComplete={() => handleAssetLoad(0, setAssets)}
      />
      </div>
  </footer>;
};

export default Footer;

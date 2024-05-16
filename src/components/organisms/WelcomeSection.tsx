import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  title1?: string;
  title2?: string;
  title1Class?: string;
  title2Class?: string;
}

const WelcomeSection: FC<Props> = (props: Props) => {
  const { title1, title2, title1Class = "", title2Class = "" } = props;
  const router = useRouter();

  return (
    <div className="left-margin">
      <div className="border-b border-custom-dark-gray inline-block">
        <h1 className="py-5 text-2xl font-medium">
          <Link href="/">EXP STUDIO</Link>{" "}
        </h1>
      </div>

      <div className="py-5 text-sm text-custom-gray">
        <p className="text-white">Availability</p>
        <p>We&apos;re open for business and new collaborations</p>
        <p>
          as of now.{" "}
          {router.asPath !== "/contact" && (
            <Link href="/contact">
              <span className="text-gray-300 underline">Get in touch</span>
            </Link>
          )}
        </p>
      </div>

      <div className="mt-12 md:mt-20 text-4xl sm:text-6xl xl:text-7xl font-medium ">
        <p className={`mb-3 ${title1Class}`}>{title1}</p>
        {title2 && <p className={title2Class}>{title2}</p>}
      </div>
    </div>
  );
};

export default WelcomeSection;

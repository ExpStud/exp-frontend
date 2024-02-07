import { FC } from "react";
import Link from "next/link";

interface Props {
  title1: string;
  title2: string;
}

const WelcomeSection: FC<Props> = (props: Props) => {
  const { title1, title2 } = props;

  return (
    <div className="container ml-128 p-10 mt-10">
        <div className="border-b border-gray-300 inline-block">
          <h1 className="py-5 text-2xl font-medium">EXP STUDIO</h1>
        </div>
        
        <div className="py-5 text-sm text-gray-500">
          <p className="text-white">Availability</p>
            <p>We&apos;re open for business and new collaborations</p>
            <p>from Q3 2023. <Link href="/contact"><span className="text-gray-300 underline">Get in touch</span></Link></p>
        </div>
        
      
        <div className="mt-40 text-7xl font-medium">
          <p>{title1}</p>
          <p>{title2}</p>
        </div>
      </div>
  );
};

export default WelcomeSection;

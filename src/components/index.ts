import dynamic from "next/dynamic";

//icons
const TwitterIcon = dynamic(() => import("./@icons/TwitterIcon"));
//atoms
//molecules
const PageHead = dynamic(() => import("./molecules/PageHead"));
const SplashScreen = dynamic(() => import("./molecules/SplashScreen"));
//organisms
const Header = dynamic(() => import("./organisms/Header"));
const Footer = dynamic(() => import("./organisms/Footer"));
//templates
const PageLayout = dynamic(() => import("./templates/PageLayout"));
const LandingView = dynamic(() => import("./templates/LandingView"));

export {
  PageHead,
  Header,
  Footer,
  PageLayout,
  SplashScreen,
  LandingView,
  TwitterIcon
};

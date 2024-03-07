import dynamic from "next/dynamic";

//icons
const TwitterIcon = dynamic(() => import("./@icons/TwitterIcon"));
//atoms
//molecules
const PageHead = dynamic(() => import("./molecules/PageHead"));
const SplashScreen = dynamic(() => import("./molecules/SplashScreen"));
const Button = dynamic(() => import("./molecules/Button"));
const ServiceListItem = dynamic(() => import("./molecules/ServiceListItem"));
const ProductListItem = dynamic(() => import("./molecules/ProductListItem"));
const LetsWorkLink = dynamic(() => import("./molecules/LetsWorkLink"));
const BackgroundImage = dynamic(() => import("./molecules/BackgroundImage"));
//organisms
const Header = dynamic(() => import("./organisms/Header"));
const Footer = dynamic(() => import("./organisms/Footer"));
const Navigation = dynamic(() => import("./organisms/Navigation"));
const WelcomeSection = dynamic(() => import("./organisms/WelcomeSection"));
const ProjectItem = dynamic(() => import("./organisms/ProjectItem"));
const ContactForm = dynamic(() => import("./organisms/ContactForm"));
const CardCarousel = dynamic(() => import("./organisms/CardCarousel"));
//templates
const PageLayout = dynamic(() => import("./templates/PageLayout"));
const LandingView = dynamic(() => import("./templates/LandingView"));
const AboutView = dynamic(() => import("./templates/AboutView"));
const ContactView = dynamic(() => import("./templates/ContactView"));
const ServicesView = dynamic(() => import("./templates/ServicesView"));
const ProjectsView = dynamic(() => import("./templates/ProjectsView"));

export {
  PageHead,
  Header,
  Footer,
  Button,
  Navigation,
  PageLayout,
  SplashScreen,
  LandingView,
  AboutView,
  ContactView,
  ServicesView,
  ProjectsView,
  TwitterIcon,
  WelcomeSection,
  ProjectItem,
  ServiceListItem,
  ProductListItem,
  ContactForm,
  CardCarousel,
  LetsWorkLink,
  BackgroundImage
};

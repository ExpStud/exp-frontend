import dynamic from "next/dynamic";

//icons
const TwitterIcon = dynamic(() => import("./@icons/TwitterIcon"));
const RightArrowIcon = dynamic(() => import("./@icons/RightArrowIcon"));
const MenuIcon = dynamic(() => import("./@icons/MenuIcon"));
const CloseIcon = dynamic(() => import("./@icons/CloseIcon"));
const ExpIcon = dynamic(() => import("./@icons/ExpIcon"));
const TwoLinesIcon = dynamic(() => import("./@icons/TwoLinesIcon"));
const ArrowIcon = dynamic(() => import("./@icons/ArrowIcon"));
//atoms
const Button = dynamic(() => import("./atoms/Button"));
const AnimateWrapper = dynamic(() => import("./atoms/AnimateWrapper"));
const Logo = dynamic(() => import("./atoms/Logo"));
//molecules
const PageHead = dynamic(() => import("./molecules/PageHead"));
const ServiceListItem = dynamic(() => import("./molecules/ServiceListItem"));
const ProductListItem = dynamic(() => import("./molecules/ProductListItem"));
const LetsWorkLink = dynamic(() => import("./molecules/LetsWorkLink"));
const BackgroundImage = dynamic(() => import("./molecules/BackgroundImage"));
const Dropdown = dynamic(() => import("./molecules/Dropdown"));
const HeroVideo = dynamic(() => import("./molecules/HeroVideo"));
//organisms
const SplashScreen = dynamic(() => import("./organisms/SplashScreen"));
const Header = dynamic(() => import("./organisms/Header"));
const Footer = dynamic(() => import("./organisms/Footer"));
const WelcomeSection = dynamic(() => import("./organisms/WelcomeSection"));
const ProjectItem = dynamic(() => import("./organisms/ProjectItem"));
const ContactForm = dynamic(() => import("./organisms/ContactForm"));
const Testimonials = dynamic(() => import("./organisms/Testimonials"));
const ProductList = dynamic(() => import("./organisms/ProductList"));
const About = dynamic(() => import("./organisms/About"));
const NavigationMenu = dynamic(() => import("./organisms/NavigationMenu"));
const LandingScreen = dynamic(() => import("./organisms/LandingScreen"));
//templates
const PageLayout = dynamic(() => import("./templates/PageLayout"));
const LandingView = dynamic(() => import("./templates/LandingView"));
const AboutView = dynamic(() => import("./templates/AboutView"));
const ContactView = dynamic(() => import("./templates/ContactView"));
const ServicesView = dynamic(() => import("./templates/ServicesView"));
const ProjectsView = dynamic(() => import("./templates/ProjectsView"));

//old
const MobileNavigation = dynamic(() => import("./x-old/MobileNavigation"));
const Navigation = dynamic(() => import("./x-old/Navigation"));
const CardCarousel = dynamic(() => import("./x-old/CardCarousel"));
const CarouselSlider = dynamic(() => import("./x-old/CarouselSlider"));


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
  BackgroundImage,
  MenuIcon,
  CloseIcon,
  ExpIcon,
  Testimonials,
  ProductList,
  About,
  RightArrowIcon,
  AnimateWrapper,
  MobileNavigation,
  TwoLinesIcon,
  Dropdown,
  ArrowIcon,
  NavigationMenu,
  CarouselSlider,
  LandingScreen,
  Logo,
  HeroVideo
};

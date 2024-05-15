export type Carousel = {
  name: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  fillColor: string;
  title: string;
  src: string;
  srcMobile?: string;
  href: string; //if href "Visit Website" else "Comin Soon"

}

export type Link = {
  name: string;
  url: string;
};

export type Project = { 
  name: string;
  published: number | null;
  description: string;
  services: string[];
  links: Link[]
  image: string;
}

export type Client = {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
  testimonial?: string;
  twitter: string;
  exchangeArt?: string;
  tensor?: string;
  carousel?: Carousel[];
};
export type Carousel = {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  fillColor: string;
  title: string;
  src: string;
  href: string; //if href "Visit Website" else "Comin Soon"
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
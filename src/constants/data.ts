import { Client } from "./types";

export const clients: Client[] = [
  {
    id: 1,
    name: "SCUM",
    title: "Founder of My Slimes",
    company: "My Slimes",
    image: "/images/testimonials/1-scum.jpg",
    testimonial:
      "The team was always contactable, honest in their opinions, and patient to work through challenges as they arose. Very collaborative, listening to the client's needs, but also coming up with usability solutions that we didn't know about.",
    twitter: "https://twitter.com/SCUMSOL",
    exchangeArt: "https://exchange.art/scum/series",
    carousel : [
      {
        backgroundColor: "bg-scum-gradient",
        textColor: "!text-scum-text",
        borderColor: "border-scum-text",
        fillColor: "!fill-scum-text",
        arrowColor: "!fill-scum-text",
        title: "My Slimes",
        src: "/images/carousel/scum.png",
        href: "https://slimes.xyz/",
      },
      {
        backgroundColor: "bg-somos-gradient",
        textColor: "!text-somos-text",
        borderColor: "border-somos-text",
        fillColor: "fill-somos-text",
        arrowColor: "fill-somos-text",
        title: "Somos Axolotl",
        src: "/images/carousel/somos.png",
        href: "",
      },
    ]
  },
  {
    id: 2,
    name: "Robbie Shilstone",
    title: "Founder of Publique",
    company: "Publique",
    image: "/images/testimonials/robbie.jpg",
    testimonial:
      "EXP went above and beyond to make Publique a success. No idea ever felt to big to implement. They were perfectly suited to create this experience exactly how I envisioned it.",
    twitter: "https://twitter.com/shilstone_arts",
    exchangeArt: "https://exchange.art/shilstone-arts/series",
    carousel : [{
      backgroundColor: "bg-robbie-gradient",
      textColor: "!text-robbie-text",
      borderColor: "border-robbie-text",
      fillColor: "fill-robbie-text",
      arrowColor: "fill-robbie-text",
      title: "Publique World",
      src: "/images/carousel/robbie.png",
      href: "https://publique.world/",
    }]
  },
  {
    id: 3,
    name: "Calder Moore",
    title: "In Search Of",
    company: "In Search Of",
    image: "/images/testimonials/calder.gif",
    testimonial:
      "Commissioning EXP Studios was a great decision. They were super upfront about costs and worked with my budget to suit my needs. They provided works in progress along the way which I was always in absolutely in love with what they had done. Will definitely be returning to expand the website once it is ready to do so.",
    twitter: "https://twitter.com/CalderMoore_",
    exchangeArt: "https://exchange.art/caldermoore/series",
    carousel : [{
      backgroundColor: "bg-calder-gradient",
      textColor: "!text-calder-text",
      borderColor: "border-calder-text",
      fillColor: "fill-calder-text",
      arrowColor: "fill-calder-text",
      title: "In Search Of Substance",
      src: "/images/carousel/calder.png",
      href: "",
    }]
  },
  {
    id: 4,
    name: "Andy Rew",
    title: "Founder of CyberFrogs",
    company: "CyberFrogs",
    image: "/images/testimonials/39-andres.jpg",
    testimonial:
      'Working with EXP has felt like working with an extension of my core team. Their attentiveness, attention to detail and their understanding of complex systems and web3 intricacies has made our contracted work not only pain free, but enjoyable. The EXP team just "gets it" and they have helped amplify our products in ways I previously thought unobtainable with outside contractors. They approached our contract as if they were working on their own project.',
    twitter: "https://twitter.com/CyberFrogsNFT",
    tensor: "https://www.tensor.trade/trade/cyber_frogs",
    carousel : [{
      backgroundColor: "bg-andy-gradient",
      textColor: "!text-andy-text",
      borderColor: "border-andy-text",
      fillColor: "fill-andy-text",
      arrowColor: "fill-andy-text",
      title: "CyberFrogs",
      src: "/images/carousel/andy.png",
      href: "https://cyberfrogs.io/",
    }]
  },
  {
    id: 5,
    name: "Zen0",
    title: "Founder of Monster Friends",
    company: "Monster Friends",
    image: "/images/testimonials/zen0.gif",
    testimonial:
      "EXP did an awesome job at building a showcase for my art releases, as well as a rarity explorer for my Glyphscapes collection. They were efficient and designed everything accurately to my spec, as well as being flexible when changes needed to be made. I look forward to working together again in the future! :)",
    twitter: "https://twitter.com/zen0m",
    exchangeArt: "https://exchange.art/zen0/series",
    carousel : [{
      backgroundColor: "bg-zen0-gradient",
      textColor: "!text-zen0-text",
      borderColor: "border-zen0-text",
      fillColor: "fill-zen0-text",
      arrowColor: "fill-zen0-text",
      title: "Collections & Rarity",
      src: "/images/carousel/zen0.png",
      href: "https://zen0.art/rarity/",
    }]
  },
  {
    id: 6,
    name: "Sikedelic",
    title: "Founder of Monster Hot Heads",
    company: "Hot Headss",
    image: "",
    twitter: "https://twitter.com/HotHeadsNFT",
    exchangeArt: "https://exchange.art/hot-heads/nfts",
    carousel : [{
      backgroundColor: "bg-sike-gradient",
      textColor: "!text-sike-text",
      borderColor: "border-sike-text",
      fillColor: "fill-sike-text",
      arrowColor: "fill-sike-text",
      title: "Hot Heads",
      src: "/images/carousel/sike.png",
      href: "https://hotheads.art/",
    }]
  },
];
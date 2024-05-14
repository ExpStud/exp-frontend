import { Client, Project } from "./types";


/*
  {
    name: "",
    published: null,
    description: "",
    services: ["",""],
    links: [
      {
        name: "",
        url: "",
      },{
        name: "",
        url: "",
      }
    ],
    image: "/images/projects/.jpg",
  },
*/

export const projects: Project[] = [
  {
    name: "Slimes",
    published: 2023,
    description: "A modern blend of animations, art, and functionality. The My Slimes website boasts a set of complex parallaxing & scrolling elements that help bring the site to life through the screen. Paired with a robust data-base system that stores assets for fans, holders, and explorers to save for themselves.",
    services: ["Asset Library", "Cloud Storage", "Complex Animations", "Hot-Links Page (Mobile)", "E-Commerce Store", "Blockchain Integration"],
    links: [
      {
        name: "Website",
        url: "https://slimes.xyz/",
      },{
        name: "Twitter",
        url: "https://twitter.com/SCUMSOL",
      }
    ],
    image: "/images/projects/slimes.jpg",
  }, {
    name: "Zen0",
    published: 2023,
    description: "Glyphscapes is a series of algorithmically generated maps created from a shared set of primitive 1-bit tiles. On this build, we built tools for his fans & holders to explore these maps, and learn more about Zen0's additional body of work on Solana.",
    services: ["Development","Responsiveness"],
    links: [
      {
        name: "Website",
        url: "https://zen0.art/rarity",
      },{
        name: "Twitter",
        url: "https://twitter.com/zen0m",
      }
    ],
    image: "/images/projects/zen0.jpg",
  }, 
  {
    name: "CyberFrogs",
    published: null, //if null "Coming Soon"
    description: "Our first 10k community. CyberFrogs puts our experience in Web 3 on display. Equipped with a rarity tool to display NFT's, several blockchain solutions, and a commercial system for selling NFT's. A deeper look under the hood of what's possible with EXP.",
    services: ["Interface Design", "Development", "Advisory"],
    links: [
      {
        name: "Website",
        url: "https://cyberfrogs.io/",
      },{
        name: "Twitter",
        url: "https://twitter.com/CyberFrogsNFT",
      }
    ],
    image: "/images/projects/cyberfrogs.jpg",
  },
  {
    name: "Calder Moore",
    published: null,
    description: "ISO - In Search Of; a look into the next generation of EXP websites. High fidelity design paired with a seamless desktop & mobile experience. Aimed to deliver an assortment of art, audio, and comics in one place.",
    services: ["Interface Design", "Development", "Blockchain Integration", "Cloud Storage", "Asset Library", "Media Player"],
    links: [
      {
        name: "Website",
        url: "",
      },{
        name: "Twitter",
        url: "https://twitter.com/CalderMoore_",
      }
    ],
    image: "/images/projects/caldermoore.jpg",
  },
  {
    name: "Somos Axolotl",
    published: 2024,
    description: "In partnership with Solana, Sphere & Somos Axolotl, we've broken ground on one our favorite projects. An initiative to preserve the near extinct Axolotl Population, while drumming awareness for the increasingly poor conditions of the water in Lake Xochimilco, Mexico City.",
    services: ["Interface Design", "Development", "Blockchain Integration", "Cloud Storage", "Media Player"],
    links: [
      {
        name: "Website",
        url: "https://somosaxolotl.com/",
      },{
        name: "Instagram",
        url: "https://www.instagram.com/somos_axolotl/",
      }
    ],
    image: "/images/projects/.jpg",
  },
  {
    name: "Hot Heads",
    published: 2023,
    description: "One of EXP's first clients, and vetted communities on Solana. The Hot Heads website features blockchain technology, asset libraries, and more. A nod to 90's retro gaming, with custom pixelated components built in all over the site.",
    services: ["Interface Design", "Development", "Blockchain Integration", "Cloud Storage", "Media Player"],
    links: [
      {
        name: "Website",
        url: "https://hotheads.art/",
      },{
        name: "Twitter",
        url: "https://twitter.com/HotHeadsNFT",
      }
    ],
    image: "/images/projects/.jpg",
  },
]


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
        name: "Scum",
        backgroundColor: "!bg-slimes-gradient",
        textColor: "!text-slimes-text",
        borderColor: "!border-slimes-text",
        fillColor: "!fill-slimes-text",
        title: "My Slimes",
        src: "/images/carousel/slimes.png",
        href: "https://slimes.xyz/",
      },
      {
        name: "Scum",
        backgroundColor: "!bg-somos-gradient",
        textColor: "!text-somos-text",
        borderColor: "!border-somos-text",
        fillColor: "!fill-somos-text",
        title: "Somos Axolotl",
        src: "/images/carousel/somos.png",
        href: "https://somosaxolotl.com",
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
      name: "Robbie Shilstone",
      backgroundColor: "!bg-robbie-gradient",
      textColor: "!text-robbie-text",
      borderColor: "!border-robbie-text",
      fillColor: "!fill-robbie-text",
      title: "Publique World",
      src: "/images/carousel/publique.png",
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
      name: "Calder Moore",
      backgroundColor: "!bg-calder-gradient",
      textColor: "!text-calder-text",
      borderColor: "!border-calder-text",
      fillColor: "!fill-calder-text",
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
      name: "Andy Rew",
      backgroundColor: "!bg-andy-gradient",
      textColor: "!text-andy-text",
      borderColor: "!border-andy-text",
      fillColor: "!fill-andy-text",
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
      name: "Zen0",
      backgroundColor: "!bg-zen0-gradient",
      textColor: "!text-zen0-text",
      borderColor: "!border-zen0-text",
      fillColor: "!fill-zen0-text",
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
      name: "Sikedelic",
      backgroundColor: "!bg-sike-gradient",
      textColor: "!text-sike-text",
      borderColor: "!border-sike-text",
      fillColor: "!fill-sike-text",
      title: "Hot Heads",
      src: "/images/carousel/sike.png",
      href: "https://hotheads.art/",
    }]
  },
];
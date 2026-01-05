import Logo from "./assets/images/tattoo-blue-logo-quadrado_no_bg.png";
import HeaderBg from "./assets/images/nav-top-bg.png";
import homeImage from "./assets/images/tattoo-4.webp";
import workImage from "./assets/images/tattoo-1.webp";
import InstagramIcon from "./assets/icons/Instagram.svg";
import LinkedinIcon from "./assets/icons/Linkedin.svg";
import TwitterIcon from "./assets/icons/Twitter.svg";
import Fauna from "./assets/images/tattoo-8.webp";
import Flora from "./assets/images/tattoo-5.webp";
import Abstract from "./assets/images/tattoo-12.webp";
import Geometric from "./assets/images/tattoo-3.webp";

export const navigationItem = [
  {
    id: 1,
    name: "Work",
    link: "/work",
  },
  {
    id: 2,
    name: "Price",
    link: "/price",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

export const logoData = [
  {
    id: 1,
    image: Logo,
    alt: "Tattoo Artist Logo",
    link: "/",
  },
];

export const headerBgData = [
  {
    id: 1,
    image: HeaderBg,
    alt: "Header Background Image",
  },
];

export const homeImageData = [
  {
    id: 1,
    image: homeImage,
    alt: "Home Background Image",
  },
];

export const textData = [
  {
    id: 1,
    heading: "Ink Rooted in Nature",
    subHeading: "Fine, floral-inspired creations for every kind of story.",
  },
];

export const homeWorkItems = [
  {
    id: 1,
    alt: "Work Image 1",
    image: workImage,
    text: "Work",
  },
];

export const footerTextData = [
  {
    id: 1,
    heading: "Let´s work together",
  },
];

export const socialMediaData = [
  {
    id: 1,
    image: InstagramIcon,
    alt: "Instagram Icon",
    link: "https://www.instagram.com/fran.e.a.canon.do.pai/",
    title: "Instagram",
  },
  {
    id: 2,
    image: LinkedinIcon,
    alt: "LinkedIn Icon",
    link: "https://www.linkedin.com/in/francinemelopepe/",
    title: "LinkedIn",
  },
  {
    id: 3,
    image: TwitterIcon,
    alt: "Twitter Icon",
    link: "https://www.twitter.com/",
    title: "Twitter",
  },
];

export const workTextData = [
  {
    id: 1,
    text: "Every design grows from a blend of natural forms and your own story, creating work that feels organic, intimate, and uniquely yours.",
  },
];

export const workCardsData = [
  {
    id: 1,
    image: Fauna,
    alt: "Fauna tattoo type",
    title: "Fauna",
    imageCarousel: [
      { parentId: 1, src: Fauna, alt: "Fauna tattoo type 1" },
      { parentId: 1, src: Flora, alt: "Flora tattoo type 2" },
      { parentId: 1, src: Abstract, alt: "Abstract tattoo type 3" },
      { parentId: 1, src: Geometric, alt: "Geometric tattoo type 4" },
    ],
  },
  {
    id: 2,
    image: Flora,
    alt: "Flora tattoo type",
    title: "Flora",
    imageCarousel: [
      { parentId: 2, src: Fauna, alt: "Fauna tattoo type 1" },
      { parentId: 2, src: Flora, alt: "Flora tattoo type 2" },
      { parentId: 2, src: Abstract, alt: "Abstract tattoo type 3" },
      { parentId: 2, src: Geometric, alt: "Geometric tattoo type 4" },
    ],
  },
  {
    id: 3,
    image: Abstract,
    alt: "Abstract tattoo type",
    title: "Abstract",
    imageCarousel: [
      { parentId: 3, src: Fauna, alt: "Fauna tattoo type 1" },
      { parentId: 3, src: Flora, alt: "Flora tattoo type 2" },
      { parentId: 3, src: Abstract, alt: "Abstract tattoo type 3" },
      { parentId: 3, src: Geometric, alt: "Geometric tattoo type 4" },
    ],
  },
  {
    id: 4,
    image: Geometric,
    alt: "Geometric tattoo type",
    title: "Geometric",
    imageCarousel: [
      { parentId: 4, src: Fauna, alt: "Fauna tattoo type 1" },
      { parentId: 4, src: Flora, alt: "Flora tattoo type 2" },
      { parentId: 4, src: Abstract, alt: "Abstract tattoo type 3" },
      { parentId: 4, src: Geometric, alt: "Geometric tattoo type 4" },
    ],
  },
];

export const appointmentData = [
  {
    id: "referenceDesign",
    label: "Reference design:",
    name: "reference_image",
    htmlFor: "referenceDesign",
    type: "file",
    accept: "image/*",
    placeholder: "",
  },
  {
    id: "tattooPlace",
    label: "Tattoo place:",
    name: "tattoo_place",
    htmlFor: "tattooPlace",
    type: "text",
    accept: "",
    placeholder: "e.g. Forearm",
  },
  {
    id: "tattooSize",
    label: "Tattoo size:",
    name: "tattoo_size",
    htmlFor: "tattooSize",
    type: "text",
    accept: "",
    placeholder: "e.g. 10cm x 5cm",
  },
];

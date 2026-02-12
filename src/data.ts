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
import FooterBgImage from "./assets/images/footer-bg.png";
import aboutImage from "./assets/images/about-bg.png";

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
    id: "home",
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
    id: "footer",
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
    id: "work",
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

export const appointmentTextData = {
  id: "appointment",
  text: "Your skin is a canvas — and every piece deserves intention. \n\nSelect a date that feels right, choose a time, and tell us about your vision. \nWhether you have a clear design in mind or just an idea, we’ll shape it together. Upload any reference images, describe the placement and size, and we’ll take care of the rest. After submitting, you’ll receive a confirmation email. \n\nWe can’t wait to bring your story to life.",
};

export const aboutData = {
  id: "about",
  image: aboutImage,
  alt: "About Image",
  text: "Every tattoo tells a story, and every story deserves to grow naturally. With ink as our medium and nature as our muse, we craft designs that are delicate as petals, strong as roots, and as unique as the person wearing them.\nFrom floral whispers to fauna-inspired flourishes, each piece is a collaboration—an expression of your journey, your passions, and your dreams. Here, tattoos aren’t just art; they’re living stories, rooted in care, creativity, and a love for the beauty that surrounds us.\n\nI am a tattoo artist who sees the body as a living garden — a place where stories take root and beauty grows in quiet, intentional ways. I work with gentle lines, botanical forms, and nature-inspired details, creating pieces that feel soft, intimate, and deeply personal.\n\nGuided by a love for flora, fauna, and the poetic rhythms of nature, I shape each design with patience and care. My work blends fine-line delicacy with organic movement, giving every tattoo the feeling of something tender and alive — like a petal caught in a slow breeze.\nFor me, tattooing is more than ink on skin: it’s a collaboration, a conversation, a shared moment where your ideas bloom into something uniquely yours. My studio is a calm, welcoming space where clients feel safe, seen, and gently encouraged to express the stories they carry.",
};

export const footerBgData = [
  {
    id: 1,
    image: FooterBgImage,
    alt: "Footer Background Image",
  },
];

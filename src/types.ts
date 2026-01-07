export type NavItem = {
  id?: number;
  name: string;
  link: string;
  ariaLabel?: string;
};

export type NavigationItemProps = {
  data: NavItem[];
};

export interface ImageItem {
  image: string;
  title?: string;
  id?: number;
  alt: string;
  link?: string;
  imageCarousel?: CarouselImage[];
}

export type ImageProps = {
  data: ImageItem[];
};

export interface CarouselImage {
  parentId?: number;
  src: string;
  alt: string;
  title?: string;
}

export interface CarouselProps {
  images: CarouselImage[];
  title?: string;
  activeIndex?: number;
  onImageChange?: (index: number) => void;
}

export interface CarouselState {
  activeCardId?: number;
  activeImageIndex: number;
}

export type IconProps = {
  name: string;
};

export type TextItem = {
  id: number;
  heading?: string;
  subHeading?: string;
  text?: string;
};

export type TextProps = {
  data: TextItem[];
  text?: TextItem[];
};

export interface AppointmentData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  tattooPlace: string;
  tattooSize: string;
  imageUrl?: string;
}

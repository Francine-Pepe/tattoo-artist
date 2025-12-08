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
}

export type ImageProps = {
  data: ImageItem[];
};

export type IconProps = {
  name: string;
}

export type TextItem = {
  id: number;
  heading?: string;
  subHeading?: string;
  text?: string;
}

export type TextProps = {
  data: TextItem[];
  text?: TextItem[];
}

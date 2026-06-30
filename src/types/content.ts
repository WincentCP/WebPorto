export interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Project {
  title: string;
  description: string;
  year: number;
  stack: string;
  role: string;
  link: {
    href: string;
    label: string;
  };
  image: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  titleJa: string;
  description: string;
  image: string;
}

export interface ApproachItem {
  title: string;
  description: string;
}

export interface ProfileItem {
  label: string;
  content: string;
}

export interface MenuItem {
  number: string;
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
}

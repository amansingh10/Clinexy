export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: any;
}

export interface MegaMenuSection {
  title: string;
  items: NavItem[];
}

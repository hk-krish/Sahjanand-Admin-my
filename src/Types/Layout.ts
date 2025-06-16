export interface MenuItem {
  title: string;
  lanClass?: string;
  Items?: MenuItem[];
  id?: number;
  icon?: string;
  type?: string;
  active?: boolean;
  menu?: MenuItem[];
  url?: string;
  badge?: boolean;
  badgeName?: string;
  badgeColor?: string;
}

export interface MenuListProps {
  menu: MenuItem[] | undefined;
  setActiveMenu: (temp: MenuItem[]) => void;
  activeMenu: MenuItem[];
  level: number;
}

export interface BookmarkedItems {
  icon: string;
  title: string;
  url: string;
  id: number;
  bookmarked?: boolean;
}

export interface LayoutStateProps {
  flip: boolean;
  pinedMenu: string[];
  responsiveSearch: boolean;
  linkItemsArray: BookmarkedItems[] | [];
}

export interface SearchItems {
  icon: string | undefined;
  title: string;
  url: string;
  id?: number;
  bookmarked?: boolean;
}

export interface SearchListProps {
  searchedArray: SearchItems[];
  setSearchedWord: (key: string) => void;
  onItemClick? : (url: string) => void
}

export interface CallbackNav {
  (select: string, open: boolean): void;
}

export interface CustomizerProps {
  callbackNav: CallbackNav;
  selected: string;
}

export interface ConfigurProps {
  modal: boolean;
  toggle: () => void;
}

export interface Colors {
  colorBackground1: string;
  colorBackground2: string;
}

export interface Languages {
  value: string;
  icon: string;
  name: string;
}

//Header
export interface Notifications {
  id: number;
  avatar: string;
  text: string;
  time: string;
}

export interface MessageList {
  image: string;
  title: string;
  text: string;
}

export interface CartList {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

//ThemeCustomizer
export interface LayoutItems {
  type: string;
  label: string;
}

export interface ThemeColors {
  id: number;
  name: string;
  primary: string;
  secondary: string;
}

export interface CustomizeLinks {
  id: number;
  link: string;
  image: string;
  title: string;
}

export interface MixLayoutItems {
  value: string;
  headerClass: string;
  sidebarClass: string;
  bodyClass: string;
}

export interface ThemeSidebar {
  type: string;
  dataAttr: string;
}

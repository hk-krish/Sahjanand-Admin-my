import { ReactNode } from "react";
import { MenuItem } from "./Layout";

export interface ImageProps {
  className?: string;
  src: string;
  alt?: string;
  style?: object;
  height?: number;
  id?: string;
  title?: string;
  width?: number;
}

export interface SvgProps {
  iconId: string | undefined;
  className?: string;
  style?: {
    height?: number;
    width?: number;
    fill?: string;
    marginRight?: number;
  };
  onClick?: () => void;
}

export interface BreadcrumbsProps {
  mainTitle: string;
  parent: string;
}

export interface SubHeaderProps {
  menu: MenuItem[] | undefined;
  level: number;
}

export interface DashboardHeaderProps {
  title: string;
  tagClass?: string;
  dropDownFalse?: boolean;
  children?: ReactNode;
  dropdownTitle?: string;
  dropdownClass?: string;
  days?: boolean;
  dropdownToggleClass?: string;
  headerClass?: string;
  dropdownIcon?: boolean;
}

export interface DashboardDropdownProps {
  days?: boolean;
  dropdownTitle?: string;
  dropdownClass?: string;
  dropdownToggleClass?: string;
  dropdownIcon?: boolean;
}

export interface RendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

export interface CardSubtitle {
  text?: string;
  code?: string;
  mark?: string;
}

export interface CardHeaderProp {
  title: string;
  span?: CardSubtitle[];
  headClass?: string;
  icon?: React.JSX.Element;
  tagClass?: string;
  tag?: boolean;
}

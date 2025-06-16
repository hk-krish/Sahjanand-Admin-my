import { CustomizeLinks, LayoutItems, MixLayoutItems, ThemeColors, ThemeSidebar } from "../../types/Layout";

export const customizerLinks: CustomizeLinks[] = [
  { id: 2, link: "https://support.pixelstrap.com", image: "customizer/5.png", title: "Support" },
  { id: 3, link: "https://docs.pixelstrap.net/react/zono/document/", image: "customizer/2.png", title: "Document" },
  { id: 4, link: "https://landing.pixelstrap.net/react/zono/template/index.html", image: "customizer/4.png", title: "Check Features" },
  { id: 5, link: "https://themeforest.net/user/pixelstrap/portfolio", image: "customizer/3.png", title: "Buy Now" },
];

export const layoutTypes: LayoutItems[] = [
  { type: "ltr", label: "LTR" },
  { type: "rtl", label: "RTL" },
  { type: "box-layout", label: "Box" },
];

export const sideBarIconTypes: LayoutItems[] = [
  { type: "stroke", label: "Stroke" },
  { type: "fill", label: "Fill" },
];

export const lightColors: ThemeColors[] = [
  { id: 1, name: "color-1", primary: "#2B5F60", secondary: "#C06240" },
  { id: 2, name: "color-2", primary: "#1D5B79", secondary: "#468B97" },
  { id: 3, name: "color-3", primary: "#372363", secondary: "#FE6A49" },
  { id: 4, name: "color-4", primary: "#4b2a4b", secondary: "#FE7088" },
  { id: 5, name: "color-5", primary: "#4b232d", secondary: "#8e6343" },
  { id: 6, name: "color-6", primary: "#43B9B2", secondary: "#534686" },
];

export const darkColors: ThemeColors[] = [
  { id: 1, name: "color-1", primary: "#2B5F60", secondary: "#C06240" },
  { id: 2, name: "color-2", primary: "#1D5B79", secondary: "#468B97" },
  { id: 3, name: "color-3", primary: "#372363", secondary: "#FE6A49" },
  { id: 4, name: "color-4", primary: "#4b2a4b", secondary: "#FE7088" },
  { id: 5, name: "color-5", primary: "#4b232d", secondary: "#8e6343" },
  { id: 6, name: "color-6", primary: "#007a91", secondary: "#534686" },
];

export const mixLayouts: MixLayoutItems[] = [
  { value: "dark-sidebar", headerClass: "bg-light", sidebarClass: "bg-dark", bodyClass: "bg-light" },
  { value: "dark-only", headerClass: "bg-dark", sidebarClass: "bg-dark", bodyClass: "bg-dark" },
  { value: "light", headerClass: "bg-light", sidebarClass: "bg-light", bodyClass: "bg-light" },

];

export const sidebarType: ThemeSidebar[] = [
  { type: "horizontal-wrapper", dataAttr: "normal-sidebar" },
  { type: "compact-wrapper", dataAttr: "compact-sidebar" },
];

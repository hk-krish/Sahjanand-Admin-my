import { createSlice } from "@reduxjs/toolkit";
import ConfigDB from "../../../config/Theme";

const initialState = {
  layoutType: "ltr",
  sidebarTypes: "compact-wrapper",
  mixBackgroundLayout: "light",
  sideBarIconType: "stroke",
  colors: {
    primaryColor: "",
    secondaryColor: "",
  },
  sideBarToggle: false,
  margin: 0,
};

const ThemeCustomizerSlice = createSlice({
  name: "ThemeCustomizer",
  initialState,
  reducers: {
    setLayoutType: (state, action) => {
      state.layoutType = action.payload;
      ConfigDB.settings.layoutType = action.payload;
      if (action.payload === "rtl") {
        document.body.classList.add("rtl");
        document.body.classList.remove("box-layout", "ltr");
        document.documentElement.dir = "rtl";
      } else if (action.payload === "ltr") {
        document.body.classList.add("ltr");
        document.body.classList.remove("box-layout", "rtl");
        document.documentElement.dir = "ltr";
      } else if (action.payload === "box-layout") {
        document.body.classList.add("box-layout");
        document.body.classList.remove("ltr", "rtl", "offcanvas");
        document.documentElement.dir = "ltr";
      }
    },
    addSidebarTypes: (state, action) => {
      ConfigDB.settings.sidebar.type = action.payload;
      state.sidebarTypes = action.payload;
    },
    setSideBarToggle: (state, action) => {
      state.sideBarToggle = action.payload;
    },
    toggleSidebar: (state) => {
      state.sideBarToggle = !state.sideBarToggle;
    },
    scrollToLeft: (state) => {
      state.margin += 500;
    },
    scrollToRight: (state) => {
      state.margin -= 500;
    },
    addSidebarIconType: (state, action) => {
      ConfigDB.settings.sidebar.iconType = action.payload;
      state.sideBarIconType = action.payload;
    },
    addSideBarBackGround: (state, action) => {
      ConfigDB.color.mixBackgroundLayout = action.payload;
      state.mixBackgroundLayout = action.payload;
      if (action.payload === "light") {
        document.body.classList.add("light");
        document.body.classList.remove("dark-sidebar", "dark-only");
      } else if (action.payload === "dark-only") {
        document.body.classList.add("dark-only");
        document.body.classList.remove("dark-sidebar", "light");
      } else if (action.payload === "dark-sidebar") {
        document.body.classList.add("dark-sidebar");
        document.body.classList.remove("light", "dark-only");
      }
    },
    addColor: (state, action) => {
      ConfigDB.color.primaryColor = action.payload.colorBackground1;
      ConfigDB.color.secondaryColor = action.payload.colorBackground2;
      state.colors.primaryColor = action.payload.colorBackground1;
      state.colors.secondaryColor = action.payload.colorBackground2;
    },
  },
});

export const { setLayoutType, addSidebarTypes, setSideBarToggle, toggleSidebar, scrollToLeft, scrollToRight, addSidebarIconType, addSideBarBackGround, addColor } = ThemeCustomizerSlice.actions;

export default ThemeCustomizerSlice.reducer;

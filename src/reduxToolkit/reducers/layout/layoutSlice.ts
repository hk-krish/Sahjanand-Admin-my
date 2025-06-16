import { createSlice } from "@reduxjs/toolkit";
import { LayoutStateProps } from "../../../Types/Layout";

const initialState: LayoutStateProps = {
  pinedMenu: [],
  responsiveSearch: false,
  linkItemsArray: [],
  flip: false,
};

const LayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setPinedMenu: (state, action) => {
      state.pinedMenu = action.payload;
    },
    setResponsiveSearch: (state) => {
      state.responsiveSearch = !state.responsiveSearch;
    },
    getLinkItemsArray: (state, action) => {
      state.linkItemsArray = action.payload;
    },
    setFlip: (state) => {
      state.flip = !state.flip;
    }

  },
});

export const { setPinedMenu, setResponsiveSearch, getLinkItemsArray, setFlip } = LayoutSlice.actions;
export default LayoutSlice.reducer;

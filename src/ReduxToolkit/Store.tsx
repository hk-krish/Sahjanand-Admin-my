import { configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "./Slice/Layout/LayoutSlice";
import ThemeCustomizerSlice from "./Slice/Layout/ThemeCustomizerSlice";

export const store = configureStore({
  reducer: {
    layout: LayoutSlice,
    themeCustomizer: ThemeCustomizerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

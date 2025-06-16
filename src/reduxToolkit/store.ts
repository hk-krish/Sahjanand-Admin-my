import { configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "./reducers/layout/layoutSlice";
import ThemeCustomizerSlice from "./reducers/layout/themeCustomizerSlice";

export const store = configureStore({
  reducer: {
    layout: LayoutSlice,
    themeCustomizer: ThemeCustomizerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

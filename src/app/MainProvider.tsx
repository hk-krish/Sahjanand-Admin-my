"use client";
import { store } from "@/ReduxToolkit/Store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default MainProvider;

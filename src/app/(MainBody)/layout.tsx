"use client";
import Footer from "@/Layout/Footer";
import Header from "@/Layout/header";
import Sidebar from "@/Layout/sidebar";
import TapTop from "@/Layout/TapTop";
import { useAppDispatch, useAppSelector } from "@/reduxToolkit/hooks";
import { addSidebarTypes, setSideBarToggle } from "@/reduxToolkit/reducers/layout/themeCustomizerSlice";
import { ReactNode, useEffect } from "react";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }: { children: ReactNode }) {
  const { sidebarTypes, sideBarToggle } = useAppSelector((state) => state.themeCustomizer);
  const dispatch = useAppDispatch();

  // function for sidebar type change from vertical to horizontal
  const updateSidebarBasedOnWidth = () => {
    const windowWidth = window.innerWidth;
    if (sidebarTypes === "compact-wrapper") {
      if (windowWidth <= 1200) dispatch(setSideBarToggle(true));
      else dispatch(setSideBarToggle(false));
    } else if (sidebarTypes === "horizontal-wrapper") {
      if (windowWidth <= 992) {
        dispatch(setSideBarToggle(true));
        dispatch(addSidebarTypes("compact-wrapper"));
      } else {
        dispatch(setSideBarToggle(false));
        dispatch(addSidebarTypes("horizontal-wrapper"));
      }
    }
  };
  useEffect(() => {
    updateSidebarBasedOnWidth();
    window.addEventListener("resize", () => updateSidebarBasedOnWidth());
  }, [sidebarTypes]);

  return (
    <>
      <div className={`page-wrapper ${sideBarToggle ? "compact-wrapper" : sidebarTypes}`}>
        <Header />
        <div className="page-body-wrapper">
          <Sidebar />
          <div className="page-body">{children}</div>
          <Footer />
        </div>
      </div>
      {/* <ThemeCustomizer /> */}
      <TapTop />
      <ToastContainer />
    </>
  );
}

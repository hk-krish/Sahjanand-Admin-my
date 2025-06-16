import { Href } from "@/Constant";
import React, { useState } from "react";
import { NavLink } from "reactstrap";
// import { Maximize } from 'react-feather';

const FullScreen = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const fullScreenHandler = (isFullScreen: boolean) => {
    setFullScreen(isFullScreen);
    if (isFullScreen) document.documentElement.requestFullscreen();
    else document?.exitFullscreen();
  };

  return (
    <li onClick={() => fullScreenHandler(!fullScreen)}>
      <NavLink href={Href}>{/* <Maximize className="svg-color" /> */}</NavLink>
    </li>
  );
};

export default FullScreen;

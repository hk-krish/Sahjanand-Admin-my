import { useAppDispatch } from "../../../reduxToolkit/hooks";
import { toggleSidebar } from "../../../reduxToolkit/reducers/layout/themeCustomizerSlice";
import SvgIcon from "../../../coreComponents/SvgIcon";
import Link from "next/link";
import { RouteList } from "@/Constant";

const LogoWrapper = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="logo-wrapper">
        <Link href={RouteList.Dashboard}>
          {/* <Image className="img-fluid for-light" src={dynamicImage(`logo/logo.png`)} alt="" /> */}
          {/* <Image className="img-fluid for-dark" src={dynamicImage(`logo/logo_dark.png`)} alt="" /> */}
        </Link>
        <div className="toggle-sidebar" onClick={() => dispatch(toggleSidebar())}>
          <SvgIcon className="sidebar-toggle" iconId="toggle-icon" />
        </div>
      </div>
      <div className="logo-icon-wrapper">
        <Link href={RouteList.Dashboard}>
          {/* <Image className="img-fluid" src={dynamicImage(`logo/logo-icon.png`)} alt="" /> */}
        </Link>
      </div>
    </>
  );
};

export default LogoWrapper;

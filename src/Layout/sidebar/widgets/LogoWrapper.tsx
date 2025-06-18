import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { toggleSidebar } from "../../../ReduxToolkit/Slice/Layout/ThemeCustomizerSlice";
import SvgIcon from "../../../CoreComponents/SvgIcon";
import Link from "next/link";
import { ImagePath, RouteList } from "@/Constant";
import Image from "next/image";

const LogoWrapper = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="logo-wrapper">
        <Link href={RouteList.Dashboard}>
          <Image width={140} height={50} priority className="img-fluid for-light" src={`${ImagePath}logo/logo.png`} alt="" />
        </Link>
        <div className="toggle-sidebar" onClick={() => dispatch(toggleSidebar())}>
          <SvgIcon className="sidebar-toggle" iconId="toggle-icon" />
        </div>
      </div>
      <div className="logo-icon-wrapper">
        <Link href={RouteList.Dashboard}>
          <Image width={32} height={32} className="img-fluid" src={`${ImagePath}logo/logo-icon.png`} alt="" />
        </Link>
      </div>
    </>
  );
};

export default LogoWrapper;

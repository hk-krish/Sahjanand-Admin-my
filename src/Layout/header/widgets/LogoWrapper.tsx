import { ImagePath, RouteList } from "@/Constant";
import Link from "next/link";
import { Col } from "reactstrap";
import SvgIcon from "../../../CoreComponents/SvgIcon";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { toggleSidebar } from "../../../ReduxToolkit/Slice/Layout/ThemeCustomizerSlice";

const LogoWrapper = () => {
  const dispatch = useAppDispatch();

  return (
    <Col className="header-logo-wrapper col-auto p-0">
      <div className="logo-wrapper">
        <Link href={RouteList.Dashboard}>
          <img className="img-fluid for-light" src={`${ImagePath}logo/logo.png`} alt="" />
        </Link>
      </div>
      <div className="toggle-sidebar" onClick={() => dispatch(toggleSidebar())}>
        <SvgIcon className="sidebar-toggle" iconId="stroke-animation" />
      </div>
    </Col>
  );
};
export default LogoWrapper;

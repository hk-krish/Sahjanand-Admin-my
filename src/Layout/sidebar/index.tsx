import { RouteList } from "@/Constant";
import SimpleBar from "simplebar-react";
import ConfigDB from "../../config/Theme";
import { useAppSelector } from "../../reduxToolkit/hooks";
import LogoWrapper from "./widgets/LogoWrapper";
import MenuList from "./widgets/menuList";
import Link from "next/link";

const Sidebar = () => {
  const { pinedMenu } = useAppSelector((state) => state.layout);
  const { margin, sideBarToggle } = useAppSelector((state) => state.themeCustomizer);
  const sidebarIconType = useAppSelector((state) => state.themeCustomizer.sideBarIconType);
  const sideBarIcon = sidebarIconType || ConfigDB.settings.sidebar.iconType;
  return (
    <div className={`sidebar-wrapper ${sideBarToggle ? "close_icon" : ""}`} data-layout={`${sideBarIcon}-svg`}>
      <div>
        <LogoWrapper />
        <nav className="sidebar-main">

          <div id="sidebar-menu" style={{ position: "inherit", marginLeft: margin + "px" }}>
            <ul className="sidebar-links custom-scrollbar" id="simple-bar">
              <SimpleBar style={{ width: "68px", height: "350px" }}>
                <li className="back-btn">
                  <Link href={RouteList.Dashboard}>
                    {/* <Image className="img-fluid" src={dynamicImage(`logo/logo-icon.png`)} alt="" /> */}
                  </Link>
                  <div className="mobile-back text-end">
                    <span>Back</span>
                    <i className="fa fa-angle-right ps-2" />
                  </div>
                </li>
                <li className={`pin-title sidebar-main-title ${pinedMenu.length > 0 ? "show" : ""}`}>
                  <div>
                    <h6>Pinned</h6>
                  </div>
                </li>
                <MenuList />
              </SimpleBar>
            </ul>
          </div>

        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

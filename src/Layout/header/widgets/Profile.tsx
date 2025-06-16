// import { LogIn } from "react-feather";
import { Href } from "@/Constant";
import Link from "next/link";
import SvgIcon from "../../../coreComponents/SvgIcon";

const Profile = () => {
  return (
    <li className="profile-nav onhover-dropdown p-0 m-0">
      <div className="d-flex profile-media align-items-center">
        {/* <Image className="b-r-6 img-40" src={dynamicImage(`dashboard/profile.png`)} alt="profile" /> */}
        <div className="flex-grow-1">
          <span>Helen Walter</span>
          <p className="mb-0">
            Admin
            <SvgIcon iconId="header-arrow-down" />
          </p>
        </div>
      </div>
      <ul className="profile-dropdown onhover-show-div">
        <li>
          <Link href={Href}>
            {/* <LogIn /> */}
            <span>LogOut</span>
          </Link>
        </li>
      </ul>
    </li>
  );
};
export default Profile;

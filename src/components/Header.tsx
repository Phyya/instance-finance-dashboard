import { useState } from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import logo from "../assets/images/logo.svg";
import settings from "../assets/images/settings.png";
import notifications from "../assets/images/Notification.svg";
import downwards from "../assets/images/downwards.svg";
import avatar from "../assets/images/avatar.svg";
import HorizontalFlexWithIcon from "./UI/HorizontalFlexWithIcon";
import Typography from "./UI/Typography";
import Icon from "./UI/Icon";
import OptionsModal from "./OptionsModal";
import NavMenu from "./NavMenu";

interface NavMenuProps {
  setSidebar?: (val: boolean) => void;
}
const Header: FC<NavMenuProps> = ({ setSidebar }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  return (
    <header className="fixed top-0 z-50  flex items-center justify-between bg-white w-full px-6 pr-10 py-3">
      <div className="headerLeft  w-70% items-center justify-between gap-3">
        <Link to="/" className="headerLogo text-lg font-bold ml-15">
          <img src={logo} alt="fuspay-logo" />
        </Link>
      </div>
      <div className="headerSearch flex items-center w-50%"></div>
      <div className="headerProfile right-0  flex items-center justify-between">
        <div className="headerNotifications mr-10 hidden md:block">
          <img src={notifications} alt="notification" />
        </div>

        <div className="headerProfileDetails hidden md:flex items-center justify-between gap-3 relative">
          <img
            src={avatar}
            className="headerProfileAvatar border-2 border-white rounded-full w-9"
            alt="user avatar"
          />
          <Typography text="Timothy" element="h5" />
          <Icon src={downwards} onClick={() => setOpenOptions(true)} />

          <OptionsModal
            style={{ top: "15px", boxShadow: "unset", right: 0 }}
            open={openOptions}
            close={() => setOpenOptions(false)}
            options={[
              <HorizontalFlexWithIcon text="Settings" icon={settings} />,
            ]}
            onOptionsChange={() => {}}
          />
        </div>
      </div>
      <RiBarChartHorizontalFill
        className="menuNav cursor-pointer font-medium text-primary-blue md:hidden mt-3"
        onClick={() => {
          setOpenMenu(true);
          setSidebar && setSidebar(false);
        }}
        data-testid="menu-button"
      />
      <NavMenu
        close={() => {
          setOpenMenu(false);
        }}
        open={openMenu}
      />
    </header>
  );
};

export default Header;

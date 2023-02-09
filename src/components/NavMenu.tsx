import { FC } from "react";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import Icon from "./UI/Icon";
import Typography from "./UI/Typography";
import notifications from "../assets/images/Notification.svg";
import profile from "../assets/images/profile.svg";
import gear from "../assets/images/gear.png";

interface SidebarProps {
  open: boolean;
  close: () => void;
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { open, close } = props;

  return (
    <>
      {open && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-0 "
          onClick={close}
        />
      )}
      <aside
        className={`${
          !open && "navmenu-closed"
        } fixed transition-all duration-300 ease-in-out right-0 top-0 z-9 h-full rounded-tl-lg rounded-bl-lg bg-primary-blue w-64 md:hidden`}
        data-testid="side-navbar"
      >
        <AiFillCloseCircle
          onClick={close}
          data-testid="close-button"
          className="absolute right-5 text-white top-5 cursor-pointer"
        />
        <div className="sidebarLinks w-full  mt-32">
          <Link
            to="/notifications"
            onClick={close}
            className=" text-white text-lg flex justify-between pr-7 pl-5 py-2 hover:bg-primary-green my-4 rounded-md"
          >
            <Icon isActive src={notifications} />
            <Typography text="Notifications" element="h5" />
          </Link>
          <Link
            to="/profile"
            onClick={close}
            className=" text-white text-lg flex justify-between pr-7 pl-5 py-2 hover:bg-primary-green my-4 rounded-md"
          >
            <Icon isActive src={profile} />
            <Typography text="Profile" element="h5" />
          </Link>
          <Link
            to="/settings"
            onClick={close}
            className=" text-white text-lg flex justify-between pr-7 pl-5 py-2 hover:bg-primary-green my-4 rounded-md"
          >
            <Icon isActive src={gear} styles={{ width: 25, height: 25 }} />
            <Typography text="Settings" element="h5" />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

import React from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import logout from "../assets/images/Logout.svg";
import { sidebarlinks } from "../utils/data";
import IconLink from "./UI/IconLink";

interface SidebarProps {
  open: boolean;
  close: (val: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { open, close } = props;

  return (
    <>
      {open && (
        <div
          className="fixed  bg-black opacity-20 lg:hidden top-0 left-0 right-0 bottom-0"
          onClick={() => close(false)}
        />
      )}
      <div
        className={`${
          !open && "sidebar-closed"
        } w-64 mt-15  h-full  bg-white font-secondary text-sm overflow-y-scroll shadow-md fixed left-0 transition-all duration-300 ease-in-out py-5 px-5 pt-32`}
      >
        <div
          className={`puller top-[63px] lg:hidden bg-primary-blue p-3 rounded-tr-lg rounded-br-lg text-white cursor-pointer ${
            open ? "left-[257px]" : "left-0"
          } top-50 transition-all duration-300 ease-in-out fixed`}
          onClick={() => close(!open)}
        >
          {!open ? <MdArrowForwardIos /> : <MdArrowBackIosNew />}
        </div>

        <div className="w-full">
          <div className="flex flex-col">
            {sidebarlinks.map((item, index) => (
              <IconLink item={item} key={`${item.name}-${index}`} />
            ))}
            <div className="mt-32 flex text-[#FF4842] items-center cursor-pointer gap-5 transition duration-300 ease-in-out px-10 py-5 rounded-2xl mb-5">
              <img src={logout} alt="logout" />
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

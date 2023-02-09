import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";
import Typography from "./Typography";

interface IconObject {
  name: string;
  icon: string;
  to: string;
}

interface IconLinkProps {
  item: IconObject;
}

const IconLink: React.FC<IconLinkProps> = (props) => {
  const {
    item: { name, icon, to },
  } = props;

  const location = useLocation();

  const isActive = location.pathname === to;
  return (
    <div className="w-full font-secondary text-gray-dark relative">
      <NavLink
        to={to}
        className={`ml-8 hover:bg-primary-green hover:text-white flex items-center gap-5 transition duration-300 ease-in-out px-5 py-5 rounded-2xl mb-5 ${
          isActive
            ? "bg-green-light border-l-3 bg-primary-blue text-white"
            : undefined
        }`}
      >
        <Icon src={icon} isActive={isActive} />
        <Typography text={name} element="p" />
      </NavLink>
      {isActive && (
        <div className="bg-primary-blue absolute top-0 left-0 h-[80%] w-3 z-20 rounded-tr-xl rounded-br-xl"></div>
      )}
    </div>
  );
};

export default IconLink;

import React from "react";
import Icon from "./Icon";
import Typography from "./Typography";

interface ButtonProps {
  title?: boolean;
  text: string;
  icon: string;
  onClick?: () => void;
}

const HorizontalFlexWithIcon: React.FC<ButtonProps> = (props) => {
  const { text, icon, onClick, title } = props;

  return (
    <div
      className="flex gap-3 items-center justify-around p-4 cursor-pointer hover:bg-secondary_green"
      onClick={() => onClick && onClick()}
    >
      <Icon src={icon} />
      <Typography title={title} element="h5" text={text} />
    </div>
  );
};

export default HorizontalFlexWithIcon;

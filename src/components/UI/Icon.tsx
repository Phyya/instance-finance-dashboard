import React from "react";

interface IconProps {
  src: string;
  isActive?: boolean;
  onClick?: () => void;
  styles?: {};
}

const Icon: React.FC<IconProps> = (props) => {
  const { src, onClick, isActive, styles } = props;
  if (!src) return null;
  return (
    <img
      src={src}
      onClick={onClick}
      alt="icon"
      style={{ ...styles, cursor: onClick ? "pointer" : undefined }}
      className={`${isActive ? "brightness-100" : "brightness-50"}`}
    />
  );
};

export default Icon;

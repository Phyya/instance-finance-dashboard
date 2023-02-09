import React from "react";

interface TypographyProps {
  text: string;
  title?: boolean;
  active?: boolean;
  onClick?: () => void;
  element: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Typography: React.FC<TypographyProps> = (props) => {
  const { text, element, title, active, onClick } = props;

  return React.createElement(
    element,
    {
      className: `${title ? "text-blue-500" : "text-inherit"} ${
        active ? "border-b-2 border-green-500 pb-2" : ""
      } ${onClick ? "cursor-pointer" : ""}`,
      onClick: () => onClick && onClick(),
    },
    text
  );
};

export default Typography;

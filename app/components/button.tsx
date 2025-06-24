import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  size: "big" | "small";
  icon?: boolean;
  inverted?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  size,
  icon = false,
  inverted = false,
  className,
}) => {
  let additionalClass;
  if (!icon) {
    if (size === "big") {
      additionalClass = "px-6 py-3 text-lg";
    } else {
      additionalClass = "px-4 py-2 text-base";
    }
  } else {
    additionalClass = "p-2 text-base";
  }

  let invertStyle;
  if (!inverted) {
    invertStyle =
      "border-foreground/70 hover:border hover:border-bforeground active:bg-blue-50";
  } else {
    invertStyle =
      "border-white bg-white/50 text-white hover:bg-foreground/100 hover:text-bforeground hover:border-foreground/100 active:bg-blue-100";
  }

  return (
    <button
      className={`bg-white text-bforeground rounded-lg border flex justify-center items-center gap-2
        hover:-translate-y-1    
        transition-all duration-150
        ${additionalClass} 
        ${invertStyle}   
        ${className}       
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

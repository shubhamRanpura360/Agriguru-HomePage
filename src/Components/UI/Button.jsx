import React from "react";

export const Button = ({
  onClick,
  className = "",
  children,
  icon,
  variant = "primary",
  ...props
}) => {
  const variants = {
    primary: "bg-[#FFE17D] text-[#212124]",
    outline: "bg-none border border-[#D9D9D9] text-[#D9D9D9]",
    secondary: "bg-[#F8FAFC] text-[#212124]",
  };

  return (
    <button
      onClick={onClick}
      className={`w-[111px] h-[50px] flex items-center justify-center 
        rounded font-medium leading-[21.48px] 
        ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && (
        <span className="w-[24px] h-[24px] flex items-center justify-center mr-1">
          {icon}
        </span>
      )}
      {children || ""}
    </button>
  );
};
  
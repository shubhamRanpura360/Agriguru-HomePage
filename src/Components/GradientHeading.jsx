import React from "react";
import { useTheme } from "../Context/ThemeContext";

const GradientHeading = ({ mainText, gradientText, endText }) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex justify-center">
      <h1 className={`text-[46px] w-full font-medium ${
        theme === "dark" ?  "text-primary" : "text-primary-light"
      }`}>
        <span className="mr-2">{mainText}</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 mr-2">
          {gradientText}
        </span>
        {endText}
      </h1>  
    </div>
  );
};

export default GradientHeading;

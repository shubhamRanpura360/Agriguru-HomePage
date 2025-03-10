import React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { useTheme } from "../Context/ThemeContext";
import ArrowIcon from "../assets/icons/Arrow_icon.svg";
import Usflag from "../assets/icons/us-flag.svg";

const TopNavbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    let newTheme;
    if (theme === "dark") newTheme = "system";
    else if (theme === "system") newTheme = "light";
    else newTheme = "dark";
  
    setTheme(newTheme);
  };
  

  return (
    <header
      className={`h-[61px] w-full flex items-center justify-center 
    ${
      theme === "dark"
        ? "bg-gradient-to-r from-[#FFE17D] via-[#382c1b] to-[#212124] text-primary"
        : "bg-gradient-to-r from-[#A67539] via-[#FFE17D] to-[#F5F5F7] text-[#212124]"
    }`}
    >
      <div className="w-full max-w-[1450px] flex justify-between items-center">
        <span
          className={`text-[18px] font-bold text-center ${
            theme === "dark" ? "text-[#212124]" : ""
          }`}
        >
          Get Best Offer On Mobile App Membership On Premium Services
        </span>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img
              src="/mobile.svg"
              alt="Mobile Icon"
              className={`w-[13px] h-[23.56px] ${
                theme !== "dark" ? "filter brightness-0" : ""
              }`}
            />
            <span className="text-[18px] font-medium leading-[21.48px] text-center">
              Get Application
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/Vector.svg"
              alt="Contact Icon"
              className={`w-[26px] h-[26px] ${
                theme !== "dark" ? "filter brightness-0" : ""
              }`}
            />
            <span className="text-[18px] font-medium leading-[18.48px] text-center">
              Contact Us
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img src={Usflag} alt="USA Flag" className="w-[24.5px] h-[24px]" />
            <span className="text-[18px] font-medium text-center">Eng-Us</span>
            <img
              src={ArrowIcon}
              alt="Arrow Icon"
              className={`w-[16px] h-[8.67px] ${
                theme !== "dark" ? "filter brightness-0" : ""
              }`}
            />
          </div>
          <button
            onClick={toggleTheme}
            className="flex items-center text-[18px] font-medium max-w-[130px] justify-center"
          >
            {theme === "light" ? (
              <MdLightMode size={20} />
            ) : theme === "dark" ? (
              <MdDarkMode size={20} />
            ) : (
              <RiComputerLine size={20} />
            )}
            <span className="w-[100px] text-center">
              {theme === "light"
                ? "Light Mode"
                : theme === "dark"
                ? "Dark Mode"
                : "System"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
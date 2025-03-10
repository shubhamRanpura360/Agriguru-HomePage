import React from "react";
import BurgerMenu from "../assets/icons/Burger_Menu.svg";
import ArrowIcon from "../assets/icons/Arrow_icon.svg";
import { useTheme } from "../Context/ThemeContext";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header
      className={`py-2 h-[80px] flex items-center justify-center
        ${theme === "dark" ? "bg-[#141414] text-secondary-100" : "bg-[#F5F5F7] text-[#1D1D1F]"}
      `}
    >
      <div className="flex items-center justify-between w-full max-w-[1450px]">
        <div className="flex items-center gap-2">
          <img
            src={BurgerMenu}
            alt="Burger Menu"
            className={`w-[56px] h-[49px] ${theme === "dark" ? "" : "filter brightness-0"}`}
          />
          <span className="text-[18px] font-medium">Menu</span>
        </div>

        <nav className="flex items-center text-[18px] font-medium leading-[21.48px] gap-12">
          {["Rice", "Sugar", "Grains", "Pulses", "Spices", "Oil Seeds", "Edible Oils", "Feed Meals", "Flours", "Organic"].map((item) => (
            <a key={item} href="#" className="hover:text-gray-500">
              {item}
            </a>
          ))}
          <div className="relative group flex items-center gap-2">
            <a href="#" className="hover:text-gray-500">
              More
            </a>
            <img
              src={ArrowIcon}
              alt="Arrow icon"
              className={`w-[16px] h-[8.67px] ${theme === "dark" ? "" : "filter brightness-0"}`}
            />
          </div>
        </nav>
      </div>

      <div className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-[#A67539] to-[#E3D37F]"></div>
    </header>
  );
};

export default Header;

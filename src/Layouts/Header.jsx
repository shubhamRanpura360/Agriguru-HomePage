import React from "react";
import BurgerMenu from "../assets/icons/Burger_Menu.svg";
import ArrowIcon from "../assets/icons/Arrow_icon.svg";

const Header = () => {
  return (
    <header className="bg-[#141414] text-secondary-100 py-2 h-[80px] flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-[1450px]">
        <div className="flex items-center gap-2">
          <img
            src={BurgerMenu}
            alt="Burger Menu"
            className="w-[56px] h-[49px]"
          />
          <span className="text-[18px] font-medium ">Menu</span>
        </div>

        <nav className="flex items-center text-[18px] font-medium leading-[21.48px] gap-12">
          {["Rice", "Sugar", "Grains", "Pulses", "Spices", "Oil Seeds", "Edible Oils", "Feed Meals", "Flours", "Organic"].map((item) => (
            <a key={item} href="#" className="hover:text-gray-300">
              {item}
            </a>
          ))}
          <div className="relative group flex items-center gap-2">
            <a href="#" className="hover:text-gray-300">
              More
            </a>
            <img
              src={ArrowIcon}
              alt="Arrow icon"
              className="w-[16px] h-[8.67px]"
            />
          </div>
        </nav>
      </div>

      <div className="absolute bottom-0  w-full h-[2px] bg-gradient-to-r from-[#A67539] to-[#E3D37F]"></div>
    </header>
  );
};

export default Header;




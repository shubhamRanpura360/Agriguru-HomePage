import React from "react";
import SearchIcon from "../assets/icons/search_icon.svg";
import { Logo } from "../Components/UI/Logo";
import { Button } from "../Components/UI/Button";
import { useTheme } from "../Context/ThemeContext";

function SearchBar() {
  const { theme } = useTheme();

  return (
    <header
      className={`w-full flex items-center justify-center h-[112px] space-x-56 
        ${theme === "dark" ? "bg-black" : "bg-white"}
      `}
>
      <div className="flex items-center gap-6">
        <Logo />
        <div
          className={`flex items-center w-[715px] h-[56px] border-[1.5px] rounded-lg
     ${
       theme === "dark"
         ? "bg-[#141414] border-[#D9D9D9] text-primary"
         : "bg-[#3333331A] border-[#6E6E73] text-[#333333]"
     }
    `}
    >
          <input
            type="text"
            placeholder="Search Products"
            className="w-full bg-transparent outline-none px-4 text-inherit"
          />
          <Button
            className="w-[151px] h-[54px] text-[18px] flex items-center justify-center rounded-r-lg"
            icon={
              <img
                src={SearchIcon}
                alt="Search icon"
                className="w-[22px] h-[24px]"
              />
            }
          >
            Search
          </Button>
        </div>
      </div>

      <nav
        className={`flex items-center gap-6 pr-1 text-[18px] font-medium md:text-wrap 
          ${theme === "dark" ? "text-secondary-200" : "text-[#1D1D1F]"}
        `}
      >
        <a href="/" className="hover:text-gray-300">
          Home
        </a>
        <a href="/about" className="hover:text-gray-300">
          About Us
        </a>
        <a href="/register" className="hover:text-gray-300">
          Register Here
        </a>
        <div className="border-l bg-[#F8FAFC] h-10"></div>
        <a href="/login" className="hover:text-gray-300 ">
          Login
        </a>
      </nav>
    </header>
  );
}

export default SearchBar;

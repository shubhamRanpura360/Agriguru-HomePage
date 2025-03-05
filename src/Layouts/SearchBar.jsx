import React from "react";
import SearchIcon from "../assets/icons/search_icon.svg";
import { Logo } from "../Components/UI/Logo";
import { Button } from "../Components/UI/Button";

function SearchBar() {
  return (
    <header className=" bg-black w-full flex items-center justify-center h-[112px] space-x-56">
      <div className="flex items-center gap-6">
        <Logo />
        <div className="flex items-center w-[715px] h-[56px] border-[1.5px] border-[#D9D9D9] rounded-lg bg-[#141414]">
          <input
            placeholder="Search Products"
            className="flex-1 bg-transparent border-none focus:outline-none text-[18px] px-4 text-primary"
          />
          <Button
            className="w-[151px] h-[54px] text-[18px] flex items-center justify-center rounded-rb-lg"
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

      <nav className="flex items-center gap-6 pr-1 text-secondary-200 text-[18px] font-medium md:text-wrap">
        <a href="/" className="hover:text-gray-300 transition-colors">
          Home
        </a>
        <a href="/about" className="hover:text-gray-300 transition-colors">
          About Us
        </a>
        <a href="/register" className="hover:text-gray-300 transition-colors">
          Register Here
        </a>
        <div className="border-l bg-[#F8FAFC] h-10"></div>
        <a href="/login" className="hover:text-gray-300 transition-colors">
          Login
        </a>
      </nav>
    </header>
  );
}

export default SearchBar;

import React from "react";
import { Outlet } from "react-router-dom"; 
import TopNavbar from "./TopNavbar";
import SearchBar from "./SearchBar";
import Header from "./Header";
import Footer from "./Footer";
import StickyElements from "../Components/StickyElements";
import { useTheme } from "../Context/ThemeContext";

const MainLayout = () => {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen ${theme === "dark" ? "bg-black text-white" : "bg-white text-textColor-light"}`}>
      <TopNavbar />
      <div className="sticky top-0 w-full z-50">
        <SearchBar />
        <Header />
      </div>
      <main className="flex-1 overflow-auto">
        <Outlet />    
      </main>
      <StickyElements />
      <Footer />
    </div>
  );
};  

export default MainLayout;

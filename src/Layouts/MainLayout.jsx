import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom"; 
import TopNavbar from "./TopNavbar";
import SearchBar from "./SearchBar";
import Header from "./Header";
import Footer from "./Footer";
import StickyElements from "../Components/StickyElements";

const MainLayout = () => {
  const [showTopNavbar, setShowTopNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setShowTopNavbar(false); 
      } else {
        setShowTopNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {showTopNavbar && <TopNavbar />}
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














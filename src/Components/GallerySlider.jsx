import React, { useState } from "react";
import { Card, CardContent } from "../Card/Card";
import { Button } from "./UI/Button";
import agrigallery from "../assets/icons/agri_gallery-1.svg";
import agrigallery2 from "../assets/icons/agri_gallery-2.svg";
import agrigallery3 from "../assets/icons/agri_gallery-3.svg";
import GradientHeading from "./GradientHeading";
import ThreeDots from "./animations/ThreeDots";
import ArrowLeft from "../assets/icons/Arrow1.svg";
import ArrowRight from "../assets/icons/Arrow-right.svg";

const galleryItems = [
  { id: 1, title: "AGRI FUNDX Dubai 2024", image: agrigallery, video: false },
  { id: 2, title: "AGRI FUNDX Dubai 2024", image: agrigallery2, video: false },
  { id: 3, title: "How AgriGuru Works?", image: agrigallery3, video: true },
];

const GallerySlider = () => {
  return (
    <div className="bg-[#212124] text-primary p-6">
      <div className="flex justify-center item-center mb-6">
        <GradientHeading mainText="Agriguru" gradientText="GALLERY" />
      </div>
      <div className="flex items-center justify-center relative">
        <div className="flex items-center justify-center gap-[20px]">
          <button className="p-2 border border-[#CBD5E1] bg-gray-800 hover:bg-gray-700 text-secondary-300 rounded">
            <img src={ArrowLeft} alt="Left Arrow" className="w-6 h-6" />
          </button>
          <div className="flex gap-[17px] relative">
            {galleryItems.map((item) => (
              <Card key={item.id} className="w-[463px] h-[347px] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <CardContent className="bg-[#121212] text-center">
                  <p className="text-sm font-semibold text-primary">
                    {item.title}
                  </p>
                </CardContent>
              </Card>
            ))}
            <div className="absolute bottom-[-60px] right-0">
              <Button variant="primary">View All</Button>
            </div>
          </div>
          <button className="p-2 border border-[#CBD5E1] bg-gray-800 hover:bg-gray-700 text-secondary-300 rounded">
            <img src={ArrowRight} alt="Right Arrow" className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <ThreeDots />
      </div>
    </div>
  );
};

export default GallerySlider;

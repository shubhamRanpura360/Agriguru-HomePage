import React from "react";
import { Card, CardContent } from "../Card/Card";
import GradientHeading from "./GradientHeading";
import { Button } from "./UI/Button";
import ThreeDots from "./animations/ThreeDots";
import ArrowLeft from "../assets/icons/Arrow1.svg";
import ArrowRight from "../assets/icons/Arrow-right.svg";
import OrganicUkraine from "../assets/icons/Partner Logo.svg";
import APEDA from "../assets/icons/Partner Logo-2.svg";
import IndianExport from "../assets/icons/Partner Logo-3.svg";
import IndiaPort from "../assets/icons/Partner Logo-4.svg";
import DubaiChamber from "../assets/icons/Partner Logo-5.svg";
import CircularLogo from "../assets/icons/Partner Logo-6.svg";
 
const partnerLogos = [
  { id: 1, src: OrganicUkraine, alt: "Organic Ukraine" },
  { id: 2, src: APEDA, alt: "APEDA" },
  { id: 3, src: IndianExport, alt: "Indian Export Organizations" },
  { id: 4, src: IndiaPort, alt: "India Port" },
  { id: 5, src: DubaiChamber, alt: "Dubai Chamber" },
  { id: 6, src: CircularLogo, alt: "Circular Logo" },
];

const PartnersSection = () => {
  const slidesToShow = 6;

  return (
    <div className="bg-black py-10 ">
      <div className="flex justify-center items-center mb-6">
        <GradientHeading mainText="Associated" gradientText="PARTNERS" />
      </div>
      <div className="flex items-center justify-center gap-[20px] relative">
        <button className="p-2 border border-[#CBD5E1] bg-gray-800 hover:bg-gray-700 text-secondary-300 rounded">
          <img src={ArrowLeft} alt="Left Arrow" className="w-6 h-6" />
        </button>
        <div className="flex items-center relative gap-[33px]" >
          {partnerLogos.slice(0, slidesToShow).map((logo) => (
            <Card key={logo.id} className="flex items-center justify-center ">
              <CardContent>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="min-w-[210px] min-h-[210px] w-full "
                />
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
      <div className="mt-10 flex justify-center">
        <ThreeDots />
      </div>
    </div>
  );
};

export default PartnersSection;
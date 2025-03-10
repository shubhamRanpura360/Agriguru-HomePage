import React from "react";
import { Card, CardContent } from "../Card/Card";
import { Button } from "./UI/Button";
import agriguruUpdate1 from "../assets/icons/agriguru_update-1.svg";
import agriguruUpdate2 from "../assets/icons/agriguru_update-2.svg";
import agriguruUpdate3 from "../assets/icons/agrigur-update-3.svg";
import GradientHeading from "./GradientHeading";
import ArrowLeft from "../assets/icons/Arrow1.svg";
import ArrowRight from "../assets/icons/Arrow-right.svg";
import ThreeDots from "./animations/ThreeDots";

const tabs = ["All Updates", "News", "Events", "Updates"];

const updates = [
  {
    id: 1,
    title:
      "AgriGuru Online is thrilled to announce its participation as Diamond Sponsor in The 2024",
    image: agriguruUpdate1,
  },
  {
    id: 2,
    title:
      "Presented by Dubuy by DP World, the Dubai Commodity Conclave 2024 is a premier global event",
    image: agriguruUpdate2,
  },
  {
    id: 3,
    title:
      "Attendance at The Dubai Sugar Conference 2025 is 'by invitation only'.",
    image: agriguruUpdate3,
  },
];

const UpdatesSection = () => (
  <div className="text-primary">
    <div className="flex justify-center mb-6">
      <GradientHeading mainText="Agriguru" gradientText="UPDATES" />
    </div>
    <div className="flex justify-center space-x-28 mb-8 text-[18px] font-medium text-secondary-200">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`${
            index === 0
              ? "text-[#FFE17D] border-b-2 border-[#FFE17D] pb-1"
              : "hover:text-[#FFE17D]"
          }`}
        >
          {tab}
        </button>  
      ))}
    </div>

    <div className="flex items-center justify-center relative ">
      <div className="flex items-center gap-[20px] ">
        <button className="p-2 border border-[#CBD5E1] bg-gray-800 hover:bg-gray-700 rounded">
          <img src={ArrowLeft} alt="Left Arrow" className="w-6 h-6" />
        </button>
        <div className="flex py-3 relative gap-[42px]">
          {updates.map(({ id, title, image }) => (
            <Card
              key={id}
              className="flex flex-col w-[446px] h-[425px] "
            >
              <img
                src={image}
                alt={title}
                className="object-cover rounded-xl w-[463px] h-[302px]"
              />
              <CardContent className="px-1 flex flex-col flex-grow">
                <h2 className="text-[18px] font-medium">{title}</h2>
                <div>
                  <Button variant="outline" className="mt-4 w-[207px] h-[45px]">
                    View More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <button className="p-2 border border-[#CBD5E1] bg-gray-800 hover:bg-gray-700 rounded ">
          <img src={ArrowRight} alt="Right Arrow" className="w-6 h-6 " />
        </button>
      </div>
    </div>  
    <div className="flex justify-center mt-8">  
      <ThreeDots/>
    </div> 
  </div>
);

export default UpdatesSection;

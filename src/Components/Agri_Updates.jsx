import React from "react";
import { Card, CardContent } from "../Card/Card";
import { Button } from "./UI/Button";
import GradientHeading from "./GradientHeading";
import AgriUpdateImg1 from "../assets/icons/agri_update_img-1.svg";
import AgriUpdateImg2 from "../assets/icons/agri_update_img-2.svg";
import AgriUpdateImg3 from "../assets/icons/agri_update_img-3.svg";

const data = [
  {
    id: 1,
    title: "Feature Lists Of The Application",
    image: AgriUpdateImg1,
  },
  {
    id: 2,
    title: "AgrifundX 2024 Dubai Conference - Agriguru Online",
    image: AgriUpdateImg2,
  },
  {
    id: 3,
    title: "Online Features",
    image: AgriUpdateImg3,
  },
];

const AgriGuruUpdates = () => {
  return (
    <div className="text-secondary-300 max-w-[1427px] max-h-[945px] mx-auto">
      <div className="flex justify-center mb-6">
        <GradientHeading mainText="Agriguru" gradientText="UPDATES" />
      </div>
      <div className="flex items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] ">
        {data.map((item) => (
          <Card
            key={item.id}
            className="bg-[#212124] w-[463px] h-[793px] text-secondary-300 rounded-2xl overflow-hidden shadow-lg flex flex-col p-4 "
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[421px]  object-cover"
            />
            <CardContent className="flex flex-col flex-grow">
              <h2 className="text-[24px] font-medium mb-4">{item.title}</h2>

              <div className="mt-auto flex gap-4">
                <Button className="h-[45px] w-[207px]" variant="primary">
                  Register
                </Button>
                <Button className="h-[45px] w-[207px]" variant="outline">
                  View More
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex items-end justify-end mt-4 ">
        
        <Button>View All</Button>
      </div>
      
    </div>
  );
};

export default AgriGuruUpdates;


import React from "react";
import InquiriesSection from "./InquiriesSection";



const InquiriesOverview = () => {
  const inquiriesData = [
    {
      country: "India",
      product: "Swarna Brown Rice 5% Sortex",
      marketRange: "$900 - $1100 / Container",
      date: "20-10-2024",
    },
    {
      country: "India",
      product: "Swarna Brown Rice 5% Sortex",
      marketRange: "$900 - $1100 / Container",
      date: "20-10-2024",
    },
    {
      country: "India",
      product: "Swarna Brown Rice 5% Sortex",
      marketRange: "$900 - $1100 / Container",
      date: "20-10-2024",
    },
  ];

  return (
    <div className="w-full h-[1472px] p-6 flex flex-col gap-[24px]">
      <InquiriesSection type="seller" data={inquiriesData} />
      <InquiriesSection type="buyer" data={inquiriesData} />
    </div>
  );
};

export default InquiriesOverview;

import React from "react";
import { Button } from "../UI/Button";
import Flag from "../../assets/icons/Flag.svg";

const InquiryCard = ({ type, country, product, marketRange, date }) => (
  <div className="w-[675px] min-h-[182px] flex items-center justify-between bg-black text-primary p-4 mb-2 rounded">
    <div className="space-y-2">
      <div className="flex items-center gap-16">
        <span className="text-[#93979D]">Country</span>
        <span className="flex items-center gap-2">
          {country}
          <img
            src={Flag}
            alt={`${country} Flag`}
            className="w-[34px] h-[22px] object-cover"
          />
        </span>
      </div>
      <div>
        <span className="text-[#93979D] ">Product</span>
        <span className="ml-16">{product}</span>
      </div>
      <div>
        <span className="text-[#93979D]">Market Range</span>
        <span className="ml-2">{marketRange}</span>
      </div>
    </div>
    <div className="flex flex-col items-end gap-2">
      <span className="text-[#93979D] mb-6">
        Date: <span className="text-primary">{date}</span>
      </span>
      <Button variant="secondary">
        {type === "seller" ? "Offer" : "Inquiry"}
      </Button> 
    </div>
  </div>
);

export default InquiryCard;

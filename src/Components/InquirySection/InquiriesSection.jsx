import React from "react";
import { Card, CardContent } from "../../Card/Card";
import InquiryCard from "./InquiryCard";
import { Button } from "../UI/Button";
import Buyerseller from "../../assets/icons/Sellers&Buyers.svg";

const InquiriesSection = ({ type, data }) => (
  <Card className="max-w-[1428px] min-h-[670px] mx-auto w-full bg-[#212124] border-[1px] border-[#504F4F] p-4">
    <CardContent>
      <div
        className={`flex gap-[24px] items-start ${
          type === "buyer" ? "flex-row-reverse" : ""
        }`}
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-[46px] font-medium text-primary">
            Latest Inquiries for
          </h2>
          <p className="text-[#FFE17D] text-[46px] font-medium">
            {type === "seller" ? "SELLERS" : "BUYERS"}
          </p>
          <Button className="mt-4">View All</Button>
          <img
            src={Buyerseller}
            alt="Worker with packages"
            className="w-[672px] h-[384px] object-cover rounded-lg "
          />
        </div>
        {type === "seller" && (
          <>
            <div className="flex flex-col gap-[20px] text-[20px] font-medium mt-4">
              {data.map((item, index) => (
                <InquiryCard key={index} {...item} type={type} />
              ))}
            </div>
            <div className="border-[3px] border-[#94A3B8] h-[350px] mt-14 rounded "></div>
          </>
        )}
        {type !== "seller" && (
          <>
            <div className="border-[3px] border-[#94A3B8] h-[260px] mt-32 rounded  "></div>
            <div className="flex flex-col gap-[20px] text-[20px] font-medium mt-4">
              {data.map((item, index) => (
                <InquiryCard key={index} {...item} type={type} />
              ))}
            </div>
          </>
        )}
      </div>
    </CardContent>
  </Card>
);
``
export default InquiriesSection;

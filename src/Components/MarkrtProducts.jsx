import React from "react";
import { Card, CardContent } from "../Card/Card";
import { Button } from "./UI/Button";
import ProductCardImage from "../assets/icons/ProductCard.svg";
import ArrowLeft from "../assets/icons/Arrow1.svg";
import ArrowRight from "../assets/icons/Arrow-right.svg";
import ThreeDots from "./animations/ThreeDots";
import GradientHeading from "./GradientHeading";
import AddIcon from "../assets/icons/Add product icon.svg";
import BuyIcon from "../assets/icons/buy-icon.svg";
import SellIcon from "../assets/icons/sell-icon.svg";

const products = [
  {
    id: 1,
    image: ProductCardImage,
    title: "Parboiled Rice 5% Broken",
    location: "Mundra Port, India",
    price: "FOB $450",
  },
  {
    id: 2,
    image: ProductCardImage,
    title: "Parboiled Rice 5% Broken",
    location: "Mundra Port, India",
    price: "FOB $450",
  },
  {
    id: 3,
    image: ProductCardImage,
    title: "Parboiled Rice 5% Broken",
    location: "Mundra Port, India",
    price: "FOB $450",
  },
  {
    id: 4,
    image: ProductCardImage,
    title: "Parboiled Rice 5% Broken",
    location: "Mundra Port, India",
    price: "FOB $450",
  },
  {
    id: 5,
    image: ProductCardImage,
    title: "Parboiled Rice 5% Broken",
    location: "Mundra Port, India",
    price: "FOB $450",
  },
];

const MarketedProducts = () => {
  return (
    <div className="bg-[#212124] py-12 text-primary">
      <div className="flex justify-center mb-6">
        <GradientHeading mainText="Marketed" gradientText="PRODUCTS" />
      </div>
      <div className="flex items-center justify-center relative">
        <div className="flex items-center gap-[5px]">
          <button className="p-2 border border-[#CBD5E1] bg-gray-800 hover:bg-gray-700 rounded">
            <img src={ArrowLeft} alt="Left Arrow" className="w-6 h-6" />
          </button>
          <div className="flex gap-8 px-4 py-3 relative">
            {products.map(({ id, image, title, location, price }) => (
              <Card
                key={id}
                className="w-[260px] h-[491px] bg-black text-secondary-300 border-[1px] border-[#504F4F] p-4"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-[239px] h-[229px] object-contain"
                />
                <CardContent>
                  <h3 className="text-[16px] font-medium">{title}</h3>
                  <hr className="border-t border-[#646464]" />
                  <p className="text-[16px] text-secondary-300 mt-1 font-medium">
                    {location}
                  </p>
                  <p className="text-[24px] font-semibold font-noto">{price}</p>
                  <div className="mt-4 flex gap-2 text-[18px]">
                    <Button variant="primary" className="flex-1 gap-2 mt-4">
                      <img
                        src={AddIcon}
                        alt="Add"
                        className="w-[20px] h-[20px]"
                      />
                      Add Product
                    </Button>
                  </div>
                  <div className="mt-2 flex gap-2">
                  <Button className="flex-1 !bg-[#12D091] text-secondary-300 gap-2 text-[18px]">
                  <img
                        src={BuyIcon}
                        alt="Buy"
                        className="w-[20px] h-[20px]"
                      />
                      Buy
                    </Button>
                    <Button className="flex-1 !bg-[#1D4CB3] text-secondary-300 gap-2 text-[18px]">
                      <img
                        src={SellIcon}
                        alt="sell"
                        className="w-[20px] h-[20px]"
                      />
                      Sell
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            <div className="absolute bottom-[-60px] right-4">
              <Button variant="primary">View All</Button>
            </div>
          </div>
          <button className="p-2 border border-[#CBD5E1] bg-gray-800 hover:bg-gray-700 rounded">
            <img src={ArrowRight} alt="Right Arrow" className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <ThreeDots />
      </div>
    </div>
  );
};

export default MarketedProducts;

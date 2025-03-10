import React, { useState } from "react";
import ProductTable from "./ProductTable";
import productData from "../Data/ProductData";
import productIcon from "../assets/icons/product.svg";
import freightIcon from "../assets/icons/freight.svg";
import GradientHeading from "./GradientHeading";
import { useTheme } from "../Context/ThemeContext";

const PriceUpdateTable = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState(productData);

  return (
    <div className="p-6">
      <div className="flex justify-center mb-8">
        <GradientHeading
          mainText="Agriguru"
          gradientText="PRODUCT PRICE"
          endText="Update"
        />
      </div>

      <div className="flex gap-4 pl-[14px] max-w-full mx-auto justify-center items-center">
        <button
          className={`w-[713px] h-[50px] px-4 py-3 flex justify-center items-center gap-2 rounded border text-[18px] font-medium 
        ${
          theme === "dark"
            ? "border-primary bg-[#212124] text-secondary-200"
            : "border-[#6E6E73] bg-[#E9E8ED] text-[#1D1D1F]"
        }
      `}
        >
          <img
            src={productIcon}
            alt="Product Icon"
            className={`w-[21.13px] h-[21.13px] ${
              theme === "dark" ? "" : "filter brightness-0"
            }`}
          />
          Add Product
        </button>

        <button
          className={`w-[713px] h-[50px] px-4 py-3 flex justify-center items-center gap-2 rounded text-[18px] font-medium
            ${
              theme === "dark"
                ? "bg-[#212124] text-secondary-200"
                : "bg-[#E9E8ED] text-[#121212]"
            }
          `}
        >
          <img
            src={freightIcon}
            alt="Freight Icon"
            className={`w-[16.84px] h-[18.98px] ${
              theme === "dark" ? "" : "filter brightness-0"
            }`}
          />
          Add Freight
        </button>
      </div>

      <ProductTable products={products} />
    </div>
  );
};

export default PriceUpdateTable;

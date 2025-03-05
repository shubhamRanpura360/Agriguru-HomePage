import React, { useState } from "react";
import ProductTable from "./ProductTable";
import productData from "../Data/ProductData";
import productIcon from "../assets/icons/product.svg";
import freightIcon from "../assets/icons/freight.svg";
import GradientHeading from "./GradientHeading";

const PriceUpdateTable = () => {
  const [products, setProducts] = useState(productData);

  return (
    <div className="p-6 ">
      <div className="flex justify-center mb-8">
        <GradientHeading
          mainText="Agriguru"
          gradientText="PRODUCT PRICE"
          endText="Update"
        />
      </div>
      <div className="flex gap-4 pl-[14px] max-w-full mx-auto  justify-center items-center">
        <button
          className="w-[713px] h-[50px] px-4 py-3 flex justify-center items-center gap-2 bg-[#212124] text-secondary-200
          rounded border border-primary text-[18px] font-medium"
        >
          <img
            src={productIcon}
            alt="Product Icon"
            className="w-[21.13px] h-[21.13px]"
          />
          Add Product
        </button>

        <button
          className="w-[713px] h-[50px] px-4 py-3 flex justify-center items-center gap-2 bg-[#212124] text-secondary-200 rounded 
          text-[18px] font-medium"
        >
          <img
            src={freightIcon}
            alt="Freight Icon"
            className="w-[16.84px] h-[18.98px]"
          />
          Add Freight
        </button>
      </div>

      <ProductTable products={products} />
    </div>
  );
};

export default PriceUpdateTable;

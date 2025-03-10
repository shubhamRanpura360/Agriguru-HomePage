import React from "react";
import { Trash2 } from "lucide-react";
import CountryIcon from "../assets/icons/Country-icon.svg";
import ChartIcon from "../assets/icons/Chart-icon.svg";
import CountryButtonIcon from "../assets/icons/Country_Button-Icon.svg";
import { Button } from "./UI/Button";
import AddIcon from "../assets/icons/Add product icon.svg";
import UpArrowIcon from "../assets/icons/Arrow.svg";
import DownArrowIcon from "../assets/icons/Arrow-down.svg";
import { useTheme } from "../Context/ThemeContext";

const headers = [
  "Category",
  "Country",
  "Product",
  "Ship by",
  "Incoterm",
  "Port",
  "Price",
  "Change",
  "Chart",
];

const ProductTable = ({ products }) => {
  const { theme } = useTheme();

  return (
    <div className="overflow-x-auto flex justify-center items-center pl-[4px]">
      <table className="text-primary w-full max-w-[1448px]">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="py-3 px-2">
                <button
                  className={`${
                    header === "Product" ? "w-[270px]" : "w-[112px]"
                  } h-[50px] px-3 py-2 rounded-md flex items-center justify-between font-medium 
               ${
                 theme === "dark"
                   ? "bg-[#212124] text-primary"
                   : "bg-[#E9E8ED] text-[#1D1D1F]"
               }`}
                >
                  {header}
                  {!["Price", "Change", "Chart"].includes(header) && (
                    <img
                      src={CountryButtonIcon}
                      alt="icon"
                      className={`w-[8.22px] h-[14px] gap-2 
                    ${theme === "dark" ? "" : "filter brightness-0"}`}
                    />
                  )}
                </button>
              </th>
            ))}
            <th>
              <Button
                className="w-[133px] h-[49px] ml-2 text-[16px] flex gap-2"
                variant="primary"
              >
                Check Price
                <img src={AddIcon} alt="Add" className="w-[14px] h-[33px]" />
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className={`font-medium ${
                theme === "dark" ? "text-secondary-200" : "text-[#333333]"
              }`}
            >
              <td className="py-3 px-4">{product.category}</td>
              <td className="py-3 px-4 flex items-center gap-2">
                <img
                  src={CountryIcon}
                  alt={product.country}
                  className="w-[21.13px] h-[21.13px]"
                />
                {product.country}
              </td>
              <td className="py-3 px-4">{product.product}</td>
              <td className="py-3 px-4">{product.shipBy}</td>
              <td className="py-3 px-4">{product.incoterm}</td>
              <td className="py-3 px-4 flex items-center gap-2">
                <img
                  src={CountryIcon}
                  alt={product.country}
                  className="w-[21.13px] h-[21.13px]"
                />
                {product.destination}
              </td>
              <td
                className={`py-3 px-4 font-medium whitespace-nowrap ${
                  product.changeType === "increase"
                    ? "text-[#0ACD45]"
                    : "text-[#DC2626]"
                }`}
              >
                <span className="inline-flex items-center gap-1">
                  ${product.price}
                  <img
                    src={
                      product.changeType === "increase"
                        ? UpArrowIcon
                        : DownArrowIcon
                    }
                    alt={product.changeType}
                    className="w-[16px] h-[16px]"
                  />
                </span>
              </td>
              <td className="py-3 px-4">{product.change}</td>
              <td className="py-3 px-4">
                <img
                  src={ChartIcon}
                  alt={product.chart}
                  className={`w-[21.13px] h-[21.13px] ${
                    theme === "dark" ? "" : "filter brightness-0"
                  }`}
                />
              </td>
              <td className="py-3 px-6 text-right">
                <button
                  className={`pr-6 font-medium ${
                    theme === "dark" ? "text-primary" : "text-[#333333]"
                  }`}
                >
                  Next
                </button>

                <button className="text-[#EF4444]">
                  <Trash2 className="h-[20.45px] w-[22.08px] inline" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;

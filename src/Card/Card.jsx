import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div className={`rounded-lg  overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={` ${className}`}>
      {children}
    </div>
  );
};
import React from "react";

const PortfolioCart = ({ photo }) => {
  return (
    <div className="w-auto rounded-lg overflow-hidden">
      <div>
        <img src={photo} alt="" className="w-full object-cover" />
      </div>
      <div className="text-center bg-white p-5">
        <p className="text-2xl">lorem,ipsum</p>
        <p className="text-sm mt-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, optio?
        </p>
      </div>
    </div>
  );
};

export default PortfolioCart;

import React from "react";
import "./Pricing.css";
import PriceOption from "../PriceOption/PriceOption";

const Pricing = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0,
      features: [
        "awesome feature",
        "extra feature",
        "unnecessary feature",
        "hudai feature",
        "will never use feature",
        "ajaira feature",
      ],
    },
    {
      id: 2,
      name: "Medium",
      price: 9.99,
    },
    {
      id: 3,
      name: "Premium",
      price: 19.99,
    },
  ];
  return (
    <div>
      <h2 className="text-5xl font-bold bg-indigo-300 p-12 ">
        best deal in the town
      </h2>
      <div className="grid grid-cols-3 gap-3 ">
        {pricingOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

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
      features: [
        "Everything on free",
        "extra feature",
        "unnecessary feature",
        "hudai feature",
        "will never use feature",
        "ajaira feature",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 19.99,
      features: [
        "Everything on premium",
        "extra feature",
        "unnecessary feature",
        "hudai feature",
        "will never use feature",
        "ajaira feature",
      ],
    },
  ];
  return (
    <div>
      <h2 className="text-5xl font-bold bg-indigo-300 p-12 ">
        best deal in the town
      </h2>
      <div className="grid md:grid-cols-3 gap-3 mt-4">
        {pricingOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

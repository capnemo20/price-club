import React from "react";
import "./PriceOption.css";
import Feature from "../Feature/Feature";


const PriceOption = ({ option }) => {
  const {features} = option;
  return (
    <div className="bg-indigo-300 mt-3 rounded-md p-3">
      <h2>
        <span className="text-6xl font-bold">{option.price}</span>
        <span className="text-2xl text-grey-200">/mon</span>
      </h2>
      <p className="text-3xl my-4">{option.name}</p>
      {
        features.map((feature, idx)=><Feature 
        feature = {feature}
        key={idx}
        ></Feature>)
      }
      <button className="bg-green-400 w-full mt-4 py-2 font-bold text-white rounded-md">Buy Now</button>
    </div>
  );
};

export default PriceOption;

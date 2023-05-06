import React from "react";
import "./PriceOption.css";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const PriceOption = ({ option }) => {
  return (
    <div className="bg-indigo-300 mt-3 rounded-md p-3">
      <h2>
        <span className="text-6xl font-bold">{option.price}</span>
        <span className="text-2xl text-grey-200">/mon</span>
      </h2>
      <p className="text-3xl my-4">{option.name}</p>
      <div className="flex items-center">
        <CheckCircleIcon className="h-4 w-4 text-green-500" />
        <p className="ml-2">Awesome feature</p>
      </div>
    </div>
  );
};

export default PriceOption;

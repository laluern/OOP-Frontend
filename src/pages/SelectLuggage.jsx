import React, { useState } from "react";
import { MdLuggage , MdNoLuggage} from "react-icons/md";

function SelectLuggage() {
  const [weight, setWeight] = useState(0);
  const weight_packages = [15, 20, 25, 30, 40, 50, 60];

  const handleButtonClick = (selectedWeight) => {
    setWeight(selectedWeight);
  };

  return (
    <div className="flex justify-center">
       <button
          onClick={() => handleButtonClick(0)}
          className={`flex justify-center flex-col items-center bg-gray-100 w-1/12 h-1/12 rounded-3xl m-5 ${
            weight === 0 ? "bg-green-600 text-white" : ""
          }`}
        >
          <MdNoLuggage className="text-6xl" />
          <p className="font-medium">No baggage</p>
          <p className="font-medium">0 THB</p>
        </button>
      {weight_packages.map((packageWeight) => (
        <button
          key={packageWeight}
          onClick={() => handleButtonClick(packageWeight)}
          className={`flex justify-center flex-col items-center bg-gray-100 w-1/12 h-1/12 rounded-3xl m-5 ${
            weight === packageWeight ? "bg-green-600 text-white" : ""
          }`}
        >
          <MdLuggage className="text-6xl" />
          <p className="font-medium">{packageWeight} kg</p>
          <p className="font-medium">{packageWeight * 30} THB</p>
        </button>
      ))}
    </div>
  );
}

export default SelectLuggage;
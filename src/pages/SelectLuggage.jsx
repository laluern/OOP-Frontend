import React, { useState } from "react";
import { MdLuggage , MdNoLuggage} from "react-icons/md";
import { useLocation } from "react-router-dom";

function SelectLuggage() {
  const location = useLocation();
  const [weights, setWeights] = useState(Array(location.state.total_passenger).fill(0));
  const weight_packages = [15, 20, 25, 30, 40, 50, 60];
  const [currentPassenger, setCurrentPassenger] = useState(1);


  const handleButtonClick = (selectedWeight) => {
    setWeights((prevWeights) => {
      const newWeights = [...prevWeights];
      newWeights[currentPassenger - 1] = selectedWeight;
      return newWeights;
    });
  };

  const handlePassengerChange = (passenger) => {
    setCurrentPassenger(passenger);
  };

  return (
    <div className="flex justify-center gap-6">
        <div className="passenger-button">
        {Array.from({ length: location.state.total_passenger }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePassengerChange(index + 1)}
            className={currentPassenger === index + 1 ? "selected" : ""}
          >
            <p>Passenger {index + 1}</p>
            {weights != 0 ? `${weights} kg` : "No Luggage"}
          </button>
        ))}
      </div>
      <div className="select-luggage">
       <button
          onClick={() => handleButtonClick(0)}
          className={`flex justify-center flex-col items-center bg-gray-100 w-28 h-28 rounded-3xl m-5 ${
            weights[currentPassenger - 1] === 0 ? "bg-green-600 text-white" : ""
          }`}
        >
          <MdNoLuggage className="text-6xl" />
          <p className="font-medium">No Luggage</p>
          <p className="font-medium">0 THB</p>
        </button>
      {weight_packages.map((packageWeight) => (
        <button
          key={packageWeight}
          onClick={() => handleButtonClick(packageWeight)}
          className={`flex justify-center flex-col items-center bg-gray-100 w-28 h-28 rounded-3xl m-5 ${
            weights[currentPassenger - 1] === packageWeight ? "bg-green-600 text-white" : ""
          }`}
        >
          <MdLuggage className="text-6xl" />
          <p className="font-medium">{packageWeight} kg</p>
          <p className="font-medium">{packageWeight * 30} THB</p>
        </button>
      ))}
      </div>
    </div>
  );
}

export default SelectLuggage;
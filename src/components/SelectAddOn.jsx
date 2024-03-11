import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { MdLuggage , MdNoLuggage} from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function SelectAddOn() {
  const location = useLocation();
  const navigate = useNavigate();

  const flight_instance_no = location.state.booking_data.flight_instance_no;
  const total_passenger = location.state.total_passenger

  const weight_packages = [15, 20, 25, 30, 40, 50, 60];

  const [SeatData, setSeatData] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState(Array.from({ length: total_passenger }, () => 0));
  const [weights, setWeights] = useState(Array.from({ length: total_passenger }, () => 0));
  const [currentPassenger, setCurrentPassenger] = useState(1);

  const check_seat = (route) => {

    const passenger_addon = PassengerAddOn()
    for (let passenger = 1; passenger <= total_passenger; passenger++) {

      if (passenger_addon[`Passenger${passenger}`]["seat"] === "-"){
        alert(`Please select a seat for all passenger!`);
        return;
        }
      }
    goto(route)
    }

  const goto = (route) => {
    navigate(route, {
        state: {
          booking_data: location.state.booking_data,
          passenger_data: PassengerAddOn()
        }
      })
  };

  const PassengerAddOn = () => {
    const passengerAddOn = {};

    for (let passenger = 1; passenger <= total_passenger; passenger++) {
      const seat = selectedSeats[passenger - 1] || "-";
      const weight = weights[passenger - 1] || 0;

      passengerAddOn[`Passenger${passenger}`] = {seat, weight};
    }

    return passengerAddOn;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/${flight_instance_no}/select_seat`
        );
        setSeatData(response.data);
      } catch (error) {
        console.error("Error fetching seat data:", error);
      }
    };

    fetchData();
  }, [flight_instance_no]);

  const SeatClick = (seat) => {
    const isSeatReserved = SeatData[seat] && SeatData[seat].is_reserved;
    const isSeatSelectedByAnother =
      Object.values(selectedSeats).includes(seat) &&
      selectedSeats[currentPassenger] !== seat;

    if (!isSeatReserved && !isSeatSelectedByAnother) {
      setSelectedSeats((prevSelectedSeats) => ({
        ...prevSelectedSeats,
        [currentPassenger - 1]: seat,
      }));
    }
  };

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
          {Array.from({ length: total_passenger }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePassengerChange(index + 1)}
              className={currentPassenger === index + 1 ? "selected" : ""}
            >
              <p className="font-bold">
              Passenger {index + 1}
              </p>
              <p>
              Seat : {selectedSeats[index] ? selectedSeats[index] : "-"}
              </p>
              <p>
              {weights[index] ? ` Luggage : ${weights[index]} kg` : "No Luggage"} 
              </p>
            </button>
          ))}
        </div>
      <div className="seat-map">
        {Object.keys(SeatData).map((seat) => (
          <div
            key={seat}
            className={`seat ${
              SeatData[seat].is_reserved ? "reserved" : ""
            } ${
              Object.values(selectedSeats).includes(seat)
                ? selectedSeats[currentPassenger - 1] === seat
                  ? "selected"
                  : "unavailable"
                : ""
            }`}
            onClick={() => SeatClick(seat)}
          >
            {seat}
          </div>
        ))}
        </div>
      <div className="select-luggage">
       <button
          onClick={() => handleButtonClick(0)}
          className={`flex justify-center flex-col items-center bg-gray-100 w-24 h-24 rounded-3xl m-5 ${
            weights[currentPassenger - 1] === 0 ? "bg-red-500 text-white" : ""
          }`}
        >
          <MdNoLuggage className="text-3xl" />
          <p className="font-medium">No Luggage</p>
          <p className="font-medium">0 THB</p>
        </button>
      {weight_packages.map((packageWeight) => (
        <button
          key={packageWeight}
          onClick={() => handleButtonClick(packageWeight)}
          className={`flex justify-center flex-col items-center bg-gray-100 w-24 h-24 rounded-3xl m-5 ${
            weights[currentPassenger - 1] === packageWeight ? "bg-red-500 text-white" : ""
          }`}
        >
          <MdLuggage className="text-3xl" />
          <p className="font-medium">{packageWeight} kg</p>
          <p className="font-medium">{packageWeight * 30} THB</p>
        </button>
      ))}
      </div>
      <div className="flex justify-center">
        <button className="text-white bg-red-500 w-16 h-11 rounded-2xl mx-5" onClick={() => check_seat("/fill_info")}>Continue</button>
      </div>
      </div>
  );
}
export default SelectAddOn;

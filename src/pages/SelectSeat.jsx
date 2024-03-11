import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function SelectSeat() {
  const [SeatData, setSeatData] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState({});
  const [currentPassenger, setCurrentPassenger] = useState(1);

  const location = useLocation();
  const flight_instance_no = location.state.flight_instance_no;

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
        [currentPassenger]: seat,
      }));
    }
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
              <p>
              Passenger {index + 1}
              </p>
              {selectedSeats[index + 1] ? selectedSeats[index + 1] : "-"}
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
                ? selectedSeats[currentPassenger] === seat
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
    </div>
  );
}

export default SelectSeat;

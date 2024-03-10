import React, { useState , useEffect}  from "react";
import axios from "axios";

function SelectSeat(){
    const [SeatData, setSeatData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
            "http://localhost:8000/select_seat?flight_instance_no=FI00001"
            );
            setSeatData(response.data);
        };

        fetchData();
    }, []);

    const [selectedSeat, setSelectedSeat] = useState(null);

    const SeatClick = (seat) => {
      if (SeatData[seat] && !SeatData[seat].is_reserved) {
        setSelectedSeat(seat);
      }
    };

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="seat-map">
        {Object.keys(SeatData).map((seat) => (
          <div
            key={seat}
            className={`seat ${SeatData[seat].is_reserved ? "reserved" : ""} ${
              selectedSeat === seat ? "selected" : ""
            }`}
            onClick={() => SeatClick(seat)}
          >
            {seat}
          </div>
        ))}
      </div>
      <div>
        {selectedSeat ? (
          <div>
            <p>Seat: {selectedSeat}</p>
            <p>Price: {SeatData[selectedSeat].price} THB</p>
          </div>
        ) : (
          <div>
            <p>Seat: -</p>
            <p>Price: -</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectSeat
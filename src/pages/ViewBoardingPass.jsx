import React , {useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function ViewBoardingPass() {

    const location = useLocation()
    const [currentPassenger, setCurrentPassenger] = useState(1);

    const handlePassengerChange = (passenger) => {
        setCurrentPassenger(passenger);
      };

    const all_passenger_boarding_pass = location.state.all_passenger_boarding_pass

    return (
        <div className="flex justify-center items-center">
            <div className="passenger-button">
            {Array.from({ length: Object.keys(all_passenger_boarding_pass).length }, (_, index) => (
                <div className="mb-4" key={index + 1}>
                <button
                    onClick={() => handlePassengerChange(index + 1)}
                    className={currentPassenger === index + 1 ? "selected rounded-xl w-36 h-12" : ""}
                >
                    <p className="font p-3 place-content-center">
                    Passenger {index + 1}
                    </p>
                </button>
                </div>
            ))}
            </div>
        <div>
            <img src="/src/assets/BoardingPass.png" className="w-1/2 h-1/2"/>
        </div>
        <div className="boardingPass-name">
            <p>
            {all_passenger_boarding_pass[`Passenger ${currentPassenger}`]?.name}<br />
            </p>
        </div>
        <div className="boardingPass-departure">
            <p>
            {all_passenger_boarding_pass[`Passenger ${currentPassenger}`]?.departure}<br />
            </p>
        </div>
        <div className="boardingPass-destination">
            <p>
            {all_passenger_boarding_pass[`Passenger ${currentPassenger}`]?.destination}<br />
            </p>
        </div>
        <div className="boardingPass-flight_no">
            <p>
            {all_passenger_boarding_pass[`Passenger ${currentPassenger}`]?.flight_no}<br />
            </p>
        </div>
        <div className="boardingPass-date">
            <p>
            {new Date(all_passenger_boarding_pass[`Passenger ${currentPassenger}`]?.departure_time)
                .toLocaleDateString('en-UK', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                })}
            </p>
        </div>
        <div className="boardingPass-time">
            <p>
            {new Date(new Date(all_passenger_boarding_pass[`Passenger ${currentPassenger}`]?.departure_time)
                .setHours(new Date(all_passenger_boarding_pass[`Passenger ${currentPassenger}`]?.departure_time).getHours() - 1))
                .toLocaleTimeString('en-UK', {
                hour: 'numeric',
                minute: 'numeric',
                })}
            </p>
        </div>
        <div className="boardingPass-seat">
            <p>
            {all_passenger_boarding_pass[`Passenger ${currentPassenger}`]?.seat}
            </p>
        </div>
    </div>
    )
}

export default ViewBoardingPass
import React from "react";
import PassengersInfo from "../components/PassengerInfo";
import { useNavigate , useLocation } from 'react-router-dom';

import BookingDetails from "../components/BookingDetails";

function FillInfo() {

    const navigate = useNavigate()
    const location = useLocation()

    const goto = (route) => {
        navigate(route);
    };

  return (
    <div className="items-center min-h-screen">
      <video autoPlay loop muted playsInline className="absolute right-0 bottom-0 z-[-1]">
        <source src="/src/assets/plane2.mp4" type="video/mp4"></source>
      </video>
        <div className="flex flex-col items-center justify-center w-full">
          <BookingDetails booking_info={location.state.booking_data}/>
          <div className="rounded-3xl border-solid bg-neutral-50 pe-5 mb-3 w-3/12 border-1 border-slate-500 pb-8 px-4 justify-center">
              <PassengersInfo booking_data={location.state.booking_data} passenger_data={location.state.passenger_data} booking_id={location.state.booking_id}/>
          </div>
        </div>
    </div>
  );
}

export default FillInfo;
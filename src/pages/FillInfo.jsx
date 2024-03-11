import React from "react";
import PassengersInfo from "../components/PassengerInfo";
import { useNavigate } from 'react-router-dom';

function FillInfo() {

    const navigate = useNavigate()

    const goto = (route) => {
        navigate(route);
    };

  return (
    <div>
        <div>
            <PassengersInfo/>
        </div>
        <div className="flex justify-center">
                    <button className="text-white bg-red-500 w-16 h-11 rounded-2xl mx-5" onClick={() => goto("/payment")}>Continue</button>
        </div>
    </div>
  );
}

export default FillInfo;
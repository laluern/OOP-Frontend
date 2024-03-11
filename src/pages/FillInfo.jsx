import React from "react";
import PassengersInfo from "../components/PassengerInfo";
import { useNavigate } from 'react-router-dom';

function FillInfo() {

    const navigate = useNavigate()

    const goto = (route) => {
        navigate(route);
    };

  return (
    <div className="flex flex-colflex justify-center items-center min-h-screen">
      <video autoPlay loop muted playsInline className="absolute right-0 bottom-0 z-[-1]">
        <source src="/src/assets/plane2.mp4" type="video/mp4"></source>
      </video>
        <div className="rounded-3xl border-solid bg-neutral-50 pe-5 mb-3 w-3/12 border-1 border-slate-500 py-8 px-4 justify-center">
          <PassengersInfo/>
        <div>
          <button className="transition-colors duration-200 bg-white text-red-500 w-full h-11 border-none outline-none rounded-3xl cursor-pointer font-medium mt-3 hover:bg-red-500 hover:text-neutral-50" onClick={() => goto("/home")}>Continue</button>
        </div>
        </div>
        
    </div>
  );
}

export default FillInfo;
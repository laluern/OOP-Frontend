import React from "react";
import { useNavigate } from 'react-router-dom';

function AddOn(){

    const navigate = useNavigate()

    const goto = (route) => {
        navigate(route);
    };

    return(
        <div>
            <div className="flex justify-center">
                <button onClick={() => goto("/add_on/select_seat")} className='bg-gray-100 w-1/6 h-1/5 rounded-3xl m-5'>
                    <div className="flex justify-center">
                        <img src="/src/assets/seat_icon.png"/>
                    </div>
                    <h1 className="font-medium">Select Seat</h1>
                </button>
                <button onClick={() => goto("/add_on/select_luggage")} className='bg-gray-100 w-1/6 h-1/5 rounded-3xl m-5'>
                    <div className="flex justify-center">
                        <img src="/src/assets/baggage_icon.png"/>
                    </div>
                    <p className="font-medium">Select Luggage</p>
                </button>
            </div>
            <div className="flex justify-center">
                <button className="text-white bg-red-500 w-16 h-11 rounded-2xl mx-5" onClick={() => goto("/fill_info")}>Continue</button>
            </div>
        </div>
    );
}

export default AddOn;
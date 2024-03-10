import React from 'react'
import { useNavigate } from 'react-router-dom';

function FlightDetails({flight_info}){

      const navigate = useNavigate()
  
      const goto = (route) => {
          navigate(route);
      };

    const [departure_date, departure_time] = flight_info.departure_time.split(' ');
    const [destination_date, destination_time] = flight_info.destination_time.split(' ');

    return (
    <div className='bg-gray-100 w-1/2 rounded-3xl m-5'>
      <div className="flex justify-center space-x-48">
        <p>{flight_info.departure}</p>
        <p>{flight_info.duration}</p>
        <p>{flight_info.destination}</p>
      </div>
      <div className="flex justify-center">
        <p>{departure_time}</p>
        <p>-------------------------------------------------------------------</p>
        <p>{destination_time}</p>
      </div>
      <div>
        {flight_info.price === flight_info.discount ? (
          <p className="flex justify-center">{flight_info.price} THB</p>
        ) : (
          <div>
            <p className="flex justify-center">{flight_info.price} THB</p>
            <p className="flex justify-center">{flight_info.discount} THB</p>
          </div>
        )}
        <div className="flex justify-center">
          <button onClick={() => goto("/add_on")} className="text-white bg-red-500 w-16 h-11 rounded-2xl mx-5">Select</button>
        </div>
      </div>
    </div>
  )
}

export default FlightDetails;
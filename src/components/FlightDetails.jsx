import React from 'react'

function FlightDetails({flight_info}){
    return   <div>
    <p>Departure: {flight_info.departure}</p>
    <p>Departure Time: {flight_info.departure_time}</p>
    <p>Destination: {flight_info.destination}</p>
    <p>destination Time : {flight_info.destinationtime}</p>
    <p>Duration: {flight_info.duration}</p>
    <p>Price: {flight_info.price}</p>
    <p>Discount: {flight_info.discount}</p>
  </div>
    
}

export default FlightDetails;
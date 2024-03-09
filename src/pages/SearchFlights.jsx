import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav';
import SearchResult from './SearchResult';

function SearchFlights() {
  const [departure, setDeparture] = useState('chiangmai'); // Set initial value for departure
  const [departureDate, setDepartureDate] = useState(); 
  const [destination, setDestination] = useState('chiangmai'); // Set initial value for destination
  const [passenger, setPassenger] = useState();

  const navigate = useNavigate()
  useEffect(() => {
    console.log(departure, destination, departureDate, passenger
    )
  }, [departure, destination, departureDate, passenger])

  const sendData = async () => {
    const data = {
      departure: departure,
      destination: destination,
      departure_date: departureDate,
      total_passenger: passenger,
      promocode : ""
    }
    const response = await axios.post("http://localhost:8000/search_flight",data)
    console.log(response.data)
    
    const params = new URLSearchParams()
    params.append("departure", data.departure)
    params.append("destination", data.destination)
    navigate(`/search/flights/results/?${params.toString()}`)
    navigate("/search/flights/result")
  }

  const handleDepartureChange = (e) => {
    setDeparture(e.target.value);
  };

  const handleDepartureDateChange = (e) => {
    setDepartureDate(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handlePassenger = (e) => {
    setPassenger(e.target.value);
  };

  return (
    <div>
      <Nav/>
      <div className="search-box">
        
        <div className="antialiased flex justify-center items-center min-h-screen">
          <div className="bg-red-500 p-10 rounded-xl">
            {/* departure */}
            <div className="flex flex-col">
              <label for="departure" className="text-white">Departure</label>
              <select value={departure} onChange={handleDepartureChange} className="text-base p-3 m-1 rounded box-border w-5/6" required>
                <option value="chiangmai">Chiangmai</option>
                <option value="hatyai">Hatyai</option>
                <option value="bangkok">Suvarnabhumi</option>
                <option value="khonkaen">Khonkaen</option>
              </select>
            </div>
            {/* destination */}
            <div className="flex flex-col">
              <label for="destination" className="text-white">Destination</label>
              <select value={destination} onChange={handleDestinationChange} className="text-base p-3 m-1 rounded box-border w-5/6" required>
                <option value="chiangmai">Chiangmai</option>
                <option value="hatyai">Hatyai</option>
                <option value="bangkok">Suvarnabhumi</option>
                <option value="khonkaen">Khonkaen</option>
              </select>
            </div>
            {/* passenger */}
            <div className="flex flex-col">
              <label for="passengers" className="text-white">Passengers</label>
              <input value={passenger} onChange={handlePassenger} type="number" min="1" max="6" className="mx-1.5 p-2.5 m-2 rounded w-5/6" required/>
            </div>
            {/* date */}
            <div className="flex flex-col">
              <label for="date" className="text-white">Date</label>
              <input onChange={handleDepartureDateChange} value={departureDate} type="date" name="departure_date" id="departure_date" className="p-2 m-1 rounded w-5/6" required/>
            </div>
            {/* promocode */}
            <div className="flex flex-col">
              <label for="promocode" className="m-0.5 text-white">Promocode</label>
              <input type="text" name="promocode" className="p-2 rounded-md mx-1.5 w-5/6"/>
            </div>
            <button onClick={sendData} className="bg-white mt-6 w-1/2 h-11 mx-12 rounded-2xl hover:bg-gray-300">Search</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default SearchFlights;
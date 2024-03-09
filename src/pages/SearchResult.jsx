import React from 'react'
import Nav from '../components/Nav';
import { useSearchParams, useLocation } from 'react-router-dom';
import FlightDetails from '../components/FlightDetails';

function SearchResult() {
  const location = useLocation()

  console.log(JSON)
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("departure")
  searchParams.get("destination")

  // console.log("asddsaf")
  // console.log(location.state.flightResult)
  // const temp = JSON.stringify(location.state.flightResult);
  const flight_list = location.state.flightResult
  console.log(flight_list)
// Accessing the value using square bracket notation
  const myValue = myObject['key-with-special-characters']["Name"];
  return (
    <div className="bg-gray-300 h-screen">
      <div>
      <Nav/>
      <h1>{flight_list["FI00001"]["departure"]}</h1>
      {/* <FlightDetails flightInfo={JSON.stringify(location.state.flightResult).FI00001}/> */}
      </div>
    </div>
  )
}

export default SearchResult
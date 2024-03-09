import React, { useState } from 'react'
import Nav from '../components/Nav';
import { useSearchParams, useLocation } from 'react-router-dom';
import FlightDetails from '../components/FlightDetails';

function SearchResult() {
  const location = useLocation()

  // console.log(JSON)
  // const [searchParams, setSearchParams] = useSearchParams();
  // searchParams.get("departure")
  // searchParams.get("destination")

  const [flightList] = useState(location.state.flightResult);

  return (
    <div>
      <Nav />
      {Object.keys(flightList).map(flightKey => (
        <div key={flightKey}>
          <h1>Flight Key: {flightKey}</h1>
          <FlightDetails flight_info={flightList[flightKey]} />
          <button>Select Flight</button>
          <h2>**************************************</h2>
        </div>
      ))}
    </div>
  );
}

export default SearchResult
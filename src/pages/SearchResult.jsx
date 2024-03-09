import React, { useState } from 'react'
import Nav from '../components/Nav';
import { useSearchParams, useLocation } from 'react-router-dom';
import FlightDetails from '../components/FlightDetails';
import Sorting from '../components/Sorting'

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
      <div className="flex justify-center">
        <Sorting/>
      </div>
      {Object.keys(flightList).map(flightKey => (
        <div className="flex justify-center" key={flightKey}>
          <FlightDetails flight_info={flightList[flightKey]} />
        </div>
      ))}
    </div>
  );
}

export default SearchResult
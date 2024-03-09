import React from 'react'
import Nav from '../components/Nav';
import { useSearchParams, useLocation } from 'react-router-dom';

function SearchResult() {
  const location = useLocation()

  console.log(JSON)
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("departure")
  searchParams.get("destination")
  return (
    <div>
      <Nav/>
      <h1>{JSON.stringify(location.state.flightResult)}</h1>
    </div>

  )
}

export default SearchResult
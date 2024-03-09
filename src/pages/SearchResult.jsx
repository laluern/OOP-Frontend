import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function SearchResult() {
  const location = useLocation()

  console.log(JSON)
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("departure")
  searchParams.get("destination")
  return (

    <div>
      <h1>{JSON.stringify(location.state.flightResult)}</h1>
    </div>
    
  )
}

export default SearchResult
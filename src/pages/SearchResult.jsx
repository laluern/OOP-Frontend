import React from 'react'
import { useSearchParams } from 'react-router-dom';

function SearchResult() {
    const [searchParams, setSearchParams] = useSearchParams();
    searchParams.get("departure")
    searchParams.get("destination")
  return (
    <div>
      <h1>hi babe</h1>
    </div>
  )
}

export default SearchResult
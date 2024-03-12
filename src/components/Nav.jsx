import React from 'react'
import { useNavigate } from 'react-router-dom'
import SearchFlights from '../pages/SearchFlights'

function Nav() {
  const navigate = useNavigate()

  function handleHome() {
    navigate("/")
  }

  function handleSearch() {
    navigate("/search/flights")
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-red-500 z-10">
      <div className="bg-red-500 flex justify-between">
        <div>
          <img src="/src/assets/melt-logo.svg" className="w-10 mx-5 my-2"/>
        </div>

        <ul className="text-white flex flex-row gap-4 m-3">
            <li><a href="/home" onClick={handleHome}>HOME</a></li>
            <li><a href="/search/flights" onClick={handleSearch}>SEARCH</a></li>
            <li><a href="/account">ACCOUNT</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
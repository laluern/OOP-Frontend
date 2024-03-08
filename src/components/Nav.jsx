import React from 'react'
import { useNavigate } from 'react-router-dom'
import SearchFlights from '../pages/SearchFlights'

function Nav() {
  const navigate = useNavigate()

  function handleHome() {
    navigate("/")
  }

  function handleSearch() {
    navigate("/search")
  }

  return (
    <nav>
        <img src="src/assets/logo.svg" className="w-10" />
        <ul className="text-white">
            <li><a href="/" onClick={handleHome}>HOME</a></li>
            <li><a href="/search" onClick={handleSearch}>SEARCH</a></li>
            <li><a href="#">ACCOUNT</a></li>
        </ul>
    </nav>
  )
}

export default Nav
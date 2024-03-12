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
        <a href="/home" onClick={handleHome}>
          <img src="/src/assets/melt-logo.svg" className="w-10 mx-5 my-2 border rounded-2xl"/>
        </a>

        <ul className="text-white flex flex-row gap-4 m-2">
            <li className="hover:bg-red-600 p-2 rounded-2xl font-semibold"><a href=" /home" onClick={handleHome}>HOME</a></li>
            <li className="hover:bg-red-600 p-2 rounded-2xl font-semibold"><a href="/search/flights" onClick={handleSearch}>SEARCH</a></li>
            <li className="hover:bg-red-600 p-2 rounded-2xl font-semibold"><a href="/account">ACCOUNT</a></li>
        </ul>
      </div>
      <div className="bg-gray-200 h-px w-full"></div>
    </nav>
  )
}

export default Nav
import React, { useEffect, useState } from 'react'
import PersonalInfo from '../components/PersonalInfo'
import { useCookies } from 'react-cookie'
import Nav from '../components/Nav'
import { Navigate, useNavigate } from 'react-router-dom'
import ViewBooking from '../components/ViewBooking'
import BookingDetails from '../components/BookingDetails'

function Account() {
  const [cookies, setCookie] = useCookies(['user'])

  const navigate = useNavigate()

  function logOut() {
    setCookie('user', null , { path: '/' })
    navigate("/login")
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Nav/>
      <br></br>
      <PersonalInfo/>
      <ViewBooking/>
      <button onClick={logOut} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 my-10">Log out</button>
    </div>
  )
}

export default Account
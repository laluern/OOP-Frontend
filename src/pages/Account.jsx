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
    <div>
      {/* <Nav/> */}
      <div>Welcome : {cookies.user._User__user_id}</div>
      <PersonalInfo/>
      {/* <BookingDetails/> */}
      {/* <ViewBooking/> */}
      {/* <button onClick={logOut} className="bg-red-500 text-white">Log out</button> */}
    </div>
  )
}

export default Account
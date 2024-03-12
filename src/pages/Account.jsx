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
      <Nav/>
      <div>
      <div>Welcome : {cookies.user._User__user_id}</div>
      <div className="flex flex-col items-center justify-center w-full translate-y-32 ">
      <h1 className='font-bold'>My booking : </h1>
        <div className="rounded-4xl border-solid bg-neutral-250 max-w-2xl shadow overflow-hidden sm:rounded-lg w-full translate-y-32 ">
        <ViewBooking/>
        </div>
      </div>
      <button onClick={logOut} className="bg-red-500 text-white z-50">Log out</button>
      </div>
    </div>
  )
}

export default Account
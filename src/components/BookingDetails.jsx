import React , { useEffect, useState } from "react"
import axios from 'axios'
import { useCookies } from 'react-cookie'

function BookingDetails({booking_info}){

    const [departure_date, departure_time] = booking_info.departure_time.split(' ');
    const [destination_date, destination_time] = booking_info.destination_time.split(' ');

    const date = new Date(departure_date).toLocaleDateString('en-UK', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })

    const price = async () => {
        try {
            const userId = cookies.user._User__user_id
            // const response = await axios.get(`http://localhost:8000/`)
        }
        catch (error) {
            
        }
    }

    
    return (
        <div className='bg-gray-100 w-1/5 rounded-3xl m-5'>
            <div className="flex justify-center">
                <p>Departure Date : {date}</p>
            </div>
        <div className="flex justify-center space-x-12">
            <p>({booking_info.departure})</p>
            <p>To</p>
            <p>({booking_info.destination})</p>
        </div>
        <div className="flex justify-center">
            <p>{booking_info.flight_no} | {departure_time} - {destination_time} | {booking_info.duration}</p>
        </div>
     </div>
    )
}

export default BookingDetails
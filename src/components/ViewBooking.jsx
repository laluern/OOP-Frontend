import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'

function ViewBooking() {
    const [cookies, setCookie] = useCookies(['user']);
    const [myBooking, setMyBooking] = useState({});

    useEffect(() => {
        info();
    }, []);

    const info = async () => {

        try {
            const userId = cookies.user._User__user_id
            const response = await axios.get(`http://localhost:8000/${userId}/view_my_bookings`)
            console.log(response.data)
            setMyBooking(response.data)
            console.log(myBooking)
        }
        catch (error) {
            alert("Error")
            return null
        }
    }

    const cancel = async (key) => {
        try {
            const userId = cookies.user._User__user_id
            const response = await axios.post(`http://localhost:8000/${userId}/cancel_booking?booking_no=${key}`)
            console.log(response.data)
            alert(response.data)
            setMyBooking(prevState => {
                const updatedBooking = {...prevState};
                delete updatedBooking[key];
                return updatedBooking;
            });
        }
        catch (error) {
            alert("Error")
            return null
        }
    }
    console.log(myBooking)

    return (
        <div>
            <h1>My Booking</h1>
            {Object.keys(myBooking).length > 0 ? (
                <div>
                    {Object.entries(myBooking).map(([key, value]) => (
                        <div key={key}>
                            <div>Booking No: {key}</div>
                            <div>Departure: {value.departure}</div>
                            <div>Departure Date: {value.departure_time.split('T')[0]}</div>
                            <div>Departure Time: {value.departure_time.split('T')[1]}</div>
                            <div>Destination: {value.destination}</div>
                            <div>Arriving Date: {value.arriving_time.split('T')[0]}</div>
                            <div>Arriving Time: {value.arriving_time.split('T')[1]}</div>
                            <div>Booking Status: {value.booking_status}</div>
                            <div>
                                <button onClick={() => cancel(key)} className="bg-blue-500">Cancel</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>No bookings found</div>
            )}
        </div>
    )
}

export default ViewBooking
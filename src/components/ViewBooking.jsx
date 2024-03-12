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
        }
        catch (error) {
            alert("Error")
            return null
        }
    }
    console.log(myBooking)

    // const date = new Date(departure_date).toLocaleDateString('en-UK', {
    //     day: 'numeric',
    //     month: 'short',
    //     year: 'numeric',
    //   })

    return   (
        <div className="container mx-auto mt-8 p-4">
            <h1 className="text-3xl font-semibold mb-4">My Booking</h1>
            {Object.keys(myBooking).length > 0 ? (
                <div>
                    {Object.keys(myBooking).map(key => {
                        const value = myBooking[key];
                        return (
                            <div key={key} className="bg-gray-100 rounded p-4 mb-4">
                                <div className="font-semibold">Booking No: {key}</div>
                                <div>Departure: {value.departure}</div>
                                <div>Date: {new Date(value.departure_time).toLocaleDateString('en-UK', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric',
                                })}</div>
                                <div>Departure Time: {new Date(value.departure_time).toLocaleTimeString('en-UK', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                })}</div>
                                <div>Destination: {value.destination}</div>
                                <div>Date: {new Date(value.destination_time).toLocaleDateString('en-UK', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric',
                                })}</div>
                                <div>Destination Time: {new Date(value.destination_time).toLocaleTimeString('en-UK', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                })}</div>
                                <div>Booking Status: {value.booking_status}</div>
                                <div className="mt-2">
                                    <button onClick={() => cancel(key)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Cancel</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="text-gray-500">No bookings found</div>
            )}
        </div>
    );
}

export default ViewBooking
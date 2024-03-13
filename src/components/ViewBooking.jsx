import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom';

function ViewBooking() {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['user']);
    const [myBooking, setMyBooking] = useState({});

    useEffect(() => {
        info();
    }, []);

    const view_boarding_pass = async (booking_no) => {
        try {
          const userId = cookies.user._User__user_id;
          const response = await axios.get(`http://localhost:8000/${userId}/${booking_no}/view_boarding_pass`);
    
            navigate("/view_boarding_pass", {
            state: {
                all_passenger_boarding_pass: response.data
                }
            })
    
        } catch (error) {
          alert("Failed");
          return null;
        }
      }

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
            const response = await axios.put(`http://localhost:8000/${userId}/cancel_booking?booking_no=${key}`)
            console.log(response.data)
            alert(response.data)
        }
        catch (error) {
            alert("Error")
            return null
        }
    }
    console.log(myBooking)

    return (
        <div className="container mx-auto mt-8 p-4">
            <h1 className="text-3xl font-semibold mb-4">My Booking</h1>
            {Object.keys(myBooking).length > 0 ? (
                <div>
                    {Object.keys(myBooking).map(key => {
                        const value = myBooking[key];
    
                        const statusBackgroundColor = (() => {
                            switch (value.booking_status) {
                                case 'Cancel':
                                    return 'bg-red-200';
                                case 'Pending':
                                    return 'bg-yellow-200';
                                case 'Confirm':
                                    return 'bg-green-200';
                                default:
                                    return 'bg-gray-100';
                            }
                        })();
    
                        const statusButton = (() => {
                            switch (value.booking_status) {
                                case 'Cancel':
                                    return null;
                                case 'Pending':
                                    return (
                                        <button onClick={() => cancel(key)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                                            Cancel
                                        </button>
                                    );
                                case 'Confirm':
                                    return (
                                        <div className="space-x-5">
                                            <button onClick={() => cancel(key)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                                                Cancel
                                            </button>
                                            <button onClick={() => view_boarding_pass(key)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                                                View Boarding Pass
                                            </button>
                                        </div>
                                    );
                                default:
                                    return null;
                            }
                        })();
    
                        return (
                                <div key={key} className={`rounded p-4 mb-4 ${statusBackgroundColor}`}>
                                <div className="font-semibold">Booking No: {key}</div>
                                <div>Date: {new Date(value.departure_time).toLocaleDateString('en-UK', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric',
                                })}</div>
                                <div>Departure: {value.departure}</div>
                                <div>Departure Time: {new Date(value.departure_time).toLocaleTimeString('en-UK', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                })}</div>
                                <div>Destination: {value.destination}</div>
                                <div>Destination Time: {new Date(value.destination_time).toLocaleTimeString('en-UK', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                })}</div>
                                <div>Booking Status: {value.booking_status}</div>
                                <div className="mt-2 space-x-5">
                                    {statusButton}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="bg-gray-100 text-gray-500">No bookings found</div>
            )}
        </div>
    );
}

export default ViewBooking
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

    return (
        <div className='flex items-center justify-center'>
            <div>
            {Object.keys(myBooking).length > 0 ? (
                <div>
                    {Object.entries(myBooking).map(([key, value]) => (
                        <div key={key}>
                            <div>{key}</div>
                            <div>{value.departure}</div>
                            <div>{value.departure_time}</div>
                            <div>{value.destination}</div>
                            <div>{value.arriving_time}</div>
                            <div>{value.booking_status}</div>
                            <div>
                                <button onClick={() => cancel(key)}>Cancel</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>No bookings found</div>
            )}
            </div>
        </div>
    )
}

export default ViewBooking
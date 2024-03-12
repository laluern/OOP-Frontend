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
            const userId = cookies.user._User__user_id;
            const response = await axios.get(`http://localhost:8000/${userId}/view_my_bookings`);
            console.log(response.data)
            setMyBooking(response.data)
        }
        catch (error) {
            alert("Failed")
            return null
        }
    }
    console.log(myBooking)
    // console.log(myBooking[Object.keys(myBooking)[0]])

    return (
        <div>
            <h1>My Booking</h1>
            <div>
                <div>
                    {JSON.stringify([Object.keys(myBooking), Object.values(myBooking)])}
                    {/* <div>{Object.keys(myBooking)[0]}</div>
                    <div>{Object.values(myBooking)[0].departure}</div>
                    <div>{Object.values(myBooking)[0].departure_time}</div>
                    <div>{Object.values(myBooking)[0].destination}</div>
                    <div>{Object.values(myBooking)[0].arriving_time}</div> */}
                </div>
            </div> 
        </div>
    )
}

export default ViewBooking
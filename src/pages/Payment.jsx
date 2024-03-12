import React from 'react'
import { FaRegCreditCard } from "react-icons/fa6";
import { PiBankLight } from "react-icons/pi";
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import BookingDetails from '../components/BookingDetails';


function Payment() {
    const navigate = useNavigate()

    const location = useLocation()

    function handleCard() {
        navigate("/payment/card", { state: { booking_id: location.state.booking_id }});
    }

    function handleMobile() {
        navigate("/payment/mobile", { state: { booking_id: location.state.booking_id }});
    }

  return (
    <div className="flex flex-col items-center">
        {/* components booking details */}
        {/* <BookingDetails booking_info={location.state.booking_data}/> */}
        {/* <PriceSummary/> */}
        <div className="flex flex-row justify-center">
            <button onClick={handleCard} className="bg-red-600 m-5 p-5">
                <div>Pay By Card</div>
                <FaRegCreditCard />
            </button>
            <button onClick={handleMobile} className="bg-red-600 m-5 p-5">
                <div>Pay By Mobile Banking</div>
                <PiBankLight />
            </button>
        </div>
        <div></div>
    </div>
  )
}

export default Payment
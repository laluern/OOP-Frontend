import React from "react";
import BookingDetails from '../components/BookingDetails'
import { useLocation } from 'react-router-dom';
import SelectSeat from "../components/SelectAddOn";


function AddOn(){

    const location = useLocation()

    const passenger_info = {}

    return(
        <div>
            <div>
                <label className="flex justify-center">Booking Details : </label>
                <div className="flex justify-center">
                    <BookingDetails booking_info={location.state.booking_data}/>
                </div>
            </div>
            <div className="flex justify-center">
                <SelectSeat/>
            </div>
        </div>
    );
}

export default AddOn;
import React from "react";
import BookingDetails from '../components/BookingDetails'
import { useLocation } from 'react-router-dom';
import SelectAddOn from "../components/SelectAddOn";


function AddOn(){

    const location = useLocation()

    return(
        <div>
            <div>
                <div className="flex justify-center">
                    <BookingDetails booking_info={location.state.booking_data}/>
                </div>
            </div>

            <div className="flex justify-center">
                <SelectAddOn booking_data={location.state.booking_data} total_passenger={location.state.total_passenger} p/>
            </div>
        </div>
    );
}

export default AddOn;
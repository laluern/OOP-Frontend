import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Sorting(){
    return(
    <select className='bg-gray-100 w-1/6 rounded-3xl m-5 ' required>
        <option value="Cheapest">Sort by : Cheapest</option>
        <option value="Fastest">Sort by : Fastest</option>
        <option value="Earliest">Sort by : Earliest</option>
    </select>
    )

    // const response = axios.get("http://localhost:8000/select_flight?sort_by=Cheapest")

    // navigate("/search/flights/results", {
    //     state: {
    //       flightResult: response.data
    //     }
    //   })
}

export default Sorting;
import React , { useEffect, useState } from "react"
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useLocation } from "react-router-dom";

function PriceSummary() {
    const location = useLocation()
    
    const booking_no = String(location.state.booking_id)
    const [detail, setDetail] = useState();
    const [cookies] = useCookies(['user']);

    const price = async () => {
        try {
            const userId = cookies.user._User__user_id
            const response = await axios.get(`http://localhost:8000/${userId}/${booking_no}/booking_details`)
            console.log(response.data)
            setDetail(response.data)
        }
        catch (error) {
            alert("Error")
        }
    }

    useEffect(() => {
        price();
    }, []);


  return (
    <div>
        <p>Summary price : {JSON.stringify(detail['price']["Summary price"])}</p>
    </div>
  )
}

export default PriceSummary
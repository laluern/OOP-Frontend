import React , {useEffect, useState} from 'react'
import axios from 'axios';
import { FaRegCreditCard } from "react-icons/fa6";
import { PiBankLight } from "react-icons/pi";
import { useLocation, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';


function Payment() {
    const navigate = useNavigate()

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
            alert("Error" + error.name)
        }
    }

    useEffect(() => {
        price();
    }, []);

    function handleCard() {
        navigate("/payment/card", { state: { booking_id: location.state.booking_id }});
    }

    function handleMobile() {
        navigate("/payment/mobile", { state: { booking_id: location.state.booking_id }});
    }

  return (
    <div className="flex flex-col items-center">
        <div>
            {/* <p>{JSON.stringify(detail)}</p> */}
            <p>Seat price : {JSON.stringify(detail['price']['seat price'])}</p>
            <p>Luggages price : {JSON.stringify(detail['price']['luggages price'])}</p>
            <p>Summary price : {JSON.stringify(detail['price']['Summary price'])}</p>
        </div>
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
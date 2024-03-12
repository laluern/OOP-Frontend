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
    <div className=" bg-neutral-50 h-screen flex flex-col items-center justify-center">
    <div className="rounded-3xl border-solid bg-slate-200 pe-5 mb-3 w-3/12 border-1 border-slate-500">
        <div className='p-10 text-center'>
            <p className="pb-3">Seat price : {detail && detail.price && JSON.stringify(detail.price['seat price'])}</p>
            <p className="pb-3">Luggages price : {detail && detail.price && JSON.stringify(detail.price['luggages price'])}</p>
            <p className="pb-3">Summary price : {detail && detail.price && JSON.stringify(detail.price['Summary price'])}</p>
        </div>
    </div>
    <div className="flex flex-row justify-center">
        <button onClick={handleCard} className="rounded-3xl border-solid bg-slate-200 pe-5 mb-3 mr-2 border-1 border-slate-500 hover:bg-red-500 hover:text-white transition-colors duration-300">
            <div>Pay By Card</div>
            <FaRegCreditCard />
        </button>
        <button onClick={handleMobile} className="rounded-3xl border-solid bg-slate-200 pe-5 mb-3 ml-2 border-1 border-slate-500 hover:bg-red-500 hover:text-white transition-colors duration-300">
            <div>Pay By Mobile Banking</div>
            <PiBankLight />
        </button>
    </div>
    <div></div>
</div>

  )
}

export default Payment
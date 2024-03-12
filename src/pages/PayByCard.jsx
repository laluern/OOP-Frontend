import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate , useLocation } from 'react-router-dom';
import PriceSummary from '../components/PriceSummary';

function PayByCard() {
  const [cookies, setCookie] = useCookies(['user']);
  const [cardHolderName, setCardHolderName] = useState();
  const [cardNo, setCardNo] = useState();
  const [expirationDate, setExpirationDate] = useState();
  const [securityCode, setSecurityCode] = useState();

  const location = useLocation()
  
  const booking_id = String(location.state.booking_id)

  useEffect(() => {
    console.log(cardHolderName, cardNo, expirationDate, securityCode
    )
  }, [cardHolderName, cardNo, expirationDate, securityCode])

  const handleCardHolderName = (e) => {
    setCardHolderName(e.target.value);
  };

  const handleCardNo = (e) => {
    setCardNo(e.target.value);
  };

  const handleExpirationDate = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleSecurityCode = (e) => {
    setSecurityCode(e.target.value);
  };

  const sendData = async () => {
    const data  = {
      card_holder_name: cardHolderName,
      card_no: cardNo,
      expiration_date: expirationDate,
      security_code: securityCode
    }
    try{
      const userId = cookies.user._User__user_id;
      const response = await axios.put(`http://localhost:8000/${userId}/payment_method/creditcard?booking_id=${booking_id}`, data)
      console.log(response.data)
      alert(response.data)
    }
    catch(error) {
      alert("Failed")
    }
  }

  return (
    <div className="bg-red-500 p-10 m-5 w-1/2">
      <div className="flex flex-col gap-4 w-1/3">
        {/* <PriceSummary/> */}
        <input value={cardHolderName} onChange={handleCardHolderName} type="text" placeholder="Card Holder Name"/>
        <input value={cardNo} onChange={handleCardNo} type="text" placeholder="Card No"/>
        <input value={expirationDate} onChange={handleExpirationDate} type="date"/>
        <input value={securityCode} onChange={handleSecurityCode} type="password" placeholder="Security Code"/>
      </div>
      <button className="bg-white m-5" onClick={sendData}>Pay</button>
    </div>
  )
}

export default PayByCard
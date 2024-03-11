import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'

function PayByCard() {
  const [cookies, setCookie] = useCookies(['user']);
  const [cardHolderName, setCardHolderName] = useState();
  const [cardNo, setCardNo] = useState();
  const [expirationDate, setExpirationDate] = useState();
  const [securityCode, setSecurityCode] = useState();

  const handleCardHolderName = (e) => {
    setCardHolderName(e.target.value);
  };

  const sendData = async () => {
    const userId = cookies.user._User__user_id;
  }

  return (
    <div className="bg-red-500 p-10 m-5 w-1/2">
      <div className="flex flex-col gap-4 w-1/3">
        <input type="text" placeholder="Card Holder Name" onChange={handleCardHolderName}/>
        <input type="text" placeholder="Card No"/>
        <input type="date"/>
        <input type="password" placeholder="Security Code"/>
      </div>
      <button className="bg-white m-5">Pay</button>
    </div>
  )
}

export default PayByCard
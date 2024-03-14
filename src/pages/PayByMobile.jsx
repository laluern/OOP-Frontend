import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate , useLocation } from 'react-router-dom';

function PayByMobile() {
  const [cookies, setCookie] = useCookies(['user']);
  const [ownerName, setOwnerName] = useState();
  const [telNo, setTelNo] = useState();
  const [accountNo, setAccountNo] = useState();
  const [password, setPassword] = useState();

  const location = useLocation()
  const navigate = useNavigate()
  
  const booking_id = String(location.state.booking_id)

  const sendData = async () => {
    const data = {
      owner_name: ownerName,
      tel_no: telNo,
      account_no: accountNo,
      password: password
    }
    try{
      const userId = cookies.user._User__user_id;
      const response = await axios.put(`http://localhost:8000/${userId}/payment_method/mobilebanking?booking_id=${booking_id}`, data)
      console.log(response.data)
      alert(response.data)
      navigate("/account")
    }
    catch(error) {
      alert("Failed")
    }
  }

  const handleOwnerNameChange = (e) => {
    setOwnerName(e.target.value);
  };

  const handlTelNoChange = (e) => {
    setTelNo(e.target.value);
  };

  const handlAccountNoChange = (e) => {
    setAccountNo(e.target.value);
  };

  const handlPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-red-500 p-8 rounded-lg shadow-lg w-80">
        <div className="flex flex-col gap-4">
          <input
            value={ownerName}
            onChange={handleOwnerNameChange}
            type="text"
            placeholder="Owner Name"
            className="border-2 border-gray-300 p-3 rounded-lg placeholder-gray-500"
          />
          <input
            value={telNo}
            onChange={handlTelNoChange}
            type="text"
            placeholder="Tel No"
            maxLength="10"
            className="border-2 border-gray-300 p-3 rounded-lg placeholder-gray-500"
          />
          <input
            value={accountNo}
            onChange={handlAccountNoChange}
            type="text"
            placeholder="Account No"
            className="border-2 border-gray-300 p-3 rounded-lg placeholder-gray-500"
          />
          <input
            value={password}
            onChange={handlPasswordChange}
            type="password"
            placeholder="Password"
            className="border-2 border-gray-300 p-3 rounded-lg placeholder-gray-500"
          />
        </div>
        <button
          onClick={sendData}
          className="bg-red-700 text-white font-bold py-3 px-6 rounded-lg mt-5 transition duration-300 ease-in-out transform hover:scale-105 w-full"
        >
          Pay
        </button>
      </div>
    </div>
  );
}

export default PayByMobile
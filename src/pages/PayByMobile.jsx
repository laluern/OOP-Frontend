// ยังไม่ได้เทสต์ค่า
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'

function PayByMobile() {
  const [cookies, setCookie] = useCookies(['user']);

  const [ownerName, setOwnerName] = useState();
  const [telNo, setTelNo] = useState();
  const [accountNo, setAccountNo] = useState();
  const [password, setPassword] = useState();

  const sendData = async () => {
    const data = {
      owner_name: ownerName,
      tel_no: telNo,
      account_no: accountNo,
      password: password
    }
    try{
      const userId = cookies.user._User__user_id;
      const response = await axios.put(`http://localhost:8000/${userId}/payment_method/mobilebanking}`, data)
      console.log(response.data)
      const responseMessageString = JSON.stringify(response.data)
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
    <div>
      <div>
        <input value={ownerName} onChange={handleOwnerNameChange} type="text" placeholder="Owner Name"/>
        <input value={telNo} onChange={handlTelNoChange} type="text" placeholder="Tel No"/>
        <input value={accountNo} onChange={handlAccountNoChange} type="text" placeholder="Account No"/>
        <input value={password} onChange={handlPasswordChange} type="password" placeholder="Password"/>
      </div>
      <button onClick={sendData}>Pay</button>
    </div>
  )
}

export default PayByMobile
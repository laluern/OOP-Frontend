import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
// import { useCookies } from 'react-cookie'

function Account() {
  const [cookies, setCookie] = useCookies(['user']);
  const [accountData, setAccountData] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }

  useEffect(() => {
    info(); 
  }, []);
  
  const info = async () => {
    const userId = cookies.user._User__user_id;
    const response = await axios.get(`http://localhost:8000/${userId}/view_account_details`);
    console.log(response.data)
    setAccountData(response.data)
  }

  return (
    <div>
        <Nav/>
        {/* <h1>Welcome {cookies.user._User__user_id}</h1> */}
        {accountData && (
          <div>
            <p>Email : {accountData[0]}</p>
            <p>User Id : {accountData[1]}</p>
            <p>Booking No : {accountData[2][0][0]}</p>
            <p>Departure : {accountData[2][0][1]}</p>
            <p>Destination : {accountData[2][0][2]}</p>
            <p>Departure Date Time: {formatDate(accountData[2][0][3])}</p>
            <p>Departure Date Time: {formatDate(accountData[2][0][4])}</p>
          </div>
        )}
    </div>
  )
}

export default Account
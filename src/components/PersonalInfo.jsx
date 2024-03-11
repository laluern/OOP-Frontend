import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'

function PersonalInfo() {
    const [cookies, setCookie] = useCookies(['user']);
    const [personalInfo, setPersonalInfo] = useState(null);

    useEffect(() => {
        info(); 
    }, []);

    const info = async () => {
        try {
            const userId = cookies.user._User__user_id;
            const response = await axios.get(`http://localhost:8000/${userId}/view_personal_info`);
            console.log(response.data)
            setPersonalInfo(response.data)
        }
        catch(error) {
            alert("Failed")
            return null
        }
        
    }

  return (
    <div>
        <h1>Personal Information</h1>
       <div>
            {personalInfo && (
                <div>
                    <p>Full Name: {personalInfo.full_name}</p>
                    <p>Email: {personalInfo.email}</p>
                    <p>Phone Number: {personalInfo.phone_number}</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default PersonalInfo
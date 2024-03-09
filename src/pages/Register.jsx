import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LuUser, LuPhone, LuHome, LuCalendarDays } from "react-icons/lu";
import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";

function Register() {
    const [fullname, setFullname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [address, setAddress] = useState();
    const [birthDate, setBirthDate] = useState();

    const navigate = useNavigate()

    useEffect(() => {
        console.log(fullname, email, password, phoneNumber, address, birthDate
        )
      }, [fullname, email, password, phoneNumber, address, birthDate])

    const sendData = async () => {
        const data = {
            full_name: fullname,
            email: email,
            password: password,
            phone_number: phoneNumber,
            address: address,
            birth_date: birthDate
        }
        try {
            const response = await axios.post("http://localhost:8000/register", data)
            console.log(response.data)
            alert("Done")
        }
        catch(error) {
            alert("Failed")
            return null
        }
        navigate("/home")
    }

    const handleFullnameChange = (e) => {
        setFullname(e.target.value);
      };
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleBirthDateChange = (e) => {
        setBirthDate(e.target.value);
    };

  return (
    <div className="flex flex-colflex justify-center items-center min-h-screen">
        <div className="bg-red-500 p-7 rounded-xl">
            <h1>Register</h1>

            <div>
                <input type="text" placeholder="Full name" value={fullname} onChange={handleFullnameChange} required/>
                <LuUser className="register-icon"/>
            </div>
            <div>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required/>
                <MdOutlineMailOutline className="register-icon"/>
            </div>
            <div>
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required/>
                <MdLockOutline className="register-icon"/>
            </div>
            <div>
                <input type="text" placeholder="Phone number" value={phoneNumber} onChange={handlePhoneNumberChange} required/>
                <LuPhone className="register-icon"/>
            </div>
            <div>
                <input type="text" placeholder="Address" value={address} onChange={handleAddressChange} required/>
                <LuHome className="register-icon"/>  
            </div>
            <div>
                <input type="date" placeholder="Birth Date" value={birthDate} onChange={handleBirthDateChange} required/>
                <LuCalendarDays className="register-icon"/>
            </div>
            <button className="bg-green-400" onClick={sendData}>Register</button>
        </div>
    </div>
  )
}

export default Register
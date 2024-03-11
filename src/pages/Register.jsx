import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LuUser, LuPhone, LuHome, LuCalendarDays } from "react-icons/lu";
import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";

function Register() {
    const [firstName, setFirstName] = useState();
    const [surname, setSurname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [address, setAddress] = useState();
    const [birthDate, setBirthDate] = useState();
    const [result, setResult] = useState(null);

    const navigate = useNavigate()

    useEffect(() => {
        console.log(firstName, surname, email, password, phoneNumber, address, birthDate
        )
      }, [firstName, surname, email, password, phoneNumber, address, birthDate])

    const sendData = async () => {
        const data = {
            full_name: firstName + " " + surname,
            email: email,
            password: password,
            phone_number: phoneNumber,
            address: address,
            birth_date: birthDate
        }
        try {
            const response = await axios.post("http://localhost:8000/register", data)
            console.log(response.data)
            setResult(response.data.status)
            const responseMessageString = JSON.stringify(response.data.message)
            alert(responseMessageString)
        }
        catch(error) {
            alert("Failed")
            return null
        }
    }

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
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

    function handleRegister() {
        navigate("/home")
    }

  return (
    <div className="flex flex-colflex justify-center items-center min-h-screen">
        <video autoPlay loop muted playsInline className="absolute right-0 bottom-0 z-[-1]">
            <source src="/src/assets/plane2.mp4" type="video/mp4"></source>
        </video>
        {
            !result ? 
            <div className="text-red-500 backdrop-blur-lg shadow-2xl w-96 rounded-3xl border-solid border-1 border-slate-50 py-8 px-10">
                
                <h1 className="text-gray-50 text-4xl text-center text-5x1 font-medium">Sign up</h1>
                <div className="mt-8 mb-3">
                    <div className="grid grid-cols-12 gap-4 rounded-3xl border-solid bg-neutral-50 pe-5 mb-3">
                        <input type="text" placeholder="First name" value={firstName} onChange={handleFirstNameChange} className="col-span-11 p-2 ps-4 bg-transparent text-slate-800" required/>
                        <LuUser className="register-icon col-span-1 align-middle h-full"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Surname" value={surname} onChange={handleSurnameChange} required/>
                        <LuUser className="register-icon"/>
                    </div>
                    <div>
                        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required/>
                        <MdOutlineMailOutline className="register-icon"/>
                    </div>
                    <div>
                        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} minLength="8" required/>
                        <MdLockOutline className="register-icon"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Phone number" value={phoneNumber} maxlength="10" onChange={handlePhoneNumberChange} required/>
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
                </div> :
                <div>
                    <button onClick={handleRegister}>home</button>
                </div>
        }
    </div>
  )
}

export default Register
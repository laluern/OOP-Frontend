import React from 'react'
import { LuUser, LuPhone, LuHome, LuCalendarDays } from "react-icons/lu";
import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";

function PassengersInfo(){
    return (
    <div>
        <div>
            <input type="text" placeholder="First name" value={fullname} onChange={handleFullnameChange} required/>
            <LuUser className="register-icon"/>
        </div>
        <div>
            <input type="text" placeholder="Surname" value={fullname} onChange={handleFullnameChange} required/>
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
    </div>
    )
}

export default PassengersInfo;
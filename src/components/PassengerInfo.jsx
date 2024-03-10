import React, { useState } from 'react'
import { LuUser, LuPhone, LuCalendarDays } from "react-icons/lu";
function PassengersInfo(){

    const [firstname, setFirstname] = useState();
    const [surname, setSurname] = useState();
    const [citizenID, setCitizenID] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [birthDate, setBirthDate] = useState();
    const [gender, setGender] = useState();

    const data = {
        full_name: firstname + " " + surname,
        citizen_id: citizenID,
        phone_number: phoneNumber,
        birth_date: birthDate,
        gender: gender
    }

    console.log(data)

    const handleFirstnameChange = (e) => {
        setFirstname(e.target.value);
    };

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    };

    const handleCitizenIDChange = (e) => {
        setCitizenID(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleBirthDateChange = (e) => {
        setBirthDate(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    return (
    <div>
        <div>
            <input type="text" placeholder="First name" value={firstname} onChange={handleFirstnameChange} required/>
            <LuUser className="register-icon"/>
        </div>
        <div>
            <input type="text" placeholder="Surname" value={surname} onChange={handleSurnameChange} required/>
            <LuUser className="register-icon"/>
        </div>
        <div>
            <input type="text" placeholder="citizen ID" value={phoneNumber} onChange={handleCitizenIDChange} required/>
            <LuPhone className="register-icon"/>
        </div>
        <div>
            <input type="text" placeholder="Phone number" value={phoneNumber} onChange={handlePhoneNumberChange} required/>
            <LuPhone className="register-icon"/>
        </div>
        <div>
            <input type="date" placeholder="Birth Date" value={birthDate} onChange={handleBirthDateChange} required/>
            <LuCalendarDays className="register-icon"/>
        </div>
        <div>
            <button type="submit" onClick={() => handleGenderChange('male')} style={{ marginRight: '10px' }}>
            Male
            </button>
            <button type="submit" onClick={() => handleGenderChange('female')}>
            Female
            </button>
      </div>
    </div>
    )
}

export default PassengersInfo;
import React, { useState } from 'react'
import { LuUser, LuPhone, LuCalendarDays } from "react-icons/lu";
function PassengersInfo(){

    const [firstname, setFirstname] = useState();
    const [surname, setSurname] = useState();
    const [citizenID, setCitizenID] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [birthDate, setBirthDate] = useState();
    const [gender, setGender] = useState('');

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

    const handleGenderChange = (selectedGender) => {
        setGender(selectedGender);
      };
    
    return (
    <div className="passengers-info">
        <div className='flex justify-center'>
            <input type="text" placeholder="First name" value={firstname} onChange={handleFirstnameChange} required/>
            <LuUser className="register-icon"/>
        </div>
        <div className='flex justify-center'>
            <input type="text" placeholder="Surname" value={surname} onChange={handleSurnameChange} required/>
            <LuUser className="register-icon"/>
        </div>
        <div className='flex justify-center'>
            <input type="text" placeholder="citizen ID" value={citizenID} onChange={handleCitizenIDChange} maxLength="13" required/>
            <LuPhone className="register-icon"/>
        </div>
        <div className='flex justify-center'>
            <input type="text" placeholder="Phone number" value={phoneNumber} onChange={handlePhoneNumberChange} maxLength="10" required/>
            <LuPhone className="register-icon"/>
        </div>
        <div className='flex justify-center'>
            <input type="date" placeholder="Birth Date" value={birthDate} onChange={handleBirthDateChange} required/>
        </div>
        <div className="gender-selection">
        <label>
          <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={() => handleGenderChange('male')} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={() => handleGenderChange('female')} />
          Female
        </label>
      </div>
    </div>
    )
}

export default PassengersInfo;
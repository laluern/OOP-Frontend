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
    <div>
        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
                <input type="text" placeholder="" value={firstname} onChange={handleFirstnameChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required/>
                <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input type="text" placeholder="" value={surname} onChange={handleSurnameChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required/>
                <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
            </div>
        </div>
        <div class="relative z-0 w-full mb-5 group">
            <input type="text" placeholder="" value={citizenID} onChange={handleCitizenIDChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required/>
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Citizen ID</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
            <input type="text" placeholder="" value={phoneNumber} onChange={handlePhoneNumberChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required/>
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group py-4">
            <input type="date" placeholder="Birth Date" value={birthDate} onChange={handleBirthDateChange} className="col-span-1 p-1 ps-4 bg-neutral-50 border-solid rounded-3xl pe-5 text-slate-800" required/>
        </div>
        <div class="relative z-0 w-full mb-5 gap-10 py-2">
            <div>
                <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={() => handleGenderChange('male')}/>
                <label for="male">Male</label>
            </div>
            <div>
                <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={() => handleGenderChange('female')}/>
                <label for="female">Female</label>
            </div>
        </div>
        </div>
    </div>
    )
}

export default PassengersInfo;
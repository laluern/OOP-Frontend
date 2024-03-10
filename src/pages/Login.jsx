import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import Register from './Register';
import '../App.css'
import axios from 'axios';
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginResult, setLoginResult] = useState(null);

  useEffect(()=> {
    console.log(email, password)
  }, [email, password])

  const navigate = useNavigate()

  const sendData = async () => {
    const data = {
      email: email,
      password: password
    }
    try{
      const response = await axios.post("http://127.0.0.1:8000/login", data)
      setLoginResult(response.data)
    }
    catch(error) {
      alert("Login failed, Please try again");
      return null
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  function handleRegister() {
    navigate("/register")
  }

  function handleLogin() {
    navigate("/home")
  }

  return (
    <div className="antialiased flex justify-center items-center min-h-screen">
      {
        !loginResult ? 
        <div className="w-96 bg-red-500 text-gray-50 rounded-xl border-2 border-solid border-gray-400 py-8 px-10 backdrop-blur-md shadow-2xl">
        
          <h1 className="text-4xl text-center">Login</h1>

          <div className="login-box">
            <input value={email} onChange={handleEmail} type="email" placeholder="Email" className="text-red-500 p-2 m-2 rounded-3xl w-full h-full border-solid" required/>
            <FaUser className="absolute right-5 top-1/2 translate-y-[-200%]"/>
          </div>

          <div className="login-box">
            <input value={password} onChange={handlePassword} type="password" placeholder="Password" className="text-red-500 p-2 m-2 rounded-3xl w-full h-full border-solid" required/>
            <FaLock className="absolute right-5 top-1/2 translate-y-[150%]"/>
          </div>

          <button className="w-full h-11 bg-white text-gray-800 border-none outline-none rounded-3xl cursor-pointer font-medium" onClick={sendData}>Login</button>

          <div className="text-center mt-4 text-sm">
            <p>Don't have an account? <a href="" className="text-blue-200 font-bold hover:underline" onClick={handleRegister}>Register</a></p>
          </div>

        </div> : <button onClick={handleLogin}>home</button>
      }
    </div>
  )
}

export default Login
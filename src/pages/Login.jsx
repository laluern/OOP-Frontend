import React, { useEffect, useState } from 'react'
import '../App.css'
import Nav from '../components/Nav';
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  useEffect(()=> {
    console.log(username, password)
  }, [username, password])

  const sendData = async () => {
    const data = {
      user_name: username,
      password: password
    }
    // ยังไม่ได้ใส่ / ข้างหลัง port
    const response = await axios.post("http://localhost:8000",data)
    console.log(response.data)
  }

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="antialiased flex justify-center items-center min-h-screen">
      {/* <video autoPlay loop muted playsInline className="login-video">
        <source src="/src/assets/login-bg.mp4" type="video/mp4"/>
      </video> */}

      <div className="w-96 bg-red-500 text-gray-50 rounded-xl border-2 border-solid border-gray-400 py-8 px-10 backdrop-blur-md shadow-2xl">
        <form action="">

          <h1 className="text-4xl text-center">Login</h1>

          <div className="login-box">
            <input type="email" placeholder="Username" className="text-red-500 p-2 m-2 rounded-3xl w-full h-full border-solid" required/>
            <FaUser className="absolute right-5 top-1/2 translate-y-[-200%]"/>
          </div>

          <div className="login-box">
            <input type="password" placeholder="Password" className="text-red-500 p-2 m-2 rounded-3xl w-full h-full border-solid" required/>
            <FaLock className="absolute right-5 top-1/2 translate-y-[150%]"/>
          </div>

          <button className="w-full h-11 bg-white text-gray-800 border-none outline-none rounded-3xl cursor-pointer font-medium">Login</button>

          <div className="text-center mt-4 text-sm">
            <p>Don't have an account? <a href="" className="text-blue-200 font-bold hover:underline">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
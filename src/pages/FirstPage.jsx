import React from 'react'
import { useNavigate } from 'react-router-dom';
import Login from './Login';

function Home() {
  const navigate = useNavigate()

  function handleLogin() {
    navigate("/login")
  }

  return (
    <div className="homepage">
      <video autoPlay loop muted playsInline className="absolute right-0 bottom-0 z-[-1]">
        <source src="/src/assets/sky.mp4" type="video/mp4" />
      </video>
        
      <div className="text-center">
        <h1 className="fly-with-us">Fly with us</h1>
        <button onClick={handleLogin} className="inline-block text-white bg-red-500 font-2xl border-solid py-3.5 px-16 rounded-3xl mt-5 hover:bg-red-700">Log in</button>
      </div>
    </div>
  )
}

export default Home
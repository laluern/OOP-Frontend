import React from 'react'
import Nav from '../components/Nav'

function Home() {
  return (
    <div>
        <Nav/>
        <img src="/src/assets/home-bg.png" className="h-auto w-auto fixed" />
    </div>
  )
}

export default Home
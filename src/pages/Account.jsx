import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
import { useCookies } from 'react-cookie'

function Account() {
  return (
    <div>
        <Nav/>
        <h1>Hi</h1>
    </div>
  )
}

export default Account
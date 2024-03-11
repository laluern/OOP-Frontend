import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
import { useCookies } from 'react-cookie'

function Account() {
  const [cookies, setCookie] = useCookies(['user']);

  return (
    <div>
      {/* response.data.user._User__user_id */}
        <Nav/>
        {/* account details */}
        <h1>Welcome {cookies.user._User__user_id}</h1>
        <h1>Hi</h1>
    </div>
  )
}

export default Account
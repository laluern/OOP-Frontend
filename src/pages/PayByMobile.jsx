import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'

function PayByMobile() {
  return (
    <div>
      <div>
        <input type="text" placeholder="Owner Name"/>
        <input type="text" placeholder="Tel No"/>
        <input type="text" placeholder="Account No"/>
        <input type="password" placeholder="Password"/>
      </div>
    </div>
  )
}

export default PayByMobile
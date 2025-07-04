import React, { Children, useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../Context/UserContext'  
import {useNavigate} from 'react-router-dom'  

import axios from 'axios'

const UserProtectWrapper = ({
    children
}) => {

    

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const {user, setUser} = useContext(UserDataContext) 


  useEffect(() =>{
    if(!token) {
      navigate('/login')
  }

  axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
      headers:{
         Authorization: `Bearer ${token}`
      }
  }).then(response => {
    if(response.status === 200) {
      setUser(response.data) 
      setIsLoading(false)
    }
        
  })
  .catch(err => {
      console.log(err)
      localStorage.removeItem('token')
      navigate('/login')
  })
}, [token])

   if(isLoading) {
    return (
        <div>Loading...</div>
    )
}

  return (
    <>{children}</>
  )
}

export default UserProtectWrapper
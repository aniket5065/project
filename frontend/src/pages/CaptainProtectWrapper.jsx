import React, { Children, useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import {useNavigate} from 'react-router-dom'  
import axios from 'axios'


const CaptainProtectWrapper = ({
    children
}) => {

    

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const {captain, setCaptain} = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)


  useEffect(() =>{



    if(!token) {
      navigate('/captainlogin')
  }
 

  axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
     headers:{
        Authorization: `Bearer ${token}`
     }
  }).then(res => {
    if(res.status === 200) {
      setCaptain(res.data.captain) 
      setIsLoading(false)
    }
      
  })
  
  .catch (err => {
      console.log(err)
      localStorage.removeItem('token')
      navigate('/captainlogin')
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

export default CaptainProtectWrapper
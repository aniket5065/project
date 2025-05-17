import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import CaptainDetail from '../components/CaptainDetail'
import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContext";
import { useEffect, useContext } from "react";


const CaptainHome = () => {

  const [ ridePopupPanel , setRidePopupPanel  ] = useState(true)
  const ridePopupPanelref = useRef(null)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const confirmRidePopupPanelref = useRef(null)

    const [ ride, setRide ] = useState(null)

  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);
  
   useEffect(() => {
        socket.emit('join', {
            userId: captain._id,
            userType: 'captain'
        })
        const updateLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {

                 
                    socket.emit('update-location-captain', {
                        userId: captain._id,
                        location: {
                            ltd: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    })
                })
            }
        }

        const locationInterval = setInterval(updateLocation, 10000)
        updateLocation()

        // return () => clearInterval(locationInterval)
    }, [])

    socket.on('new-ride', (data) => {

        setRide(data)
        setRidePopupPanel(true)

    })
     async function confirmRide() {

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, {

            rideId: ride._id,
            captainId: captain._id,


        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        setRidePopupPanel(false)
        setConfirmRidePopupPanel(true)

    }
      


  useGSAP(function(){
    if(ridePopupPanel){
     gsap.to(ridePopupPanelref.current,{
         transform:'translateY(0)'
     })
    }else{
     gsap.to(ridePopupPanelref.current,{
         transform:'translateY(100%)'
        
    })
 }
},[ridePopupPanel])


useGSAP(function(){
  if(confirmRidePopupPanel){
   gsap.to(confirmRidePopupPanelref.current,{
       transform:'translateY(0)'
   })
  }else{
   gsap.to(confirmRidePopupPanelref.current,{
       transform:'translateY(100%)'
      
  })
}
},[confirmRidePopupPanel])

  return (
    <div className='h-screen '>
    <div className='fixed p-6  top-0 flex items-center justify-between w-screen '>
           
      <img className="w-16 absolute ml-1 mt-8" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgigKv700qtv1-O4UdoSRn9AtqbiMqIYBMgGkvx2H6fL7VHtiWkeuphgUpRdYXda9OmSlnzC0rtHBNl6DGbBjesDcRuqxnC_rx5g5k3IUuKHcaf0Q2Dvcv4R8Uq_rZMMLKV2gtz30ZNnz7eYGi-aAnVMAtmeoXofU9lsy28vjIALd29yIEO8VLI0Ek1-Q4/s1024/cabmate.png" alt="" />
      <Link to='/home' className='fixed right-2  h-10 w-10 bg-gray-100 flex items-center justify-center rounded-full top-2'>
    <i className="ri-logout-box-r-line text-lg font-medium"></i>
    </Link>
    </div>

    <div className='h-3/5'>
        <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/HjXqlb-7-c1pwIVcUGUxDEG-rrtcEzsDNecbVUVXWte2tVpZ2rj6ma4S39fF8KrZniaPBjZQuJ7FskG9lMukt8Kjcjgl_YWWO5yE4Q=v1-rw-e365-w640"></img>

    </div>
    <div className='h-2/5 p-6'>
        <CaptainDetail />
  </div>
  <div ref={ridePopupPanelref}  className=" fixed z-10 bottom-0 -translate-y-full w-full  bg-white px-3 py-10 pt-12">
        <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
    </div>
    <div ref={confirmRidePopupPanelref}  className=" fixed z-10 h-screen bottom-0 -translate-y-full w-full  bg-white px-3 py-10 pt-12">
        <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
    </div>

</div>
  )
}

export default CaptainHome
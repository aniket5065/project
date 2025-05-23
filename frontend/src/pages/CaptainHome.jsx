import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import CaptainDetail from '../components/CaptainDetail'
import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContext";
import { useEffect, useContext } from "react";


const CaptainHome = () => {

  const [ridePopUpPanel , setRidePopUpPanel  ] = useState(true)
  const ridePopUpPanelref = useRef(null)
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)
  const confirmRidePopUpPanelref = useRef(null)

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

                    console.log('captain location', position.coords.latitude, position.coords.longitude)
                 
                    socket.emit('update-location-captain', {
                        userId: captain._id,
                        location: {
                            
                            lng: position.coords.longitude,
                            ltd: position.coords.latitude
                        }
                    })
                })
            }
        }

        const locationInterval = setInterval(updateLocation, 10000)
        updateLocation()

         //return () => clearInterval(locationInterval)
    }, [])

    socket.on('new-ride', (data) => {
        console.log(data)
        setRide(data)
        setRidePopUpPanel(true)

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

        setRidePopUpPanel(false)
        setConfirmRidePopUpPanel(true)

        setTimeout(() => {
        setConfirmRidePopUpPanel(false);
         setRide(null);
  }, 3000);

    }
      


  useGSAP(function(){
    if(ridePopUpPanel){
     gsap.to(ridePopUpPanelref.current,{
         transform:'translateY(0)'
     })
    }else{
     gsap.to(ridePopUpPanelref.current,{
         transform:'translateY(100%)'
        
    })
 }
},[ridePopUpPanel])


useGSAP(function(){
  if(confirmRidePopUpPanel){
   gsap.to(confirmRidePopUpPanelref.current,{
       transform:'translateY(0)',
       
   })
  }else{
   gsap.to(confirmRidePopUpPanelref.current,{
       transform:'translateY(100%)',
       
      
  })
}
},[confirmRidePopUpPanel])

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
  <div ref={ridePopUpPanelref}  className=" fixed z-10 bottom-0 -translate-y-full w-full  bg-white px-3 py-10 pt-12">
        <RidePopUp
        ride={ride}
        setRidePopUpPanel={setRidePopUpPanel} 
        setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
        confirmRide={confirmRide}/>
    </div>
    <div ref={confirmRidePopUpPanelref}  className=" fixed z-10 h-screen bottom-0 -translate-y-full w-full  bg-white px-3 py-10 pt-12">
        <ConfirmRidePopUp 
        ride={ride}
        confirmRide={confirmRide}
        setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} 
        setRidePopUpPanel={setRidePopUpPanel} />
    </div>

</div>
  )
}

export default CaptainHome
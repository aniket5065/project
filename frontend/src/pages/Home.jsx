import React, { useState, useRef, useEffect } from "react";
import { createSessionStorage } from "react-router-dom";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
import axios from "axios";
import { SocketContext } from "../context/SocketContext";
import { UserDataContext } from "../Context/UserContext";
import { use } from "react";
import { useContext } from "react";




const Home =() =>{
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const panelRef = useRef(null)
    const confirmRidePanelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const vehiclePanelRef = useRef(null)
    const vehicleFoundRef = useRef(null)
    const waitingForDriverRef = useRef(null)
    const [vehiclePanel, setVehiclePanel] = useState(false)
    const [confirmRidePanel, setConfirmRidePanel] = useState(false)
    const [VehicleFound, setVehicleFound] = useState(false)
    const [waitingForDriver, setWaitingForDriver] = useState(false)
    const [ pickupSuggestions, setPickupSuggestions ] = useState([])
    const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
    const [ activeField, setActiveField ] = useState(null)
    const [ fare, setFare ] = useState({})
    const [ vehicleType, setVehicleType ] = useState(null)
    const [ ride, setRide ] = useState(null)

    const { socket } = useContext(SocketContext)
    const { user } = useContext(UserDataContext)

    useEffect(() => {
        socket.emit('join', {userType:'user', userId:user._id})
        
    }, [])
  
    
     const handlePickupChange = async (e) => {
        setPickup(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }

            })
            setPickupSuggestions(response.data)
        } catch{

        
          
        }
    }

    const handleDestinationChange = async (e) => {
        setDestination(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setDestinationSuggestions(response.data)
        } catch {
            // handle error
        }
    }
    
    const submitHandler = ()=>{
        e.preventDefault()

    }

    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelRef.current,{
                height:'70%',
                paddingLeft:20
                
            })
            gsap.to(panelCloseRef.current,{
                opacity:1
            })
        }else{
            gsap.to(panelRef.current,{
                height:'0%',
                paddingRight:20
            })
            gsap.to(panelCloseRef.current,{
                opacity:0
            })
        }
    },[panelOpen])

    useGSAP(function(){
       if(vehiclePanel){
        gsap.to(vehiclePanelRef.current,{
            transform:'translateY(0)'
        })
       }else{
        gsap.to(vehiclePanelRef.current,{
            transform:'translateY(100%)'
           
       })
    }

    },[vehiclePanel])

    useGSAP(function(){
        if(confirmRidePanel){
         gsap.to(confirmRidePanelRef.current,{
             transform:'translateY(0)'
         })
        }else{
         gsap.to(confirmRidePanelRef.current,{
             transform:'translateY(100%)'
            
        })
     }
 
     },[confirmRidePanel])

     useGSAP(function(){
        if(VehicleFound){
         gsap.to(vehicleFoundRef.current,{
             transform:'translateY(0)'
         })
        }else{
         gsap.to(vehicleFoundRef.current,{
             transform:'translateY(100%)'
            
        })
     }
    },[VehicleFound])

    useGSAP(function(){
        if(waitingForDriver){
         gsap.to(waitingForDriverRef.current,{
             transform:'translateY(0)'
         })
        }else{
         gsap.to(waitingForDriverRef.current,{
             transform:'translateY(100%)'
            
        })
     }
    },[WaitingForDriver])

     async function findTrip() {
        setVehiclePanel(true)
        setPanelOpen(false)

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
            params: { pickup, destination },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })


        setFare(response.data)
        


    }

    async function createRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
            pickup,
            destination,
            vehicleType
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(response.data)


    }
 

    

    return (
        <div className="h-screen relative overflow-hidden">
            <img className="w-16 absolute ml-6 mt-6" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgigKv700qtv1-O4UdoSRn9AtqbiMqIYBMgGkvx2H6fL7VHtiWkeuphgUpRdYXda9OmSlnzC0rtHBNl6DGbBjesDcRuqxnC_rx5g5k3IUuKHcaf0Q2Dvcv4R8Uq_rZMMLKV2gtz30ZNnz7eYGi-aAnVMAtmeoXofU9lsy28vjIALd29yIEO8VLI0Ek1-Q4/s1024/cabmate.png" alt="" />
            <div  className="h-screen w-screen">
                {/* image for temporaryus use */}
                <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/HjXqlb-7-c1pwIVcUGUxDEG-rrtcEzsDNecbVUVXWte2tVpZ2rj6ma4S39fF8KrZniaPBjZQuJ7FskG9lMukt8Kjcjgl_YWWO5yE4Q=v1-rw-e365-w640"></img>
            </div>
            <div className=" flex flex-col justify-end h-screen absolute top-0  w-full   ">
                <div className="h-[30%] p-6 bg-white relative ">
                <h5 ref={panelCloseRef} onClick={()=>{
                    setPanelOpen(false)
                }} className="absolute opacity-0 right-5 top-5 text-2xl">
                    <i className="ri-arrow-down-s-line"></i>
                </h5>
            <h4 className="text-3xl font-semibold">Find a trip</h4>
                <form onSubmit={(e) =>{
                    submitHandler(e)
                }}>
                    <div className="line absolute h-25 w-1 top-[45%] left-10 bg-gray-800 rounded-b-full"></div>
                    <input
                    onClick={()=>{
                        setPanelOpen(true);
                        setActiveField('pickup')
                    }}
                    value={pickup}
                    onChange={handlePickupChange}
                    className="bg-[#eee] px-12 py-2 text-lg  rounded-lg w-full mt-5"
                     type="text" 
                     placeholder="Add a pickup location" 
                     />
                    <input 
                    onClick={() => {
                                setPanelOpen(true)
                                setActiveField('destination')
                            }}
                    value={destination}
                     onChange={handleDestinationChange}
                     className ="bg-[#eee]  px-12 py-2 text-lg rounded-lg w-full mt-3"
                      type="text" 
                      placeholder="Enter your destination"
                       />
                </form>
                <button
                    onClick={findTrip}
                    className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
                    Find Trip 
                </button>
                </div>
                <div ref={panelRef} className=" bg-white ">
                    <LocationSearchPanel  
                        suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                        setPanelOpen={setPanelOpen}
                        setVehiclePanel={setVehiclePanel}
                        setPickup={setPickup}
                        setDestination={setDestination}
                        activeField={activeField} />
                </div>

            </div>
             <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
                <VehiclePanel
                    selectVehicle={setVehicleType}
                    fare={fare} setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
            </div>
            <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
                <ConfirmRide
                    createRide={createRide}
                    pickup={pickup}
                    destination={destination}
                    fare={fare}
                    vehicleType={vehicleType}

                    setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
            </div>
            <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 h-auto translate-y-full bg-white px-3 py-6 pt-12'>
                <LookingForDriver
                    createRide={createRide}
                     pickup={pickup}
                     destination={destination}
                    fare={fare}
                    vehicleType={vehicleType}
                    
                    setVehicleFound={setVehicleFound} />
            </div>
            <div  ref={waitingForDriverRef} className=" fixed z-10 bottom-0 w-full translate-y-full bg-white px-3 py-6 pt-12">
                    <WaitingForDriver  setWaitingForDriver={setWaitingForDriver} />
            </div>

        </div>
    ) 
}

export default Home
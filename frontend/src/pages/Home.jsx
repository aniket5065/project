import React, { useState, useRef } from "react";
import { createSessionStorage } from "react-router-dom";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";


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
                    <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-800 rounded-b-full"></div>
                    <input
                    onClick={()=>{
                        setPanelOpen(true);
                    }}
                    value={pickup}
                    onChange={(e)=>{
                        setPickup(e.target.value)
                    }}
                    className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
                     type="text" 
                     placeholder="Add a pickup location" 
                     />
                    <input 
                    onClick={()=>{
                        setPanelOpen(true);
                    }}
                    value={destination}
                    onChange={(e)=>{
                        setDestination(e.target.value)
                    }}
                     className ="bg-[#eee]  px-12 py-2 text-lg rounded-lg w-full mt-3"
                      type="text" 
                      placeholder="Enter your destination"
                       />
                </form>
                </div>
                <div ref={panelRef} className=" bg-white ">
                    <LocationSearchPanel  setPanelOpen={setPanelOpen}  setVehiclePanel={setVehiclePanel} />
                </div>

            </div>
            <div  ref={vehiclePanelRef} className=" fixed z-10 bottom-0 w-full translate-y-full bg-white px-3 py-10 pt-12">
                    <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
            </div>
            <div  ref={confirmRidePanelRef} className=" fixed z-10 bottom-0 w-full translate-y-full bg-white px-3 py-6 pt-12">
                    <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
            </div>
            <div  ref={vehicleFoundRef} className=" fixed z-10 bottom-0 w-full translate-y-full bg-white px-3 py-6 pt-12">
                    <LookingForDriver setVehicleFound={setVehicleFound} />
            </div>
            <div  ref={waitingForDriverRef} className=" fixed z-10 bottom-0 w-full translate-y-full bg-white px-3 py-6 pt-12">
                    <WaitingForDriver  setWaitingForDriver={setWaitingForDriver} />
            </div>

        </div>
    ) 
}

export default Home
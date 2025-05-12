import React  from 'react'
import { useState, useRef } from "react";
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide';
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'


const CaptainRiding = (props) => {

  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePanelref = useRef(null)

  useGSAP(function(){
    if(finishRidePanel){
     gsap.to(finishRidePanelref.current,{
         transform:'translateY(0)'
     })
    }else{
     gsap.to(finishRidePanelref.current,{
         transform:'translateY(100%)'
        
    })
  }
  },[finishRidePanel])
  return (
    <div className='h-screen relative '>
       
    <div className='fixed p-6  top-0 flex items-center justify-between w-screen '>
           
      <img className="w-16 absolute ml-1 mt-8" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgigKv700qtv1-O4UdoSRn9AtqbiMqIYBMgGkvx2H6fL7VHtiWkeuphgUpRdYXda9OmSlnzC0rtHBNl6DGbBjesDcRuqxnC_rx5g5k3IUuKHcaf0Q2Dvcv4R8Uq_rZMMLKV2gtz30ZNnz7eYGi-aAnVMAtmeoXofU9lsy28vjIALd29yIEO8VLI0Ek1-Q4/s1024/cabmate.png" alt="" />
      <Link to='/captainhome' className='fixed right-2  h-10 w-10 bg-gray-100 flex items-center justify-center rounded-full top-2'>
    <i className="ri-logout-box-r-line text-lg font-medium"></i>
    </Link>
    </div>

    <div className='h-4/5'>
        <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/HjXqlb-7-c1pwIVcUGUxDEG-rrtcEzsDNecbVUVXWte2tVpZ2rj6ma4S39fF8KrZniaPBjZQuJ7FskG9lMukt8Kjcjgl_YWWO5yE4Q=v1-rw-e365-w640"></img>

    </div>
    <div className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 '
    onClick={()=>{
      setFinishRidePanel(true)
    }}
    >
    <h5 className="p-3 text-right w-[95%] absolute bottom-20 " onClick={()=>{
         
        }}><i className="ri-arrow-drop-up-line flex justify-center text-4xl text-gray-700"></i></h5>
        <h4 className='text-xl font-semibold '>4 Km away</h4>
        <button  className='  bg-green-600 rounded-lg text-white font-semibold p-3 px-6'>Complete Ride</button>
    </div>
    <div ref={finishRidePanelref}  className=" fixed z-10 bottom-0 -translate-y-full w-full  bg-white px-3 py-10 pt-12">
        <FinishRide setFinishRidePanel={setFinishRidePanel}  />
    </div>
  

</div>
  )}
export default CaptainRiding
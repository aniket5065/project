import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'


const ConfirmRidePopUp = (props) => {

    const [otp, setOtp] = useState('')

    const submitHandler = (e) => { 
        e.preventDefault()
    }


  return (
    <div >
    <h5 className="p-3 text-right w-[93%] absolute top-0 " onClick={()=>{
     props.setRidePopupPanel(false)
    }}><i className="ri-arrow-drop-down-line text-3xl text-gray-700"></i></h5>
    <h3 className="text-2xl font-semibold mb-3 gap-2">Confirm this ride to Start!</h3>
    <div  className='flex items-center justify-between border-2 p-3 bg-yellow-300 rounded-xl mt-4'>
        <div className='flex items-center gap-2 '>
            <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OYFiqQW86WNbAj71IxlbkY0c_O4ZPV0ddg&s" alt="" />
            <h2 className='text-lg font-medium'>Harshada Gaytonde</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 KM</h5>
    </div>


    <div className='flex gap-2 justify-between flex-col items-center '>

    <div className='w-full mt-5'>
        <div className='flex items-center gap-5 p-3 border-b-2 border-gray-400'>

        <i className="ri-map-pin-line text-lg"></i>
    
        <div>
            <h3 className='text-lg font-medium'>562-11-A</h3>
            <p className='text-sm -mt-1 text-gray-600'>gandhi stadium ambdabad</p>
        </div>
        </div>
            
                <div className='flex items-center gap-5 p-3 border-b-2  border-gray-400'>
                  <i className="ri-map-pin-user-fill text-lg"></i>
                 <div>
                     <h3 className='text-lg font-medium'>562-11-A</h3>
                       <p className='text-sm -mt-1 text-gray-600'>gandhi stadium ambdabad</p>
                 </div>
            </div>
        <div className='flex items-center gap-5 p-3 '>
        <i className="ri-currency-line"></i>
        <div>
            <h3 className='text-lg font-medium'>&#8377;193.23</h3>
            <p className='text-sm -mt-1 text-gray-600'>Cash</p>
        </div>
        </div>
        
        </div>
        
        
        <div className='mt-6 w-full'>
            <form onSubmit={() =>{
                submitHandler(e)    
            }} >
                <input value={otp} onChange={(e)=>setOtp(e.target.value)} type="text" className ="bg-[#eee]  px-6 py-4 font-mono text-lg rounded-lg w-full mt-3 mb-3"  placeholder='Enter OTP' />

            <Link to='/captainriding' className='w-full mt-1 text-lg  flex justify-center  bg-green-600 rounded-lg text-white font-semibold p-3'>Confirm</Link>

                <button onClick={()=>{
                props.setConfirmRidePopupPanel(false)
                props.setRidePopupPanel(false)

                }} className='w-full mt-1 bg-red-600 rounded-lg text-white font-semibold p-3'>Cancel Ride</button>
            </form>
        </div>

    </div>
</div>
  )
}

export default ConfirmRidePopUp
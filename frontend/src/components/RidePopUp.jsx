import React from 'react'


const RidePopUp = (props) => {
  return (
    <div >
        <h5 className="p-3 text-right w-[93%] absolute top-0 " onClick={()=>{
         props.setRidePopupPanel(false)
        }}><i className="ri-arrow-drop-down-line text-3xl text-gray-700"></i></h5>
        <h3 className="text-2xl font-semibold mb-3 gap-2">New Ride Available!</h3>
        <div  className='flex items-center justify-between p-3 bg-yellow-300 rounded-xl mt-4'>
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
            
            <div className='flex w-full mt-5 items-center justify-between'>
            <button onClick={()=>{
                props.setRidePopupPanel(false)
              
            }} className=' mt-1 bg-red-700 text-white rounded-lg font-semibold p-3 px-15'>Ignore</button>

            <button onClick={()=>{
              props.setConfirmRidePopupPanel(true)
            }} className='  bg-green-600 rounded-lg text-white font-semibold p-3 px-15'>Accept</button>

          
            </div>
        </div>
    </div>
  )
}

export default RidePopUp
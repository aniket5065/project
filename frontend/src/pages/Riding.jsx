import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen relative overflow-hidden'>
        <Link to='/home' className='fixed right-2  h-10 w-10 bg-gray-100 flex items-center justify-center rounded-full top-2'>
        <i className="ri-home-smile-line text-lg font-medium"></i>
        </Link>

        <div className='h-1/2'>
            <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/HjXqlb-7-c1pwIVcUGUxDEG-rrtcEzsDNecbVUVXWte2tVpZ2rj6ma4S39fF8KrZniaPBjZQuJ7FskG9lMukt8Kjcjgl_YWWO5yE4Q=v1-rw-e365-w640"></img>

        </div>
        <div className='h1/2 p-4'>
        <div className='flex items-center justify-between'>
        <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        <div className='text-right p-3'>
      <h2 className='text-lg font-medium'>Aniket</h2>
      <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH20 AM 0001</h4>
      <p className='text-sm text-gray-600'> Maruti Suzuki Alto</p>
        </div>
        </div>

        <div className='flex  justify-between flex-col items-center '>
    
        <div className='w-full mt-5'>
    
            
                <div className='flex items-center gap-3 p-3 border-b-2  border-gray-400'>
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
    </div>
            <button className='w-full mt-2 bg-green-600 rounded-lg text-white font-semibold p-2 '>Make a Payment</button>
        </div>
    </div>

    
  )
}

export default Riding
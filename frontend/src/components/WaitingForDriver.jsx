import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
    <h5 className="p-3 text-right w-[93%] absolute top-0 " onClick={()=>{
         props.setWaitingForDriver(false)
    }}><i className="ri-arrow-drop-down-line text-3xl text-gray-700"></i></h5>
    <div className='flex items-center justify-between'>
    <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
    <div className='text-right p-5'>
      <h2 className='text-lg font-medium'>Aniket</h2>
      <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH20 AM 0001</h4>
      <p className='text-sm text-gray-600'> Maruti Suzuki Alto</p>
    </div>
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
        
        
    </div>
</div>
  )
}

export default WaitingForDriver
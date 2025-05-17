import React, {useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'



const CaptainDetail = () => {

  const { captain } = useContext(CaptainDataContext)

  if (!captain) {
    return <p>Loading captain info...</p>;
  }
  return (
    <div>
        <div className='flex  items-center justify-between'>
          <div className='flex items-center gap-2'>
              <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OYFiqQW86WNbAj71IxlbkY0c_O4ZPV0ddg&s" alt="" />
              <h4 className='text-lg font-medium capitalize'>{ captain.fullname.firstname + " " + captain.fullname.lastname }</h4>
          </div>
          <div >
              <h4 className='text-xl font-semibold'>&#8377;295.2</h4>
              <p className='text-sm  text-gray-600'>Earned</p>
          </div>
        </div>
        <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
          <div className='text-center'>
          <i className=" text-3xl mb-2  font-thin ri-time-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
          <i className=" text-3xl mb-2  font-thin ri-speed-up-fill"></i>
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
          <i className=" text-3xl mb-2  font-thin ri-chat-4-line"></i>
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetail
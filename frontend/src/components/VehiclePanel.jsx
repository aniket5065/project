import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div><h5 className="p-3 text-right w-[93%] absolute top-0 " onClick={()=>{
        props.setVehiclePanel(false)
        }}><i className="ri-arrow-drop-down-line text-3xl text-gray-700"></i></h5>
        <h3 className="text-2xl mt-0 font-semibold  mb-2">Choose a Vehicle</h3>
            <div onClick={()=>{
        props.setConfirmRidePanel(true)
        props.selectVehicle('car') 
        }} className="flex border-white  active:border-black border-2 mb-2 rounded-xl w-full p-3 items-center justify-between ">
               <img className="h-12" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
               <div className="ml-1 w-1/2">
                <h4 className="font-medium text-base">CabeGo <span  ><i className="ri-user-fill"></i>4</span></h4>
                <h5 className="font-medium text-sm" >2 Mins away</h5>
                <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
               </div>
               <h2 className="text-lg font-semibold">&#8377;{props.fare.car}</h2>
            </div>
            <div onClick={()=>{
        props.setConfirmRidePanel(true)
        props.selectVehicle('moto') 
        }} className="flex  border-white  active:border-black mb-2  border-2 rounded-xl w-full p-3 items-center justify-between ">
               <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
               <div className="ml-5 w-1/2">
                <h4 className="font-medium text-base">Moto <span  ><i className="ri-user-fill"></i>1</span></h4>
                <h5 className="font-medium text-sm" >3 Mins away</h5>
                <p className="font-normal text-xs text-gray-600">Affordable motorcycle rides</p>
               </div>
               <h2 className="text-lg font-semibold">&#8377;{props.fare.moto}</h2>
            </div>
            <div onClick={()=>{
        props.setConfirmRidePanel(true)
        props.selectVehicle('auto')
        }} className="flex  border-white  active:border-black mb-2 border-2 rounded-xl w-full p-3 items-center justify-between ">
               <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
               <div className="ml-2 w-1/2">
                <h4 className="font-medium text-base">Auto <span  ><i className="ri-user-fill"></i>3</span></h4>
                <h5 className="font-medium text-sm" >9 Mins away</h5>
                <p className="font-normal text-xs text-gray-600">Affordable auto rides</p>
               </div>
               <h2 className="text-lg font-semibold">&#8377;{props.fare.auto}</h2>
            </div></div>
  )
}

export default VehiclePanel
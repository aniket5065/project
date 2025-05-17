import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { CaptainDataContext } from "../context/CaptainContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const CaptainSignup = () =>{

    const navigate = useNavigate()
    
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [firstname, setFirstName] = useState('')
        const [lastname, setLastName] = useState('')
        


        const [vehicleColor, setVehicleColor] = useState('')
        const [vehiclePlate, setVehiclePlate] = useState('')
        const [vehicleCapacity, setVehicleCapacity] = useState('')
        const [vehicleType, setVehicleType] = useState('')


        const {captain, setCaptain} = React.useContext(CaptainDataContext)
        

    
        const submithandler = async(e)=>{
            e.preventDefault()
            const captainData = {
                fullname:{
                    firstname:firstname,
                    lastname:lastname
                },
                email: email,
                password: password,
                vehicle:{
                    color:vehicleColor,
                    plate:vehiclePlate,
                    capacity:Number(vehicleCapacity),
                    vehicleType:vehicleType
                }
            }
            try {
                const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
                if (response.status === 201) {
                    const data = response.data
                    setCaptain(data.captain)
                    localStorage.setItem('token', data.token)
                    navigate('/captainhome')
                }
                setEmail('')
                setFirstName('')
                setLastName('')
                setPassword('')
                setVehicleColor('')
                setVehiclePlate('')
                setVehicleCapacity('')
                setVehicleType('')
            } catch (error) {
                console.error("Error response:", error.response.data);
            }
        }
    return(
       <div className=" py-5 px-5 p-7 h-screen flex flex-col justify-between">
                 <div>
                 <img  className='w-16 mb-5 ' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgigKv700qtv1-O4UdoSRn9AtqbiMqIYBMgGkvx2H6fL7VHtiWkeuphgUpRdYXda9OmSlnzC0rtHBNl6DGbBjesDcRuqxnC_rx5g5k3IUuKHcaf0Q2Dvcv4R8Uq_rZMMLKV2gtz30ZNnz7eYGi-aAnVMAtmeoXofU9lsy28vjIALd29yIEO8VLI0Ek1-Q4/s1024/cabmate.png" alt="" />
                 <form onSubmit={(e)=>{
                     submithandler(e)
                 }} >
     
                 <h3 className="text-lg font-medium mb-2">What's your name</h3>
                 <div className="flex gap-4 mb-6">
                 <input 
                      required 
                      className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder: text-base"
                      type="text" 
                      placeholder="Enter Firstname" 
                      value={firstname}
                      onChange={(e)=>{
                         setFirstName(e.target.value)
                      }}
                      />
                      <input 
                      required 
                      className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder: text-base"
                      type="text" 
                      placeholder="Enter Lastname" 
                      value={lastname}
                      onChange={(e)=>{
                         setLastName(e.target.value)
                      }}
                      />
                 </div>
     
                      <h3 className="text-lg font-medium mb-2">What's your email</h3>
                      <input 
                      required 
                      className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder: text-base"
                      type="email" 
                      placeholder="email@example.com" 
                      value={email}
                      onChange={(e) =>{
                      setEmail(e.target.value)
                     }}
                      />
     
                      <h3 className="text-lg font-medium">Enter Password</h3>
     
                      <input 
                      required 
                      className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder: text-base"
                      type="password" 
                      placeholder="Enter password" 
                      value={password}
                      onChange={(e) =>{
                      setPassword(e.target.value)
                      }}
                      />

                    <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>
                    <div className="flex gap-4 mb-6">
                        <input 
                            required 
                            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                            type="text" 
                            placeholder="Vehicle Color" 
                            value={vehicleColor}
                            onChange={(e) => setVehicleColor(e.target.value)}
                        />
                        <input 
                            required 
                            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                            type="text" 
                            placeholder="Vehicle Plate" 
                            value={vehiclePlate}
                            onChange={(e) => setVehiclePlate(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-4 mb-6">
                        <input 
                            required 
                            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                            type="number" 
                            placeholder="Vehicle Capacity" 
                            value={vehicleCapacity}
                            onChange={(e) => setVehicleCapacity(e.target.value)}
                        />
                        <select 
                            required 
                            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg"
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value)}
                        >
                            <option value="">Select Type</option>
                            <option value="car">Car</option>
                            <option value="auto">Auto</option>
                            <option value="moto">Moto</option>
                        </select>
                    </div>
     
                 <button
                 className="bg-[#111] text-white font-semibold  mb- rounded px-4 py-2  w-full text-lg placeholder:text-base"
                 >Create Account</button>
                 </form>
                 <p className="text-center">Already have an account? <Link to="/captainlogin"
                     className="text-blue-600"
                     >Login here</Link></p>
                 
                 </div>
                 
             </div>
    )
}

export default CaptainSignup
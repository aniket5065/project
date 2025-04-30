import React, { useState, useContext } from "react"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../Context/UserContext'

const UserSignup = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [userData, setUserData] = useState({})


    const navigate = useNavigate()

    const {user, setUser} = useContext(UserDataContext)

        

    const submithandler = async(e)=>{
        e.preventDefault()
        const newUser = {
            fullname:{
                firstname:firstname,
                lastname:lastname
            },
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
        if(response.status === 201){
            const data = response.data

            setUser(data.user)
            localStorage.setItem('token',data.token)
            navigate('/login')
        }

        
        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')
    }
    return(
        
        <div className="p-7 h-screen flex flex-col justify-between">
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

                 <h3 className="text-lg font-medium mb-2">What's your name</h3>
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
                 className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder: text-base"
                 type="password" 
                 placeholder="Enter password" 
                 value={password}
                 onChange={(e) =>{
                 setPassword(e.target.value)
                 }}
                 />

            <button
            className="bg-[#111] text-white font-semibold  mb- rounded px-4 py-2  w-full text-lg placeholder: text-base"
            >Create Account</button>
            </form>
            <p className="text-center">Already have an account? <Link to={"/login"}
                className="text-blue-600"
                >Login here</Link></p>
            
            </div>
            <div>
             <p className="text-[10px] leading-tight">
                This site is protected by reCAPTCHA and the <span className="underline">Google Privacy 
                    Policy</span> and <span>Terms of Service apply</span>.
             </p>
            </div>
        </div>
        
    )
}

export default UserSignup 
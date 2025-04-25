import React, { useState } from "react"
import { Link } from 'react-router-dom'

const UserLogin = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})


    const submithandler = (e)=>{
        e.preventDefault();
        setUserData({
            email: email,
            password: password
        })
        console.log(userData)
        setEmail('')
        setPassword('')
    }

    return(
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
            <img  className='w-16 mb-5 ' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgigKv700qtv1-O4UdoSRn9AtqbiMqIYBMgGkvx2H6fL7VHtiWkeuphgUpRdYXda9OmSlnzC0rtHBNl6DGbBjesDcRuqxnC_rx5g5k3IUuKHcaf0Q2Dvcv4R8Uq_rZMMLKV2gtz30ZNnz7eYGi-aAnVMAtmeoXofU9lsy28vjIALd29yIEO8VLI0Ek1-Q4/s1024/cabmate.png" alt="" />
            <form onSubmit={(e)=>{
                submithandler(e)
            }} >
                 <h3 className="text-lg font-medium mb-2">What's your email</h3>
                 <input 
                 value={email}
                 onChange={(e) =>{
                    setEmail(e.target.value)
                 }}
                 required 
                 className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder: text-base"
                 type="email" 
                 placeholder="email@example.com" 
                 />

                 <h3 className="text-lg font-medium">Enter Password</h3>

                 <input 
                 value={password}
                 onChange={(e) =>{
                    setPassword(e.target.value)
                 }}
                 required 
                 className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder: text-base"
                 type="password" 
                 placeholder="Enter password" 
                 />

            <button
            className="bg-[#111] text-white font-semibold  mb- rounded px-4 py-2  w-full text-lg placeholder: text-base"
            >Login</button>
            </form>
            <p className="text-center">New here? <Link to={"/signup"}
                className="text-blue-600"
                >Create new Account</Link></p>
            
            </div>
            <div>
               <Link 
               to="/captainlogin"
               className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder: text-base">
                Sign in a Captain
               </Link>
            </div>
        </div>
    )
}

export default UserLogin
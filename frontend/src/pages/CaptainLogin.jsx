import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { CaptainDataContext } from "../context/CaptainContext"

const Captainlogin = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

      if (response.status === 200) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captainhome')
      }

      setEmail('')
      setPassword('')
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
      } else {
        console.error("Error:", error.message);
      }
    }
  }

    return(
        <div className="p-7 h-screen flex flex-col justify-between">
        <div>
        <img  className='w-16 mb-2 ' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgigKv700qtv1-O4UdoSRn9AtqbiMqIYBMgGkvx2H6fL7VHtiWkeuphgUpRdYXda9OmSlnzC0rtHBNl6DGbBjesDcRuqxnC_rx5g5k3IUuKHcaf0Q2Dvcv4R8Uq_rZMMLKV2gtz30ZNnz7eYGi-aAnVMAtmeoXofU9lsy28vjIALd29yIEO8VLI0Ek1-Q4/s1024/cabmate.png" alt="" />
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} >
             <h3 className="text-lg font-medium mb-2">What's your email</h3>
             <input 
             value={email}
             onChange={(e) =>{
                setEmail(e.target.value)
             }}
             required 
             className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
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
             className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
             type="password" 
             placeholder="Enter password" 
             />

        <button
        className="bg-[#111] text-white font-semibold  mb- rounded px-4 py-2  w-full text-lg placeholder:text-base"
        >Login</button>
        </form>
        <p className="text-center">Join as fleet? <Link to="/captainsignup"
            className="text-blue-600"
            >Register as Captain</Link></p>
        
        </div>
        <div>
           <Link 
           to="/login"
           className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Sign in a User
           </Link>
        </div>
    </div>
)
}

    


export default Captainlogin
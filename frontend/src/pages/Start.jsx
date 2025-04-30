import React from "react"
import { Link } from 'react-router-dom'

const Start = () =>{
    return(
        <div>
            <div className="bg-cover bg-centre bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-5  flex justify-between flex-col w-full ">
                <img  className='w-16 ml-8' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgigKv700qtv1-O4UdoSRn9AtqbiMqIYBMgGkvx2H6fL7VHtiWkeuphgUpRdYXda9OmSlnzC0rtHBNl6DGbBjesDcRuqxnC_rx5g5k3IUuKHcaf0Q2Dvcv4R8Uq_rZMMLKV2gtz30ZNnz7eYGi-aAnVMAtmeoXofU9lsy28vjIALd29yIEO8VLI0Ek1-Q4/s1024/cabmate.png" alt="" />
                <div className="bg-white pb-7 py-4 px-4" >
                    <h2 className="text-2xl font-bold">Get Started With Cab-Mate</h2>
                    <Link to='/login' className="flex w-full items-center justify-center bg-black text-white py-3 rounded-lg mt-5" >Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Start
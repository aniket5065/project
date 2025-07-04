import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from './pages/Start'
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Home from "./pages/Home";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";
import 'remixicon/fonts/remixicon.css'


const App = () =>{
  return (
    <div>
      <Routes>
        <Route path='/' element ={<Start />} />
        <Route path='/login' element ={<UserLogin />} />
        <Route path='/signup' element ={<UserSignup />} />
        <Route path='/riding' element ={<Riding />} />
        <Route path='/captainriding' element ={<CaptainRiding />} />
        <Route path='/captainlogin' element ={<CaptainLogin />} />
        <Route path='/captainsignup' element ={<CaptainSignup />} />
        <Route path='/home' element ={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        } />

     < Route path="/users/logout" element={<UserProtectWrapper>
      <UserLogout />
     </UserProtectWrapper>}/>

     <Route path="/captainhome" element={
      
      <CaptainProtectWrapper>
        <CaptainHome />
      </CaptainProtectWrapper>
     } />
      
     


        
      </Routes>
    </div>
  )
}

export default App
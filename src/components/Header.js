import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{
  const[btn,setBtn] = useState('login')
  const onlineStatus = useOnlineStatus();
  return(
    <div className="flex justify-between bg-pink-100 shadow-lg my-3">
      <div className='w-36'>
        <img className='logo' src={LOGO_URL}  alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4"> 
          <li className="px-4">
            Online Status:{onlineStatus ?  "Red" : "Green"}
          </li>
          <li className="px-4">
            <Link>Home</Link>
          </li>  
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="contact">Contact</Link>
          </li>
          
          <li className="px-4">Cart</li>
          <button className="login" onClick={()=>{btn === 'login' ? setBtn('logout') : setBtn('login')}}>{btn}</button>
        </ul>
         
      </div>
      
    </div>
  )
}
export default Header;
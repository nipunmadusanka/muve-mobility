import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './topnav.css';

import {AiOutlineClose, AiOutlineclose,AiOutlineMenu} from 'react-icons/ai'
import { HashLink } from 'react-router-hash-link';

function TopNavbar() {
  const [nav,setNav] =useState(false)

  const handleNav=()=>{
       setNav(!nav);
  }
 
  return (
    <div className='text-white bg-[#020436] flex justify-between items-center h-24 mx-auto md:px-12 px-8'>
    <h1 style={{ fontFamily: 'Novecento-Bold, sans-serif' }} className='w-full text-xl sm:text-3xl sm:tracking-[5px] text-[#ffffff]'>muve mobility</h1>
    <ul className='hidden md:flex '>
    <li className='p-4 text-white text-lg hover:text-[#FF6B00] transition duration-500 ease-out hover:ease-in cursor-pointer'><Link to={"/"} onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
      <li className='p-4 hover:text-[#FF6B00] transition duration-500 ease-out hover:ease-in cursor-pointer'><HashLink smooth to="#services">Services</HashLink></li>
      <li className='p-4 hover:text-[#FF6B00] transition duration-500 ease-out hover:ease-in cursor-pointer'><Link to={'portfolio'} onClick={() => window.scrollTo(0, 0)}>Portfolio</Link></li>
      <li className='p-4 hover:text-[#FF6B00] transition duration-500 ease-out hover:ease-in cursor-pointer'><Link to={"about"} onClick={() => window.scrollTo(0, 0)}>About</Link></li>
      <li className='p-4 font-semibold whitespace-nowrap'><button className='rounded-md border bg-[#FF6B00] border-[#b5b4ff] hover:bg-[#ffe35a] hover:text-gray-900 p-2 mt-[-14px] transition duration-500 ease-out hover:ease-in'>Contact Us</button></li>
    </ul>
    <div onClick={handleNav} className='block md:hidden'>
      { !nav  ? <AiOutlineMenu size={20}/>: <AiOutlineClose size={20}/> }
    </div>
    <div className= {!nav ? 'fixed top-0 h-full w-[60%] left-[-100%] ease-in-out duration-700'  : 'fixed left-0 top-0 w-[60%] h-full border-r border-r-[#ffdf3c] backdrop-blur-xl bg-gradient-to-l from-[#00000030] to-[#00000030] ease-in-out duration-700 z-40'}>
    <ul className='pt-20' >
    <li className='p-4 text-white text-lg hover:text-[#FF6B00] transition duration-500 ease-out hover:ease-in cursor-pointer'>Home</li>
    <li className='p-4 hover:text-[#FF6B00] transition duration-500 ease-out hover:ease-in cursor-pointer'>Services</li>
      <li className='p-4 hover:text-[#FF6B00] transition duration-500 ease-out hover:ease-in cursor-pointer'>Portfolio</li>
      <li className='p-4 hover:text-[#FF6B00] transition duration-500 ease-out hover:ease-in cursor-pointer'><Link to={"about"}>About</Link></li>
      <li className='p-4 font-semibold whitespace-nowrap'><button className='rounded-md border bg-[#FF6B00] border-[#b5b4ff] hover:bg-[#ffe35a] hover:text-gray-900 p-2 mt-[-14px] transition duration-500 ease-out hover:ease-in'>Contact Us</button></li>
    </ul>
    </div>
    </div>
  );
}

export default TopNavbar;

import React from 'react';
import { CiSearch } from 'react-icons/ci'
import { Button } from "@/components/ui/button"
import { FaBell } from "react-icons/fa"


const Header = () => {
  return (
    <container className="flex justify-between items-center p-2" >
        <div className="">
        <h2 className="font-bold text-sm sm:text-xl">
       <span >Alex</span><span className="text-blue-900 ">Williamson</span>
       </h2>
        </div>
        <div className="hidden sm:block">
            searchbar
        </div>
        <div className="hidden sm:block">
        <Button>Click me</Button>
        </div> 
        <div className='flex items-center relative w-[100%] mx-2'>
        <div className='mr-0'>
        <Button className="bg-white rounded-[100%] active:bg-white cursor-pointer">
        <FaBell 
        className='text-black'
        />
        </Button>
        </div>
        <div className='flex'>
        <img 
        src='../public/assets/profile-pic.jpg'
        alt='profile-picture'
        className='rounded-full object-cover w-10 h-10 cursor-pointer'
        /> 
        <div className='ml-1 text-left cursor-pointer'>
        <p className='text-blue-900 font-semibold text-[12px]'>Alex Williamson</p>      
        <p className=' text-[10px] font-light'>alexwilliamson@gmail.com</p>  
        </div>     
        </div>
        </div>
    </container>
  )
}

export default Header
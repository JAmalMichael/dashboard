import React from 'react';
import { CiSearch } from 'react-icons/ci'
import { Button } from "@/components/ui/button"


const Header = () => {
  return (
    <container className="flex justify-between items-center p-2" >
        <div className="">
        <h2 className="font-bold text-sm sm:text-xl">
       <span >JAmal</span><span className="text-[#4d6dff] ">Michael</span>
       </h2>
        </div>
        <div>
            searchbar
        </div>
        <div className="hidden sm:block">
        <Button>Click me</Button>
        </div> 
        <div className="hidden sm:block">
        alarm icon/notification
        </div>
        <div>
        profile
        </div>
    </container>
  )
}

export default Header
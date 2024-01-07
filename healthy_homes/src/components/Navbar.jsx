import { Menu,X } from "lucide-react"
import { useState } from "react"
export default function Navbar() {
  const[isOpen,setIsOpen]=useState(false);
  const toggleNavbar=()=>{
    setIsOpen(!isOpen);
  }
  return (
    <div className="pl-3 pr-3" style={{backgroundImage:"url('public/3_1.png')",}}>
      <div className='md:h-20 md:w-auto flex flex-col md:flex-row items-center relative z-20 flex-wrap'>
        <a href="#home"><img className='h-8 mt-4 md:h-12 md:pl-20' src="\logo.png" alt="Logo" /></a>

        <div className="hidden ml-auto md:flex md:flex-row items-center space-y-2 md:space-y-0 md:space-x-10 pr-10">
          <a href="" className="py-2 px-2 text-black text-base font-semibold">ABOUT</a>
          <a href="" className="py-2 px-2 text-black text-base font-semibold">SERVICE</a>
          <a href="" className="py-2 px-2 text-black text-base font-semibold">TEAM</a>
          <a href="" className="py-2 px-2 text-black text-base font-semibold">CONTACT</a>
        </div>
        <div className="md:hidden ml-auto -mt-7">
          <button onClick={toggleNavbar}>{isOpen?<X/>:<Menu/>}</button>
        </div>
      </div>
      {isOpen && (
        <div className="flex basis-full flex-col items-center">
          <a href="" className="py-2 px-2 text-black text-base font-semibold">ABOUT</a>
          <a href="" className="py-2 px-2 text-black text-base font-semibold">SERVICE</a>
          <a href="" className="py-2 px-2 text-black text-base font-semibold">TEAM</a>
          <a href="" className="py-2 px-2 text-black text-base font-semibold">CONTACT</a>
        </div>
      )}
    </div>
  )
  
}


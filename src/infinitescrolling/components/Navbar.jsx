import React from 'react'
import {FaLinkedin} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='w-full flex items-center md:px-24 px-2 py-2 fixed bg-white border-2 top-0 left-0 right-0 z-[31]'>
        <FaLinkedin className='text-blue-500 text-[2.5rem]'/>
    </div>
  )
}
export default Navbar
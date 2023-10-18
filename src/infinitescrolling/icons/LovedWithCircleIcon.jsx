import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

const LovedWithCircleIcon = () => {
    return (
        <div className='h-[18px] w-[18px] flex items-center justify-center rounded-full bg-red-600 absolute left-3'>
            <AiFillHeart className='text-[14px] text-red-100 border-black ' />
        </div>
    )
}

export default LovedWithCircleIcon
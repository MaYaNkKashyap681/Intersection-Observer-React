import React from 'react'
import {AiTwotoneLike} from 'react-icons/ai'

const LikeIconsWithCircle = () => {
  return (
    <div className='h-[18px] w-[18px] flex items-center justify-center rounded-full bg-blue-600'> 
        <AiTwotoneLike className='text-[14px] text-blue-100 border-black '/>
    </div>
  )
}

export default LikeIconsWithCircle
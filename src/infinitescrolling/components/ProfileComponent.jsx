import React from 'react'
import { BsFillBookmarkFill } from 'react-icons/bs'

const NameAndBio = () => {
  return (
    <div className='text-center'>
      <h4 className='font-semibold text-lg'>Mayank Kashyap</h4>
      <p className='mt-1 text-[13px] text-gray-400 px-3'>Full Stack Developer 🚀 | @Software Developer Intern at Wised | Ex-Intern at @Xercodee | DSA Enthusiast ❤️ | Open Source🌍 | React.js Enthusiast⚛️ | Mobile Dev 📱 | LeetCode 400+🧠</p>
    </div>
  )
}

const Analytics = () => {
  return (
    <div className='py-2 w-[90%] mx-auto'>
      <h4 className='font-semibold text-[14px]'>Analytics & tools</h4>
      <p className='text-gray-400 text-sm'>39 post impressions</p>
    </div>
  )
}

const ProfileComponent = () => {
  return (
    <div className='w-[40%]'>
      <div className='w-full bg-white rounded-lg overflow-hidden relative'>
        <img src="https://media.licdn.com/dms/image/D4D16AQEs96oXUB7ywg/profile-displaybackgroundimage-shrink_350_1400/0/1680812185379?e=1702512000&v=beta&t=KgfF1lFH5jcmLE2A5cGCFMZAuoX-GkqWPbR6ihbmy-8" className='' />
        <div className='w-[5rem] h-[5rem] rounded-full overflow-hidden absolute left-[50%] -translate-x-1/2 top-[6%] border-[3px] border-white'>
          <img src="https://media.licdn.com/dms/image/D4D03AQF8d6-temebZA/profile-displayphoto-shrink_400_400/0/1676097833173?e=1702512000&v=beta&t=C81gln6f9jMv_liWLrQOkAzdlecRpcEZZyo3zdP3tns" />
        </div>
        <div className='mt-[4rem] flex flex-col'>
          <NameAndBio />
          <div className='h-[0.3px] mt-2 bg-gray-200 w-full'></div>
          <Analytics />
          <div className='h-[0.3px] bg-gray-200 w-full'></div>
          <div className='p-3 flex items-center gap-2'>
            <BsFillBookmarkFill className='text-gray-500 text-md' />
            <p className=' text-sm font-semibold'>My Items</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileComponent
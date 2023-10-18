import React from 'react'
import Posts from './components/Posts'
import Navbar from './components/Navbar'
import ProfileComponent from './components/ProfileComponent'

const App = () => {


  return (
    <>
      <Navbar />

      <div className='flex items-start w-[80%] mx-auto'>
        <div className='w-[75%] flex py-4 mt-[4rem] gap-6'>
          <ProfileComponent />
          <Posts />
        </div>
        <div className=''>
        </div>
      </div>
    </>
  )
}

export default App
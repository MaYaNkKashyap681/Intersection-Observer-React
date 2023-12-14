import React from 'react'
import PollWidget from './PollWidget'

const App = () => {
    return (
        <div className='h-screen w-screen bg-white'>
            <div className='w-full h-full flex items-center justify-center'>
                <PollWidget />
            </div>
        </div>
    )
}

export default App
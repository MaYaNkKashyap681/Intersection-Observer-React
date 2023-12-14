import React from 'react'
import PdfWriter from './PdfWriter'

const App = () => {
    return (
        <div className='h-full w-full flex'>
            <div className='w-[30%]'>

            </div>
            <div className='w-[70%] relative'>
                <PdfWriter writing={true} />
                <div className='flex flex-col'>
                    {
                        new Array(20).fill(0).map((item, index) => (
                            <div className='h-screen w-full bg-green-100' key={index}>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default App
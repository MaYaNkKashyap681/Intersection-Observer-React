import React from 'react'

const IconAndText = ({ children, text }) => {
    return (
        <div className='flex items-center gap-2 cursor-pointer'>
            {children} <span>{text}</span>
        </div>
    )
}

export default IconAndText
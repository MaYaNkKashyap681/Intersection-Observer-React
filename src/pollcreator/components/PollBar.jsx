import React from 'react';

const PollBar = ({votes, widthPercentage }) => {
    const barStyle = {
        width: `${widthPercentage}%`,
        height: '100%',
        borderRadius: '0.25rem', // Adjust the border radius as needed
    };

    return (
        <div className='flex items-center gap-1'>
            <div className='w-[90%] h-[2rem] rounded-md border-[2px] border-blue-800 p-[1px] flex items-center'>
                <div style={barStyle} className='bg-blue-500 flex items-center justify-center text-white'>{votes}</div>
            </div>
            <h2 className='flex text-sm'>
                {widthPercentage}%
            </h2>
        </div>
    );
};

export default PollBar;

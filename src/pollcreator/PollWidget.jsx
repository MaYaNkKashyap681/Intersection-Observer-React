import React from 'react';
import PollBar from './components/PollBar';

const PollWidget = () => {
    const totalVotes = 20;

    const votesPerBar = [
        {
            votes: 2,
        },
        {
            votes: 6,
        },
        {
            votes: 9,
        },
        {
            votes: 3,
        },
    ];

    const calcPercentage = (votes) => {
        return (votes * 100) / totalVotes;
    };

    return (
        <div className='border-[2px] border-blue-200 rounded-md shadow-md w-[50%] min-h-[40%] p-4'>
            <h5 className='font-bold text-lg'>What is your Opinion?</h5>

            <div className='flex flex-col gap-4 mt-[2rem]'>
                {votesPerBar.map((item, index) => (
                    <PollBar
                        key={index}
                        {...item}
                        widthPercentage={calcPercentage(item.votes)}
                    />
                ))}
            </div>

            <div className='mt-[2rem] text-sm'>
                Total Votes: <span className='font-bold text-xs'>{totalVotes}</span>
            </div>
        </div>
    );
};

export default PollWidget;

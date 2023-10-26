import React from 'react';

const KeySuggestion = ({ children, text }) => {
    return (
        <div className='relative group'>
            <div className='absolute -top-8 hidden group-hover:flex'>
                <p className='bg-blue-600 whitespace-nowrap px-4 py-1 inline-flex rounded-lg text-sm font-semibold text-white'>{text}</p>
            </div>
            {children}
        </div>
    );
};

export default KeySuggestion;

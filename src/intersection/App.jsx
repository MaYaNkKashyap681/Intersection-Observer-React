import React, { useEffect, useRef } from 'react';
import useColorToggle from './useColorToggle';

const App = () => {
    const [blocks] = useColorToggle({
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Threshold set to 0.5 for 50% visibility
    });
    
    return (
        <div>
            <div className='h-screen'></div>
            <div className='w-[50%] h-screen bg-red-400' ref={blocks}></div>
            <div className='h-screen'></div>
        </div>
    );
};

export default App;

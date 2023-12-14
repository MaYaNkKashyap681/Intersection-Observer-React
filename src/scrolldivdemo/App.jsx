import React, { useEffect, useRef } from 'react';

const App = () => {
    const boxRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (boxRef.current) {
                const scrollY = boxRef.current.scrollTop;
                console.log('Scrolling Y:', scrollY);
            }
        };

        if (boxRef.current) {
            // Attach the scroll event listener to the current ref
            boxRef.current.addEventListener('scroll', handleScroll);

            // Remove the event listener when the component is unmounted
            return () => {
                boxRef.current.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <div className='w-screen h-screen flex'>
            <div className='w-[30%] h-full bg-blue-300'></div>
            <div className='w-[70%] h-full overflow-scroll' ref={boxRef}>
                <div className='flex flex-col gap-4 bg-yellow-300'>
                    {new Array(20).fill(0).map((item, index) => (
                        <div className='h-screen bg-red-50' key={index}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;

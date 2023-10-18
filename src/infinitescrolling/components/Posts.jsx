import React, { useState, useEffect, useRef } from 'react'
import Post from './Post';
import CircularLoader from './CircularLoader';

const Posts = () => {
    const blockRef = useRef(null);
    const [postCount, setPostCount] = useState(4);
    const [isVisible, setIsVisible] = useState(false);
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: [0.5, 0.7, 0.8, 0.9]
    }
    const handleIntersect = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0.8) { // Check if more than 80% is visible
                setIsVisible(true);
                setTimeout(() => {
                    setIsVisible(false)
                    setPostCount((prev) => prev + 5);
                }, 500);
            } else {

            }
        });
    }
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(blockRef.current);
        return () => {
            observer.disconnect();
        }
    }, [])
    return (
        <div className='w-full mx-auto '>
            <div className='flex flex-col gap-2'>
                {
                    new Array(postCount).fill(0).map((_, index) => (
                        <Post key={index} index = {index + 1}/>
                    ))
                }
            </div>
            <div className='my-[2rem] h-[4rem] flex items-center justify-center' ref={blockRef}>
                {isVisible && <CircularLoader />}
            </div>
        </div>
    )
}
export default Posts
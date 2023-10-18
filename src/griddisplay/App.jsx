import React from 'react'

const postsList = [
    "https://plus.unsplash.com/premium_photo-1683140655656-20448abc55da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1579820010410-c10411aaaa88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1682685796766-0fddd3e480de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1695133389296-fdd6c49d422c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1696986291642-54225330b8d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1696862231970-c01a8bbe1033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1696864786774-77e691241e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    "https://images.unsplash.com/photo-1696543710864-fecad4bfbf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"

]


const getStyle = (count, index) => {
    if(count > 2) {
        return index === 0 ? 'col-span-6' : count >= 4 ? 'col-span-2' : 'col-span-3';
    }
    return 'row-span-2 col-span-3'
}

const App = () => {

    const count = Math.round(Math.random() * 2 + 2);
    return (
        <div className='w-screen h-screen bg-white flex justify-center items-center'>
            <div className='w-[28rem] h-[28rem] bg-white grid grid-cols-6 p-2 border-[2px] shadow-xl gap-[1px]' style={{
                gridAutoRows: "60% 40%"
            }}>
                {
                    new Array(count).fill(0).map((item, index) => (
                        // <div className = {`w-full h-full ${getStyle(count, index)}`}>
                        <div className={`w-full h-full  ${getStyle(count, index)}`}>
                            <img src={postsList[Math.round(Math.random() * 5)]} alt="gallery image" className='w-[100%] h-[100%] object-cover' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default App
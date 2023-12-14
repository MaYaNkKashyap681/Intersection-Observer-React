import React, { useState, useEffect } from 'react'

const useCursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    function mousePosition(e) {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }
    window.addEventListener("mousemove", mousePosition)
    return () => {
        window.removeEventListener("mousemove", mousePosition);
    }

    return position;
}

export default useCursor
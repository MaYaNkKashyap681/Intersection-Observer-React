import React, { useState, useRef, useEffect } from 'react';

const colors = [
    {
        name: "Black", code: "black",
    },
    {
        name: "Yellow", code: "yellow"
    },
    {
        name: "Red", code: "red",
    },
    {
        name: "Blue", code: "blue",
    },
    {
        name: "Green", code: "green"
    }
];
// ... (existing imports)

const DrawingApp = () => {
    // ... (existing state and functions)

    const [drawingPaths, setDrawingPaths] = useState([]);
    const [currentPath, setCurrentPath] = useState('');
    const [strokeWidth, setStrokeWidth] = useState(4);
    const [undoHistory, setUndoHistory] = useState([]);
    const [redoHistory, setRedoHistory] = useState([]);
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [pathCoordinates, setPathCoordinates] = useState([]); // Store raw path coordinates
    const [rectDims, setRectDims] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const drawingRef = useRef(null);

    const line = (pointA, pointB) => {
        const lengthX = pointB[0] - pointA[0];
        const lengthY = pointB[1] - pointA[1];
        return {
            length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
            angle: Math.atan2(lengthY, lengthX),
        };
    };

    const controlPoint = (current, previous, next, reverse) => {
        const p = previous || current;
        const n = next || current;
        const smoothing = 0.2;
        const o = line(p, n);
        const angle = o.angle + (reverse ? Math.PI : 0);
        const length = o.length * smoothing;
        const x = current[0] + Math.cos(angle) * length;
        const y = current[1] + Math.sin(angle) * length;
        return [x, y];
    };

    const bezierCommand = (point, i, a) => {
        const [cpsX, cpsY] = controlPoint(a[i - 1], a[i - 2], point);
        const [cpeX, cpeY] = controlPoint(point, a[i - 1], a[i + 1], true);
        return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]} `;
    };

    const handleMouseDown = (event) => {
        const x = event.clientX;
        const y = event.clientY + window.scrollY; // Adjust y-coordinate based on scroll position
        setCurrentPath(`M ${x} ${y}`);
        setRedoHistory([]); // Clear redo history when a new path is drawn
        setPathCoordinates([[x, y]]);
    };

    const handleMouseMove = (event) => {
        setScrollPosition(window.scrollY);

        if (currentPath && drawingRef.current) {
            let x = event.clientX;
            let y = event.clientY + window.scrollY; // Adjust y-coordinate based on scroll position
            if (rectDims) {
                x -= rectDims.left;
                y += rectDims.top;
            }

            if (
                x >= 0 &&
                y >= 0 &&
                x <= drawingRef.current.offsetWidth &&
                y <= drawingRef.current.offsetHeight
            ) {
                setPathCoordinates([...pathCoordinates, [x, y]]);

                if (pathCoordinates.length >= 3) {
                    const len = pathCoordinates.length;
                    const pathData = bezierCommand(
                        pathCoordinates[len - 1],
                        len - 1,
                        pathCoordinates
                    );
                    setCurrentPath((prevPath) => prevPath + pathData);
                }
            }
        }
    };

    const handleMouseUp = () => {
        if (currentPath) {
            setDrawingPaths((prevPaths) => [...prevPaths, { path: currentPath, color: selectedColor.code }]);
            setUndoHistory((prevUndoHistory) => [...prevUndoHistory, [...drawingPaths]]);
            setCurrentPath('');
            setPathCoordinates([]);
        }
    };

    const handleUndo = () => {
        if (undoHistory.length > 0) {
            const previousPaths = undoHistory[undoHistory.length - 1];
            setUndoHistory((prevUndoHistory) => prevUndoHistory.slice(0, -1));
            setDrawingPaths(previousPaths);
            setRedoHistory((prevRedoHistory) => [...prevRedoHistory, [...drawingPaths]]);
        }
    };

    const handleRedo = () => {
        if (redoHistory.length > 0) {
            const nextPaths = redoHistory[redoHistory.length - 1];
            setRedoHistory((prevRedoHistory) => prevRedoHistory.slice(0, -1));
            setDrawingPaths(nextPaths);
            setUndoHistory((prevUndoHistory) => [...prevUndoHistory, [...drawingPaths]]);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        const rect = drawingRef.current?.getBoundingClientRect();
        setRectDims(rect);
    }, []);

    return (
        <div>
            <div
                className="h-[10000px]"
                style={{ border: '1px solid #ccc' }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                ref={drawingRef}
            >
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        {drawingPaths.map((pathObj, index) => (
                            <g key={index} stroke={pathObj.color} fill="none" strokeWidth={strokeWidth}>
                                <path d={pathObj.path} />
                            </g>
                        ))}
                        {currentPath && (
                            <g stroke={selectedColor.code} fill="none" strokeWidth={strokeWidth}>
                                <path d={currentPath} />
                            </g>
                        )}
                    </g>
                </svg>
            </div>
            <div className='h-[4rem] w-[8rem] bg-white border-[2px] shadow-xl cursor-pointer hover:scale-[1.01] rounded-md fixed bottom-4 left-4 flex items-center justify-center group'>
                <div className={`flex items-center gap-4`}>
                    <div className='w-[2rem] h-[2rem] rounded-full' style={{
                        backgroundColor: selectedColor.code
                    }}>
                    </div>
                    <span>{selectedColor.name}</span>
                </div>
                <div className='absolute top-[-400%] flex-col gap-4 bg-white border-[1px] p-4 rounded-2xl hidden group-hover:flex'>
                    {
                        colors.map((item) => (
                            <div
                                className='w-[2rem] h-[2rem] rounded-full'
                                key={item.name}
                                onClick={() => setSelectedColor(item)}
                                style={{
                                    backgroundColor: item.code
                                }}>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='bg-white shadow-lg rounded-lg fixed top-4 left-4 p-4 flex items-start gap-12 justify-between'>
                <button onClick={handleUndo} className={`p-2 rounded-md ${undoHistory.length === 0 ? 'hover:bg-gray-300 text-opacity-30' : 'hover:bg-green-300'}`} disabled={undoHistory.length === 0}>Undo</button>
                <button onClick={handleRedo} className={`hover:bg-green-300 p-2 rounded-md ${redoHistory.length === 0 ? 'hover:bg-gray-300 text-opacity-30' : 'hover:bg-green-300'}`} disabled={redoHistory.length === 0}>Redo</button>
            </div>
        </div>
    );
};

export default DrawingApp;

import React, { useState, useEffect } from 'react';

const checkboxItems = [
    { domain: "Computer Science", value: "cs" },
    { domain: "Mathematics", value: "maths" },
    { domain: "English", value: "eng" },
    { domain: "Software", value: "sw" },
    { domain: "Hardware", value: "hw" },
    { domain: "Machine Learning", value: "ml" }
];

const App = () => {
    const [selectedItems, setSelectedItems] = useState(new Set());

    const handleSelectClick = (value) => {
        const updatedItems = new Set(selectedItems);
        if (updatedItems.has(value)) {
            updatedItems.delete(value);
        } else {
            updatedItems.add(value);
        }
        setSelectedItems(updatedItems);

        // Updating the params items
        const queryParams = new URLSearchParams();
        updatedItems.forEach(item => {
            queryParams.append('item', item);
        });
        window.history.replaceState(null, '', `?${queryParams.toString()}`);
    };
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const initialSelectedItems = new Set(queryParams.getAll('item'));
        setSelectedItems(initialSelectedItems);
    }, []);


    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <div className='w-[30rem] bg-gray-200 overflow-hidden rounded-lg p-4 border-[2px] border-black'>
                {checkboxItems.map((item, index) => (
                    <div key={index} className='flex items-center gap-2 mt-4'>
                        <input
                            type="checkbox"
                            checked={selectedItems.has(item.value)}
                            className='w-[2rem] h-[2rem] cursor-pointer'
                            onChange={() => handleSelectClick(item.value)}
                        />
                        <span>{item.domain}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;

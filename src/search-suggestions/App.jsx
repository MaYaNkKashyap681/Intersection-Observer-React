import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [debounceTimer, setDebounceTimer] = useState(null);

    const filteredData = (data) => {

        const newData = data.entities.length > 4 ? data.entities.slice(0, 4) : data.entities;
        const minData = newData.map((item) => {
            return item.identifier.value;
        });
        console.log(minData);
        return minData;
    };

    const fetchData = async () => {
        const options = {
            method: 'GET',
            url: 'https://crunchbase-crunchbase-v1.p.rapidapi.com/autocompletes',
            params: { query: searchInput },
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'crunchbase-crunchbase-v1.p.rapidapi.com'
            }
        };
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setSearchResults(filteredData(response.data));
        } catch (error) {
            console.error(error);
        }
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        if (debounceTimer) clearInterval(debounceTimer)
        const inputValue = e.target.value;
        setSearchInput(inputValue);
        setSearchResults([])
        if (e.target.value === '') return
        setDebounceTimer(setTimeout(() => {
            fetchData();
        }, 500));
    };
    useEffect(() => {
        return () => {
            clearTimeout(debounceTimer);
        };
    }, []);

    return (
        <div>
            <div className='h-[3rem] bg-black'></div>
            <div className='flex items-center justify-center mt-[4rem]'>
                <div className='w-[24rem] rounded-md overflow-hidden'>
                    <input
                        type="text"
                        className='w-full h-full p-4 bg-black text-white'
                        placeholder='Search Company'
                        value={searchInput}
                        onChange={handleInputChange}
                    />
                    <div className='w-full flex flex-col border-[2px]'>
                        {searchResults.map((item, index) => (
                            <div
                                className={`p-4 ${index % 2 === 0 ? 'bg-blue-50' : 'bg-gray-200'} cursor-pointer hover:bg-opacity-60`}
                                key={index}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

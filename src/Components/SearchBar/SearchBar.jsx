import React, { useEffect, useState } from 'react'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [suggestions, setSuggestions] = useState(["Skin Care", "Body Care"])

    useEffect(() => {
        if (searchTerm === "") {
            return;
        }

        const fetchSuggestions = async () => {
            try {
                const response = await fetch(`http://localhost:3000/products/suggestions?productName=${searchTerm}`);
                const data = await response.json();
                const mappedName = data.map(d => d.name)
                setSuggestions(mappedName);
            } catch (error) {
                console.error('Error fetching suggestions:', error);
            }
        };

        const delayDebounceFn = setTimeout(() => {
            fetchSuggestions();
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm])

    return (
        <div className='dropdown'>
            <input type='text' placeholder='Find your product' className='input border-none rounded-none' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-[1] w-52 p-2 shadow">
                {suggestions.map((suggestion, index) => (
                    <li key={index}><a>{suggestion}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default SearchBar
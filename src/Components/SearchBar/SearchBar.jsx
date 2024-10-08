import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchSuggestions } from '../../service/product'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [suggestions, setSuggestions] = useState(["Skin Care", "Body Care"])
    const navigate = useNavigate();

    useEffect(() => {
        if (searchTerm === "") {
            return;
        }

        const getSuggestions = async () => {
            try {
                const data = await fetchSuggestions(searchTerm);
                const mappedName = data.map(d => d.name)
                setSuggestions(mappedName);
            } catch (error) {
                console.error('Error fetching suggestions:', error);
            }
        };

        const delayDebounceFn = setTimeout(() => {
            getSuggestions();
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm])

    return (
        <div className='dropdown border'>
            <input type='text' placeholder='Find your product' className='input border-none rounded-none py-2 px-4' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-[1] w-52 p-2 shadow">
                {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={() => {navigate(`/search?term=${suggestion}`) }}><a>{suggestion}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default SearchBar
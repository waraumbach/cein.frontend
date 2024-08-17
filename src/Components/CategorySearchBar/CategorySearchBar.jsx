import { useEffect, useState } from 'react'
//import { fetchSuggestions } from '../../service/product'
import { fetchCategorySuggestions, searchCategories } from '../../service/category'
import { CiSearch } from "react-icons/ci";


const CategorySearchBar = ({ setSearchCategories }) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [suggestions, setSuggestions] = useState(["Skin Care", "Body Care"])

    const handleSelect = async e => {
        const data = await searchCategories(e.target.id)
        setSearchCategories(data)
    }

    useEffect(() => {
        if (searchTerm === "") {
            return;
        }

        const getSuggestions = async () => {
            try {
                const data = await fetchCategorySuggestions(searchTerm);
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
        <div className='dropdown border-b'>
            <div className='flex justify-center items-center'>
                <input type='text' placeholder='Find categories' className='input border-none rounded-none py-2 px-4' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                <CiSearch className="cursor-pointer"/>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-[1] w-52 p-2 shadow">
                {suggestions.map((suggestion, index) => (
                    <li key={index} onClick={handleSelect} id={suggestion} className='cursor-pointer p-2'>{suggestion}</li>
                ))}
            </ul>
        </div>
    )
}

export default CategorySearchBar
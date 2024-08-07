import { useState } from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { GoSearch } from "react-icons/go";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowSearchbar, setShowSearchbar] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleSearchBar = () => {
    setShowSearchbar(!isShowSearchbar)
  }

  return (
    <nav className='p-4 bg-cover flex-wrap: wrap;'>
      <div className="flex items-center justify-between">
        <a href="/about" className='group py-2 px-4 bg-transparent text-white-600 font-semibold rounded transition ease-in duration-200 transform'>
          About Us
          <span class="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-neutral transition-all duration-200 group-hover:w-full"></span>
        </a>
        <Link to="/">
          <p className="text-2xl m-6 group relative w-max">
            <span className="px-1 relative z-10">CEIN.</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-neutral rounded-md z-0 "></span>
          </p>
        </Link>

        {/* Toggle Menu Button */}
        <div className="md:hidden">
          <button id='menu-toggle' className='text-white' onClick={toggleMenu}>
          </button>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto lg:justify-center ${isOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 text-gray-600">
            {!isShowSearchbar ? <GoSearch onClick={toggleSearchBar} /> :
              <SearchBar />}
          </div>
          <Link to="/login" className="ml-3 py-2 px-4 bg-transparent text-white-600 font-semibold border border-stone-600 rounded hover:bg-gray-300 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
            Login
          </Link>
          <Link to="/register" className="ml-4 py-2 px-4 bg-transparent text-white-600 font-semibold border border-stone-600 rounded hover:bg-gray-300 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
            Register
          </Link>

        </div>
      </div>


    </nav>
  )
}

export default NavBar




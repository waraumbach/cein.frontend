import { useState } from 'react'
import { Link  } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    
    const toggleMenu = () => {
       
        setIsOpen(!isOpen)
    }
  
    

  return (
    <nav className='bg-stone-400 p-4 bg-cover flex-wrap: wrap;'>
        <div className="flex items-center justify-between">
      <p className="text-2xl m-6 group relative w-max">
      <span className="px-1 relative z-10 group-hover:text-white">cein</span>
      <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-stone-600 rounded-md z-0 group-hover:h-full "></span>
      </p>

            {/* Toggle Menu Button */}
            <div className="md:hidden">
                <button id='menu-toggle' className='text-white' onClick={toggleMenu}>  
                </button>
            </div>
            <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
            <ul className='flex flex-row  md:flex space-x-6'>
                <li><a href="/" className='py-2 px-4 bg-transparent text-white-600 font-semibold border border-stone-600 rounded hover:bg-gray-300 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0'>Home</a></li>
                <li><a href="/about" className='py-2 px-4 bg-transparent text-white-600 font-semibold border border-stone-600 rounded hover:bg-gray-300 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0'>About</a></li>
                <li><a href="/products" className='py-2 px-4 bg-transparent text-white-600 font-semibold border border-stone-600 rounded hover:bg-gray-300 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0'>Productlist</a></li><br />
               
            </ul>
            <div>
        
          <Link to="/login" className="ml-3 py-2 px-4 bg-transparent text-white-600 font-semibold border border-stone-600 rounded hover:bg-gray-300 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
            Login
          </Link>
          <Link to="/register" className="ml-4 py-2 px-4 bg-transparent text-white-600 font-semibold border border-stone-600 rounded hover:bg-gray-300 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
            Register
          </Link>
          <Link to="/contact" className="ml-4 py-2 px-4 bg-transparent text-white-600 font-semibold border border-stone-600 rounded hover:bg-gray-300 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
            Contact
          </Link>
          

        </div>
        <div className="pt-2 relative mx-auto text-gray-600">
        <SearchBar />
      </div>
       </div>
       </div>

       
    </nav>
  )
}

export default NavBar




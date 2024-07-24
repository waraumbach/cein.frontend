import { useState } from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    
    const toggleMenu = () => {
       
        setIsOpen(!isOpen)
    }

    

  return (
    <nav className='bg-stone-400 p-4 bg-cover flex-wrap: wrap;'>
        <div className="flex items-center justify-between">
            <div className='text-white hover:bg-green-300 text-2xl font-bold ml-5 cursor-pointer'>
                cein</div>

            {/* Toggle Menu Button */}
            <div className="md:hidden">
                <button id='menu-toggle' className='text-white' onClick={toggleMenu}>  
                </button>
            </div>
            <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
            <ul className='flex flex-row  md:flex space-x-10'>
                <li><a href="#" className='text-white  hover:bg-green-300 '>Home</a></li>
                <li><a href="#" className='text-white  hover:bg-green-300'>About</a></li>
                <li><a href="#" className='text-white  hover:bg-green-300'>Productlist</a></li>
                <li><a href="#" className='text-white  hover:bg-green-300 mr-3'>Contact</a></li> 
            </ul>
            <div>
          <Link to="/login" className="text-white px-4 py-2 border border-transparent rounded-md hover:bg-gray-700">
            Login
          </Link>
        </div>
            <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2"  type="search" placeholder="" aria-label="Search" />
      <button className="bg-green-300 btn btn-outline-success my-2 my-sm-0" type="submit ">Search</button>
      </form>
       </div>
       </div>

       
    </nav>
  )
}

export default NavBar




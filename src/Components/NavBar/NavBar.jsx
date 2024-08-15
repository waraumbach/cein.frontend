import { useState } from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { GoSearch } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";
import { useOrder } from '../../context/orderContext';
import { useAuth } from '../../context/authContext';
import { IoMdPerson } from "react-icons/io";


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowSearchbar, setShowSearchbar] = useState(false);
  const { orderItems } = useOrder();
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleSearchBar = () => {
    setShowSearchbar(!isShowSearchbar)
  }

  return (
    <nav className='p-4 bg-cover flex-wrap border-b'>
      <div className="flex items-center justify-between">
        <Link to="/about" className='group py-2 px-4 bg-transparent text-white-600 font-semibold rounded transition ease-in duration-200 transform'>
          About Us
          <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-neutral transition-all duration-200 group-hover:w-full"></span>
        </Link>
        <Link className='flex-1 flex justify-center' to="/">
          <p className="text-2xl m-6 group relative w-max">
            <span className="px-1 relative z-10">CEIN</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-neutral rounded-md z-0 "></span>
          </p>
        </Link>

        {/* Toggle Menu Button */}
        <div className="md:hidden">
          <button id='menu-toggle' className='text-white' onClick={toggleMenu}>
          </button>
        </div>
        <div className={`flex items-center w-autojustify-center`}>
          {!isShowSearchbar ? <GoSearch onClick={toggleSearchBar} /> :
            <SearchBar />}
          <Link to="/cart">
            <div className='flex justify-center items-center gap-2 mx-2 bg-neutral text-neutral-50 p-4'>
              <CiShoppingCart />
              {Object.keys(orderItems).length}
            </div>
          </Link>
          {user === null ? <>
            <Link to="/login" className="ml-3 py-2 px-4 bg-transparent text-white-600 font-semibold border border-stone-600 rounded hover:bg-gray-300 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
              Login
            </Link>
            <Link to="/register" className="ml-4 py-2 px-4 bg-transparent text-white-600 font-semibold border border-stone-600 rounded hover:bg-gray-300 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
              Register
            </Link>
          </> :
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn border-none m-1"><IoMdPerson /></div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-[1] w-52 p-2 shadow">
                <li className='mt-2 font-thin'>User: {user.email.split("@")[0]}</li>
                {user.isAdmin === true ? <li className='mt-2 font-thin hover:bg-gray-200 cursor-pointer'><Link to="/admin">Admin Panel</Link></li> : <></>}
                <li className='mt-2 font-thin hover:bg-gray-200 cursor-pointer'><Link to="/profile">Profile</Link></li>
                <li className='mt-2 font-thin hover:bg-gray-200 cursor-pointer' onClick={logout}>Logout</li>
              </ul>
            </div>}


        </div>
      </div>


    </nav>
  )
}

export default NavBar




import { useState } from 'react'



function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
   
   
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen) // !false = true 
        setIsOpen(!isOpen)
    }
    

  return (
    <nav className='bg-stone-400 p-4 bg-cover flex-wrap: wrap;'>
        <div className="flex items-center justify-between">
            <div className='text-white hover:bg-violet-200 text-2xl font-bold ml-5 cursor-pointer'>cein</div>

            {/* Toggle Menu Button */}
            <div className="md:hidden">
                <button id='menu-toggle' className='text-white' onClick={toggleMenu}>  
                </button>
            </div>
            <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
            <ul className='flex flex-row  md:flex space-x-5'>
                <li><a href="#" className='text-white  hover:bg-violet-200 '>Home</a></li>
                <li><a href="#" className='text-white  hover:bg-violet-200'>About</a></li>
                <li><a href="#" className='text-white  hover:bg-violet-200'>Services</a></li>
                <li><a href="#" className='text-white  hover:bg-violet-200'>Contact</a></li>
            </ul>
            </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen ? (
            <ul className='flex-col md:hidden'>
                <li className='py-2'><a href="#" className='text-white'>Home</a></li>
                <li className='py-2'><a href="#" className='text-white'>About</a></li>
                <li className='py-2'><a href="#" className='text-white'>Services</a></li>
                <li className='py-2'><a href="#" className='text-white'>Contact</a></li>
            </ul>
        ) : null}
        
    </nav>
  )
}

export default NavBar




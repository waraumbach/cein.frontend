
// src/components/Footer.jsx

import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <footer className="bg-gray-500 text-gray-300 py-8">
            <div className="container mx-auto flex flex-wrap justify-around">
                <div className="w-1/3 md:w-1/4 p-2">
                    <h4 className="text-lg font-semibold mb-4">About Us</h4>
                    <p className="text-sm">We are a company that values...</p>
                </div>
                <div className="w-1/3 md:w-1/4 p-2">
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-white">Home</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-white">Productlist</a></li>
                        <li className="mb-2"><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>
                <div className="w-1/3 md:w-1/4 p-2">
                    <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                    <ul className="flex space-x-4">
                        <li><a href="https://www.facebook.com/" className="hover:text-white">Facebook</a></li>
                        <li><a href="https://x.com/" className="hover:text-white">Twitter</a></li>
                        <li><a href="https://www.instagram.com/" className="hover:text-white">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-sm mt-8">
                &copy; 2024 Your Company. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;


import './App.css'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './Components/Hero/HeroSection'
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import ProductList from './Components/ProductList/ProductList'
import Footer from './Components/Footer/Footer'
import Login from './pages/Login'



function App () {
  return (
    <>
    <Router>
    <div className="App">
    <NavBar />
    <Routes>
      <Route path="/login" element={<Login />} />
         </Routes>
    </div>
    </Router>

     <div className='container mx-auto mt-1'>
      <Home />
     <HeroSection />
        <div className='container mx-auto mt-1'></div>
        <ProductList />
        <Footer />
        <div className="flex flex-col min-h-screen">
            {/* Other content of your page */}
            <div className="flex-grow">
                {/* Main content goes here */}
            </div>
           
        </div>
       
     
      </div>
    </>
  )
}

export default App

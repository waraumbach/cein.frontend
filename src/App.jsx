
import './App.css'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Login from './pages/Login'
import Register from './pages/Register';
import Contact from './pages/Contact';
import Products from './Components/ProductList/Products.jsx';
import About from './pages/about';
import DetailsProduct from './pages/detailsProduct.jsx';


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detailsProduct" element={<DetailsProduct />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App

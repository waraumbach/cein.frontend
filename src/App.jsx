
import './App.css'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Login from './pages/Login'
import Register from './pages/Register';
import Contact from './pages/Contact';
import About from './pages/about';
import DetailsProduct from './pages/detailsProduct.jsx';
import Search from './pages/Search.jsx';
import Products from './pages/Products.jsx';
import Admin from './pages/Admin/Admin.jsx';
import { OrderProvider } from './context/orderContext.jsx';
import { AuthProvider } from './context/authContext.jsx';
import CheckoutContainer from './pages/Checkout.jsx';
import Cart from './pages/Cart.jsx';
import Profile from './pages/Profile.jsx';


function App() {
  return (
    <>
        <Router>
          <AuthProvider>
            <OrderProvider>
              <div className="App w-screen h-screen">
                <NavBar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/products/:id" element={<DetailsProduct />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/checkout" element={<CheckoutContainer />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
                <Footer />
              </div>
            </OrderProvider>
          </AuthProvider>
        </Router>
    </>
  )
}

export default App
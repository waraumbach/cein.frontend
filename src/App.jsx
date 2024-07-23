
import './App.css'
import HeroSection from './Components/Hero/HeroSection'
import NavBar from './Components/NavBar/NavBar'


function App() {
  return (
    <>
     <NavBar />
      <div className='container mx-auto mt-1'>
        <HeroSection />
        <div className='container h-screen '></div>
       
     
      </div>
    </>
  )
}

export default App

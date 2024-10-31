import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import ExploreMenu from './components/ExploreMenu/ExploreMenu'
import FoodDisplay from './components/FoodDisplay/FoodDisplay'
import AppDownload from './components/AppDownload/AppDownload'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'



const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin= {setShowLogin} />
      <Header/>
      <ExploreMenu/>
      <FoodDisplay/>
      <AppDownload/>
      
      
      
      <Routes>
        < Route path='/' element={<Home/>} />
        < Route path='/cart' element={<Cart/>} /> 
        < Route path='/Order' element={<PlaceOrder/>} /> 
     </Routes>
      
    </div>
    
    <Footer />
    </>
    
  )
}

export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Men from './pages/Men';
import Contact from './pages/Contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Cart from './pages/Cart';
import Footer from "./components/Footer";
import ClothesDetail from './pages/ClothesDetail';




function App() {
  return (
<div>
   

<Router>
      <Navbar />
      <Routes>
        <Route path='/' index element={<Home/>} /> 
        <Route path='/home' element={<Home/>} />
        <Route path='/Men' element={<Men/>} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/clothes-detail' element={<ClothesDetail/>}/>


      </Routes>


      <Footer /> 
    
    </Router>
    

  
    
    </div>



  )
}

export default App;




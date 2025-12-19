import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Service from "./Pages/Service"
import{ Routes,Route } from "react-router-dom";
export const App = () => {
  return (
    <>
     {/* <Header/>
     <Footer/> */}
     <Navbar/>
     <Routes>
      <Route path="/"element={<Home/>}/>
       <Route path="/about"element={<About/>}/>
       <Route path="/contact"element={<Contact/>}/>
       <Route path="/service"element={<Service/>}/>
     </Routes>
    </>
  )
}
export default App

       

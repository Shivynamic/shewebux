import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home";
import {Routes, Route} from 'react-router-dom';
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
import './index.css'
import Footer from "./Footer";



const App =()=>{
    return (
        <>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/service" element={<Service/>} />
            <Route exact path="/contact" element={<Contact/>} />            
        </Routes>
        <Footer/>
        </>
    )
}

export default App;
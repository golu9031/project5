import React from 'react';

import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About'; 
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import ContactUs from './components/Contact Us';  
import Studentinfo from './components/Studentinfo';
import Studentid from './components/Studentid';
import AddStudent from './components/AddStudent';
import PrivateComponent from './components/PrivateComponent'; 

import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>

        <Nav />
        <Routes>
          <Route element={<PrivateComponent/>}/> 
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contactus" element={<ContactUs/>} />


          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/> } />
          <Route path="/studentinfo" element={<Studentinfo/> } />
           <Route path="/studentid" element={<Studentid/>} />
          <Route path="/addstudent" element={<AddStudent/>} />
        </Routes>

      </BrowserRouter>
      
      <Footer />

    </div>
  )
}



export default App;

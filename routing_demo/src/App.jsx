import { BrowserRouter as Router,Route,Link, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/home';
import About from './components/About';
import Contact from './components/Contact';
import React from 'react';

function  App(){
  return(
    <Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      
       <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
       </Routes>
     
    </Router>
  )
}

export default App

import Home from './Home';
import About from './About';
import NavBar from './NavBar';
import UserContainer from './UserContainer';
import UserData from './UserData';
import TripContainer from './TripContainer';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  return (
      <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import NavBar from './NavBar';
import React, { useEffect, useState } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  return (
      <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

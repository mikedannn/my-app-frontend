import logo from './logo.svg';
import NavBar from './NavBar';
import React from 'react';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Login />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import NavBar from './NavBar';
import React, { useEffect, useState } from 'react';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  const [user, setUser] = useState(null)


  return (
      <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Login user={user} setUser={setUser} />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

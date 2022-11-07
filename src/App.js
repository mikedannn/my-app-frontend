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

  const [users, setUsers] = useState([]);
  const [trips, setTrips] = useState([]);
  const [destinations, setDestinations] = useState([]);

  const userUrl = "http://localhost:9292/users";

  useEffect(() => {
    fetch(userUrl)
      .then((resp) => resp.json())
      .then(setUsers);
  }, []);

  const tripUrl = "http://localhost:9292/users";

  useEffect(() => {
    fetch(tripUrl)
      .then((resp) => resp.json())
      .then(setTrips);
  }, []);

  const destinationUrl = "http://localhost:9292/destinations";

  useEffect(() => {
    fetch(destinationUrl)
      .then((resp) => resp.json())
      .then(setDestinations);
  }, []);
  

  return (
      <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home users={users} setUsers={setUsers}/>}/>
          <Route exact path='/about' element={<About />}/>
          <Route exact path='/users' element={<UserContainer users={users} setUsers={setUsers}/>}/>
          <Route exact path='/trips' element={<TripContainer trips={trips}/>}/>
          <Route exact path='/destinations' element={<TripContainer trips={trips}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

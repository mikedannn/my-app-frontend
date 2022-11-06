import React, { useState } from 'react';
import './App.css';

function Login({ user, setUser }) {

    const [username, setUsername] = useState("")
    const [password, setPassword ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/users/${username}/${password}`, {
            method: "GET", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        })
            .then(resp => resp.json())
            .then(console.log)
        
    }

  return (

    <div>
        <img className="travelPicture" src="plane-pic.jpg"/>

        <div className="loginForm">
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    id='username' 
                    placeholder='Username' 
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input 
                    type='password' 
                    id='password' 
                    placeholder='Password' 
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className='formButton' type='submit'>Log in</button>
                <button className='formButton' type='submit'>Sign up</button>

            </form>
        </div>
    </div>
  );
}

export default Login;
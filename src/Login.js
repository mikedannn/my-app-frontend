import React, { useState } from 'react';
import './App.css';

function Login({ user, setUser }) {

    const [username, setUsername] = useState("")
    const [password, setPassword ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        
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
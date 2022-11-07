import React, { useState } from 'react';
import './App.css';

function Home() {

  return (

    <div>
        <img className="travelPicture" src="plane-pic.jpg"/>

        <div className="home">
        
                <button className='formButton' type='submit'>Log in</button>
                <button className='formButton' type='submit'>Sign up</button>

    
        </div>
    </div>
  );
}

export default Home;
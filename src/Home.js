import React, { useState } from 'react';
import UserContainer from './UserContainer';
import './App.css';


function Home({ users }) {

  return (

    <div>
        <img className="travelPicture" src="plane-pic.jpg"/>

        {/* <div className="userContainerList">
          <h2>Travelers</h2>
          <UserContainer users={users}/>
        </div> */}
    </div>
  );
}

export default Home;
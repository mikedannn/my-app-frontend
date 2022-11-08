import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TripCard from "./TripCard";
import './App.css';




function TripInformation( { users, trips, setTrips, destinations, setDestinations } ) {

    const [userData, setUserData] = useState([]);
    const [destinationId, setDestinationId] = useState("");
    const [userId, setUserId] = ("");

    let navigate = useNavigate()
    const handleSubmitTrip = (e) => {
      navigate.push(`/users`)
    };
    
    let {id} = useParams();
    let userUrl = "http://localhost:9292/users"

    useEffect(() => {
        fetch(userUrl + id)
          .then((resp) => resp.json())
          .then(setUserData);
    }, [id])  


    // const newTrip = {
    //     user_id: user_id,
    //     destination_id: destination_id,
    //     start_date: start_date,
    //     end_date: end_date,
    //     trip_notes: trip_notes
    // }

    // function handleAddNewTrip(e) {
    //     setNewTripData({...newTripData, 
    //       [e.target.name]: e.target.value})
    // };

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch('http://localhost:9292/trips', {
    //       method: "POST",
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(newTrip)
    //     })
    //       .then((r) => r.json())
    //       .then((data) => {
    //         console.log(data)
    //         setTrips((currentTrips) => [data, ...currentTrips]);
    //         handleSubmitTrip();
    //     })
    
    // };

    // console.log(newTrip);

    return (

        <div> 
            <h2>Post Your Trip:</h2>
            {/* <form  onSubmit={handleSubmit} className="tripForm"> */}
            <form className="tripForm">
                <label>
                Traveler:
                <select
                    placeholder="Select Traveler"
                    onChange={(e) => setUserId(e.target.value)}
                >
                    <option value="none">Select Traveler:</option>
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.full_name} | {user.username}
                    </option>
                    ))}
                </select>
                </label>
                <label>
                Destination:
                <select
                    placeholder="Select Destination"
                    onChange={(e) => setDestinationId(e.target.value)}
                >
                    <option value="none">Select Destination:</option>
                    {destinations.map((destination) => (
                        <option key={destination.id} value={destination.id}>
                            {destination.city_name} | {destination.country_name}
                    </option>
                    ))}
                </select>
                </label>
                <label>
                Start Date:
                <input type="datetime-local">
                </input>
                </label>
                <label>
                End Date:
                <input type="datetime-local">
                </input>
                </label>
                <label>
                Trip Notes:
                <input
                    className="tripNotes"
                    type="text"
                    name="trip_notes"
                    placeholder="Trip Notes"
                    // value={newUserData.password}
                    // onChange={handleAddNewUser}
                    >
                </input>
                </label>
            <br/>
            <br/>
            </form>
        
        </div>
    );
  }
  
  export default TripInformation;
import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TripCard from "./TripCard";
import './App.css';




const newTrip = {
    user_id: "",
    destination_id: "",
    start_date: "",
    end_date: "",
    trip_notes: ""
}

function TripInformation( { users, trips, setTrips, destinations, setDestinations } ) {

    const [newTripData, setNewTripData] = useState(newTrip);

    const tripUrl = "http://localhost:9292/trip";
    
    
    let navigate = useNavigate()
    const handleSubmitTripClick = (e) => {
      navigate.push(`/trips`)
    };

    function handleAddNewTripData(e) {
        setNewTripData({...newTripData, 
            [e.target.name]: e.target.value})
    };

    
    function handleSubmit(e) {
        e.preventDefault();
        fetch(tripUrl, {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(newTripData)
        })
            .then((r) => r.json())
            .then((data) => {
                setTrips((currentTrips) => [data, ...currentTrips]);
                setNewTripData(newTrip);
                handleSubmitTripClick();
            })
    }

    console.log(newTrip);

    return (

        <div className="tripForm"> 
            <form onSubmit={handleSubmit}>
            <h2>Add Your Trip</h2>
                <label>
                Traveler:
                <br/>
                <select
                    className="customSelect"
                    placeholder="Select Traveler"
                    name="user_id"
                    onChange={(e) => handleAddNewTripData(e.target.value)}
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
                <br/>
                <select
                    className="customSelect"
                    placeholder="Select Destination"
                    name="destination_id"
                    onChange={(e) => handleAddNewTripData(e.target.value)}
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
                <br/>
                <input 
                    id="start_date"
                    name="start_date"
                    type="date"
                >
                </input>
                </label>
                <label>
                End Date:
                <br/>
                <input type="date">
                </input>
                </label>
                <label>
                Trip Notes:
                <br/>
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
                <button id="tripButton"type="submit">Click Me!</button>
                <br/>
            </form>
        </div>
    );
  }
  
  export default TripInformation;
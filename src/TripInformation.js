import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TripCard from "./TripCard";
import './App.css';

const newTrip = {
    user_id: null,
    destination_id: null,
    start_date: null,
    end_date: null,
    trip_notes: ""
}

function TripInformation( { users, trips, setTrips, destinations, setDestinations } ) {

    const [newTripData, setNewTripData] = useState(newTrip);
    
    let navigate = useNavigate();
    const handleSubmitTripClick = (e) => {
      navigate(`/trips`);
    };

    function handleAddNewTripData(e) {
        setNewTripData({...newTripData, 
            [e.target.name]: e.target.value})
    };

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:9292/trips', {
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
                    onChange={handleAddNewTripData}
                    required
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
                    onChange={handleAddNewTripData}
                    required
                >
                    <option value="none">Select Destination:</option>
                    {destinations.map((destination) => (
                        <option key={destination.id} value={destination.id}>
                            {destination.destination_name}
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
                    onChange={handleAddNewTripData}
                    required
                >
                </input>
                </label>
                <label>
                End Date:
                <br/>
                <input 
                    id="end_date"
                    name="end_date"
                    type="date"
                    onChange={handleAddNewTripData}
                    required
                    >
                </input>
                </label>
                <label>
                Trip Notes:
                <br/>
                <input
                    id="trip_notes"
                    name="trip_notes"
                    type="text"
                    placeholder="Trip Notes"
                    value={newTripData.trip_notes}
                    onChange={handleAddNewTripData}
                    required
                    >
                </input>
                </label>
                <br/>
                <button id="tripButton"type="submit">Add Trip!</button>
                <br/>
            </form>
        </div>
    );
  }
  
  export default TripInformation;
import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from "react-router-dom";


function EditTrip({ users, destinations, trips, setTrips}) {

    const updatedTrip = {
        user_id: "",
        destination_id: "",
        start_date: "",
        end_date: "",
        trip_notes: ""
    }

    let {id} = useParams();
    // const [tripData, setTripData] = useState([]);
    const [updatedTripData, setUpdatedTripData] = useState(updatedTrip)

    let navigate = useNavigate();
    const handleSubmitTripClick = (e) => {
      navigate(`/trips`);
    };

    useEffect(() => {
        fetch(`http://localhost:9292/trips/${id}`)
        .then((resp) => resp.json())
        .then((data) => setUpdatedTripData(data));
    }, [id])

    function handleAddUpdatedTripData(e) {
        setUpdatedTripData({...updatedTripData, 
            [e.target.name]: e.target.value})
    };


    function handleSubmit(e) {
        e.preventDefault();
        console.log(updatedTripData)
        fetch(`http://localhost:9292/trips/${id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(updatedTripData),
        })
        .then((r) => r.json())
        .then((data) => {
            setUpdatedTripData(data)
            handleSubmitTripClick();
        })
        .catch((err) => console.log('error: ', err))
    }

    return (
    
        <div className="tripForm"> 
            <form onSubmit={handleSubmit}>
            <h2>Edit Your Trip</h2>
                <label>
                Edit Traveler:
                <br/>
                <select
                    className="customSelect"
                    placeholder="Select Traveler"
                    name="user_id"
                    value={updatedTripData.user_id}
                    onChange={handleAddUpdatedTripData}
                    autoFocus={true}
                    required
                >
                    <option value="none">Select Traveler:</option>
                    {users.map((user) => (
                        <option key={`user${user.id}`} value={user.id}>
                            {user.full_name} | {user.username}
                    </option>
                    ))}
                </select>
                </label>
                <label>
                Edit Destination:
                <br/>
                <select
                    className="customSelect"
                    placeholder="Select Destination"
                    name="destination_id"
                    value={updatedTripData.destination_id}
                    onChange={handleAddUpdatedTripData}
                    required
                >
                    <option value="none">Select Destination:</option>
                    {destinations.map((destination) => (
                        <option key={`destination${destination.id}`} value={destination.id}>
                            {destination.destination_name}
                    </option>
                    ))}
                </select>
                </label>
                <label>
                Edit Start Date:
                <br/>
                <input 
                    id="start_date"
                    name="start_date"
                    type="date"
                    value={updatedTripData.start_date}
                    onChange={handleAddUpdatedTripData}
                    required
                >
                </input>
                </label>
                <label>
                Edit End Date:
                <br/>
                <input 
                    id="end_date"
                    name="end_date"
                    type="date"
                    value={updatedTripData.end_date}
                    onChange={handleAddUpdatedTripData}
                    required
                    >
                </input>
                </label>
                <label>
                Edit Trip Notes:
                <br/>
                <input
                    id="trip_notes"
                    name="trip_notes"
                    type="text"
                    placeholder="Trip Notes"
                    value={updatedTripData.trip_notes}
                    onChange={handleAddUpdatedTripData}
                    required
                    >
                </input>
                </label>
                <br/>
                <button id="tripButton"type="submit">Edit Trip!</button>
                <br/>
            </form>
        </div>

    );
}

export default EditTrip;
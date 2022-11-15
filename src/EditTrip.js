import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from "react-router-dom";

 const updatedTrip = {
        user_id: "",
        destination_id: "",
        start_date: "",
        end_date: "",
        trip_notes: ""
    }

function EditTrip({ users, destinations, trips, setTrips}) {

    let {id} = useParams();
    const [tripData, setTripData] = useState([]);
    const [updatedTripData, setUpdatedTripData] = useState(updatedTrip)


    useEffect(() => {
        fetch(`http://localhost:9292/trips/${id}`)
        .then((resp) => resp.json())
        .then(setTripData);
        console.log(tripData)
    }, [id])


    function handleSubmit(e) {
        e.preventDefault();
        console.log('Clicked!')
        // fetch(`http://localhost:9292/trips/${id}`, {
        //     method: "PATCH", 
        //     headers: {
        //         "Content-Type": "application/json",
        //     }, 
        //     body: JSON.stringify()
        // })
        // .then((r) => r.json())
        // .then((updatedTrip) => )
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
                    value={tripData.user_id}
                    // onChange={handleAddNewTripData}
                    autoFocus={true}
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
                Edit Destination:
                <br/>
                <select
                    className="customSelect"
                    placeholder="Select Destination"
                    name="destination_id"
                    value={tripData.destination_id}
                    // onChange={handleAddNewTripData}
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
                Edit Start Date:
                <br/>
                <input 
                    id="start_date"
                    name="start_date"
                    type="date"
                    // value={tripData.start_date}
                    // onChange={handleAddNewTripData}
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
                    // value={tripData.end_date}
                    // onChange={handleAddNewTripData}
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
                    value={tripData.trip_notes}
                    // onChange={handleAddNewTripData}
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
import './App.css';
import { NavLink } from 'react-router-dom';

function TripCard({ trip: { id, trip_notes, start_date, end_date, user, destination }, setTrips, trips }) {

    const tripUrl = 'http://localhost:9292/trips'

    function handleDeleteTrip() {
        fetch(`${tripUrl}/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            const currentTrips = trips.filter(trip => trip.id !== id)
            setTrips(currentTrips)
        })
    }
    

    return (
        <div className="tripCard" >
            <div className="cardHeader">
                <h1>{user.full_name}'s trip to {destination.destination_name}!</h1>
            </div>
            <div className="cardContainer">
                <p className="tripNote">Notes: {trip_notes}</p>
                <p>Taken by: {user.username}</p>
            </div>
            <div className="cardButtons">
                <button id="tripCardButton" ><NavLink className="editLink" to={`/trips/${id}/edit`}>Edit Trip!</NavLink></button>
                <button id="tripCardButton" onClick={handleDeleteTrip}>Delete Trip!</button>
            </div>
        </div>
    );
}


export default TripCard;
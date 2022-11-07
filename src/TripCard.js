import './App.css';

function TripCard({ trip: { id, trip_notes, start_date, end_date, user, destination: { city_name, country_name } } }) {
    

    return (
        <div className="userBox">
            <h1>My Trip to {city_name}, {country_name}!</h1>
            <p className="tripNote">My Notes: {trip_notes}</p>
            <p>Taken by: {user.username}</p>
        </div>
    );
}


export default TripCard;
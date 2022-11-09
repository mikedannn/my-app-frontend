import './App.css';

function TripCard({ trip: { id, trip_notes, start_date, end_date, user, destination: { city_name, country_name } } }) {
    

    return (
        <div className="tripCard">
            <div className="cardHeader">
                <h1>{user.full_name}'s trip to {city_name}, {country_name}!</h1>
            </div>
            <div className="cardContainer">
                <p className="tripNote">My Notes: {trip_notes}</p>
                <p>Taken by: {user.username}</p>
            </div>
        </div>
    );
}


export default TripCard;
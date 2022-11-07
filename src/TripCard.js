import './App.css';

function TripCard({ trip: { id, trip_notes, start_date, end_date } }) {

    return (
        <div className="userBox">
            <h1>{id}</h1>
            <p className="tripNote">{trip_notes}</p>
            <p>Started: {start_date}</p>
            <p>Ended: {end_date}</p>
        </div>
    );
}


export default TripCard;
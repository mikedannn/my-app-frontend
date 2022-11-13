import './App.css';

function TripCard({ trip: { id, trip_notes, start_date, end_date, user, destination } }) {
    
    

    return (
        <div className="tripCard">
            <div className="cardHeader">
                <h1>{user.full_name}'s trip to {destination.destination_name}!</h1>
            </div>
            <div className="cardContainer">
                <p className="tripNote">My Notes: {trip_notes}</p>
                <p>Taken by: {user.username}</p>
            </div>
            <div className="cardButtons">
                <button id="editBtn" ng-click="editItem (item)">✏️</button>
                <button id="deleteBtn" ng-click="deleteItem (item)">🗑</button>
            </div>
        </div>
    );
}


export default TripCard;
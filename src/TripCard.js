import './App.css';

function TripCard({ trip: { id } }) {

    return (
        <div className="userBox" >
            <h1>{id}</h1>
            <p> {id} </p>
        </div>
    );
}


export default TripCard;
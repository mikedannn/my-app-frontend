import './App.css';
import TripCard from './TripCard';
import TripInformation from './TripInformation';




function TripContainer ({ users, trips, setTrips, destinations, setDestinations }) {

    const tripList = trips.map((trip) => <TripCard key={trip.id} trip={trip} />);
    
    return (

      <div>
        <TripInformation users={users} trips={trips} setTrips={setTrips} destinations={destinations} setDestinations={setDestinations}/>
        <div className="listOfTrips">
          {tripList}
        </div>
      </div>
    )
  }
  
  export default TripContainer;
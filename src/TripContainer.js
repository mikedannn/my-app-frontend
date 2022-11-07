import './App.css';
import TripCard from './TripCard';

function TripContainer ({ trips }) {
    
    const tripList = trips.map((trip) => <TripCard key={trip.id} trip={trip} />);
  
    return tripList;
  }
  
  export default TripContainer;
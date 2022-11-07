import './App.css';
import TripCard from './TripCard';
import TripInformation from './TripInformation';

function TripContainer ({ trips }) {
    
    const tripList = trips.map((trip) => <TripCard key={trip.id} trip={trip} />);
  
    return tripList;
  }
  
  export default TripContainer;
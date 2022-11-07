import './App.css';
import DestinationCard from './DestinationCard';

function DestinationContainer ({ destinations }) {
    
    const destinationList = destinations.map((destination) => <DestinationCard key={destination.id} destination={destination} />);
  
    return destinationList;
  }
  
  export default DestinationContainer;
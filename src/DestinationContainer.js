import './App.css';
import DestinationCard from './DestinationCard';

function DestinationContainer ({ destinations }) {
    
    const destinationList = destinations.map((destination) => <DestinationCard key={destination.id} destination={destination} />);
  
    return (

      <div className="userWrapper">
        <ul className="list">
          {destinationList}
        </ul>
      </div>
    );
  }
  
  export default DestinationContainer;

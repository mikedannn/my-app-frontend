import './App.css';

function DestinationCard({ destination }) {

    return (

        <li className="destinationCard">
            {/* <img className="cardImage" src={image_url} alt={city_name} /> */}
            <h3>{destination.destination_name}</h3>
            <p>`I am found in {destination.destination_name}` </p>
        </li>
    );
}


export default DestinationCard;
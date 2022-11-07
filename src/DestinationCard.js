import './App.css';

function DestinationCard({ destination: { city_name, country_name, image_url, id }}) {

    return (

        <li className="destinationCard">
            <img className="cardImage" src={image_url} alt={city_name} />
            <h1>{city_name}</h1>
            <p>`I am found in {country_name}` </p>
        </li>
    );
}


export default DestinationCard;
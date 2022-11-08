import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TripCard from "./TripCard";
import './App.css';




function TripInformation( { users, trips, setTrips, destinations, setDestinations } ) {

    const [userData, setUserData] = useState([]);
    const [destination, setDestination] = useState("");

    let navigate = useNavigate()
    const handleSubmitTrip = (e) => {
      navigate.push(`/users`)
    };
    
    let {id} = useParams();
    let userUrl = "http://localhost:9292/users"

    useEffect(() => {
        fetch(userUrl + id)
          .then((resp) => resp.json())
          .then(setUserData);
    }, [id])  


    // const newTrip = {
    //     user_id: user_id,
    //     destination_id: destination_id,
    //     start_date: start_date,
    //     end_date: end_date,
    //     trip_notes: trip_notes
    // }

    // function handleAddNewTrip(e) {
    //     setNewTripData({...newTripData, 
    //       [e.target.name]: e.target.value})
    // };

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch('http://localhost:9292/trips', {
    //       method: "POST",
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(newTrip)
    //     })
    //       .then((r) => r.json())
    //       .then((data) => {
    //         console.log(data)
    //         setTrips((currentTrips) => [data, ...currentTrips]);
    //         handleSubmitTrip();
    //     })
    
    // };

    // console.log(newTrip);

    return (

        <div>
            {/* <form  onSubmit={handleSubmit} className="tripForm"> */}
            <form className="tripForm">
                <label>
                Traveler:
                <select
                    placeholder="Select Traveler"
                    // value={newUserData.full_name}
                    // onChange={handleAddNewUser}
                >
                </select>
                </label>
            <br/>
            <br/>
            </form>
            hi
        </div>
    );
  }
  
  export default TripInformation;
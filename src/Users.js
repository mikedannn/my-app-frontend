
import './App.css';

function Users({ user }) {

    const destinationsList = user.destinations.map((destination) => <p key={destination.id}>
        {destination.destination_name}
    </p>);

    return (
        <div className="listItem" >
            <div className="listItemContent">
                <h1>{user.full_name}</h1>
                <p>Username: {user.username} </p>
                <ul className="destinationList">
                    Has Traveled:
                    {destinationsList}
                </ul>
            </div>
            
        </div>
    );
}


export default Users;
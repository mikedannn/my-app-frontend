
import './App.css';

function Users({ user }) {

    const destinationsList = user.destinations.map((destination) => <li key={destination.id}>
        {destination.destination_name}
    </li>);

    return (
        <div className="listItem" >
            <div className="listItemContent">
                <h1>{user.full_name}</h1>
                <p>Username: {user.username} </p>
                <ul className="destinationList">
                    {destinationsList}
                </ul>

                <button id="editBtn" ng-click="editItem (item)">✏️</button>
                <button id="deleteBtn" ng-click="deleteItem (item)">🗑</button>
            </div>
            
        </div>
    );
}


export default Users;
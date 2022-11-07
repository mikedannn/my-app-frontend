
import './App.css';

function Users({ user: { full_name, username, id } }) {

    return (
        <div className="listItem" >
            <div className="listItemContent">
                <h1>{full_name}</h1>
                <p>Username: {username} </p>
                <button id="editBtn" ng-click="editItem (item)">✏️</button>
                <button id="deleteBtn" ng-click="deleteItem (item)">🗑</button>
            </div>
            
        </div>
    );
}


export default Users;
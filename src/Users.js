
import './App.css';

function Users({ user: { full_name, username, id } }) {

    return (
        <div className="listItem" >
            <div className="listItemContent">
                <h1>{full_name}</h1>
                <p>Username: {username} </p>
            </div>
        </div>
    );
}


export default Users;
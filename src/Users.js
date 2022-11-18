
import './App.css';


function Users({ user: { id, full_name, username } }) {
    

    return (
        <div className="listItem" >
            <div className="listItemContent">
                <h1 className="listItemHeading">{full_name}</h1>
                <p className="listItemUsernameTag" >Username: {username} </p>
            </div>
            
        </div>
    );
}


export default Users;
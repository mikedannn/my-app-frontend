import { useNavigate } from "react-router-dom";



function Users({ user: { full_name, username, id } }) {

    return (
        <div className="userBox" >
            <h1>{full_name}</h1>
            <p>Username: {username} </p>
        </div>
    );
}


export default Users;
import { useNavigate } from "react-router-dom";

    function Users({ user: { full_name, username, id } }) {

    
  
    return (
        <div>
            <h1>{full_name}</h1>
        </div>
    );
}


export default Users;
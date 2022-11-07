import Users from "./Users";
import './App.css';

function UserContainer({ users }) {
    
  const userList = users.map((user) => <Users key={user.id} user={user} />);

  return (

    <div className="userWrapper">
      <ul className="list">
        {userList}
      </ul>
    </div>
    
  );
}

export default UserContainer;

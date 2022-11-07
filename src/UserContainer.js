import Users from "./Users";
import './App.css';

function UserContainer({ users }) {
    
  const userList = users.map((user) => <Users key={user.id} user={user} />);

  return userList;
}

export default UserContainer;

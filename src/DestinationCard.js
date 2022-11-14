import './App.css';

function DestinationCard({ destination }) {

    const userList = destination.users.map((user) => <p key={user.id}>
        {user.username}
    </p>);

    return (

        <div className="destinationCard">
            <h3>{destination.destination_name}</h3>
            <div>
                Users who have been here:
                {userList}
            </div>
        </div>
    );
}


export default DestinationCard;
import React, { useEffect, useState } from 'react';
import "./Products.css"
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);
    const [limit, setLimit] = useState(10); 
    useEffect(() => {
        axios
            .get(`https://dummyjson.com/users?limit=${limit}`)
            .then(res => {
                setUsers(res.data.users);
            });
    }, [limit]); 

    const handleSeeMore = () => {
        setLimit(prevLimit => prevLimit + (limit));
    };

    return (
        <div>
            <h3>Users</h3>
            <div className="wrapper">
                {users?.map(user => (
                    <div key={user.id} className="card">
                        <img src={user.image} alt="" />
                        <h3>{user.firstName} {user.lastName}</h3>
                        <p>{user.email}</p>
                        <button>See More</button>
                    </div>
                ))}
            </div>
            <button onClick={handleSeeMore} className="see-more">
                See More
            </button>
        </div>
    );
}

export default Users;

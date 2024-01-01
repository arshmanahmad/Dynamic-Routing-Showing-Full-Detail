import React from 'react'
import { useLocation } from 'react-router-dom'

const UserShow = () => {
    const location = useLocation();
    const data = location.pathname.split('/');
    const id = data[2];
    const name = data[3];
    const post = data[4];
    console.log();

    return (
        <div>
            <h1>Dynamic Routing Demo</h1>
            <h2>Selected user info</h2>
            <h3>id: {id}</h3>
            <h3>name: {name}</h3>
            <h3>post: {post}</h3>
        </div>
    )
}

export default UserShow
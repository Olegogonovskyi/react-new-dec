import React, {useEffect, useState} from 'react';
import {userService} from "../../services";
import {User} from "../user/User";

export const Users = () => {
    const [users, setusers] = useState([]);
    useEffect(() => {
        userService.getAll().then(({data}) => setusers(data))
    })
    return <div>
        {users.map(user => <User key={user.id} user={user}/>)}
    </div>;
};

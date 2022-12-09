import React, {useEffect, useState} from 'react';
import {userService} from "../../services";
import {User} from "../user/User";

export const Users = () => {
    const [users, setuser] = useState([]);
    useEffect(() => {
        userService.getAll().then(({data}) => setuser(data))
    })
    return (
        <div>
            {users.map(user => <User key = {user.id} user={user} />)}
        </div>
    );
};

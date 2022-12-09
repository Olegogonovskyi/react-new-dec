import React, {useEffect, useState} from 'react';
import {userService} from "../../services";
import {User} from "../user/User";

// export const Users = () => {
//     const [users, setusers] = useState([]);
//     useEffect(() => {
//         userService.getAll().then(({data}) => setusers(data))
//     })
//     return (
//         <div>
//         {users.map(user=><User key={user.id} user={user}/>)}
//     </div>
//     );
//
// };



export const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers(value));

    },[]);

    return (
        <div>
            {users.map(value =>  < User key={value.id} user={value} />)}

        </div>
    );
};


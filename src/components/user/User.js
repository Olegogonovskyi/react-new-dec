import React from 'react';

export const User = ({user}) => {
    const {id, name, email} = user;
    return (
        <div>
            {id} - {name} - {email}

        </div>
    );
};

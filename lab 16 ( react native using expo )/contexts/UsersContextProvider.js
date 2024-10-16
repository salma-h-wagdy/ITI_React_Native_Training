import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const UsersContext = createContext();  

const UsersContextProvider = ({ children }) => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data));
    }, []);

    return (
        <UsersContext.Provider value={{ users }}>
            {children}
        </UsersContext.Provider>
    );
}

export default UsersContextProvider;

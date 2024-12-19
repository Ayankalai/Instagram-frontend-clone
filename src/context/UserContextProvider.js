import React, { useEffect, useState } from "react";
import UserContext from "./UserContext"; // Import UserContext

const UserContextProvider = ({ children }) => {
   const [user, setUser] = useState(''); // Manage user state

   useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userData)
   }, []);
   return (
    <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
   );
};

export default UserContextProvider;

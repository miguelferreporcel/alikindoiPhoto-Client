import { createContext, useState } from "react";

const authContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})
    console.log('Desde AuthProvider', auth)
    return (
        <authContext.Provider value={{ auth, setAuth }}>
            {children}
        </authContext.Provider>
    )
}

export default authContext
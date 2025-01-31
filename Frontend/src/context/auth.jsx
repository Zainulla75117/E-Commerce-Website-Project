import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: "",
    });

    useEffect( ()=> {
        const data = localStorage.getItem("auth");
        if(data){
            const parsedata = JSON.parse(data);
            setAuth({
                ...auth,
                user: parsedata.user,
                token: parsedata.token,
            });
        }
    }, 
    [auth]
);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };

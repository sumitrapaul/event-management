/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../config/firebase.config";

export const AuthContext=createContext(null)
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
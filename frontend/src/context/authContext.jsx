import { createContext, useContext, useState } from "react";


export const AuthContext =createContext();


export const useAuthContext=()=>{
    return useContext(AuthContext);
}


export const AuthContextProvider=({children})=>{
    const [authuser,setAuthuser]=useState(JSON.parse(localStorage.getItem("user"))|| null);


    return <AuthContext.Provider value={{authuser,setAuthuser}}>{children}</AuthContext.Provider>

}
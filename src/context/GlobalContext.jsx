import { useState, useContext, createContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [ titulo, setTitulo ] = useState('')

    return (
        <GlobalContext.Provider value={{ titulo, setTitulo }}>
            {children}
        </GlobalContext.Provider>
    )    
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}
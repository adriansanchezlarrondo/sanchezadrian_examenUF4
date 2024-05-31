import { useState, useContext, createContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [ pendientes, setPendientes ] = useState([])
    const [ resueltos, setResueltos ] = useState([])

    const obtenerTicketPendientes = async () => {
        try {
            const response = await fetch('https://json-server-examen-uf-4.vercel.app/ticketsPendientes', { method: 'GET' })
            
            const data = await response.json();

            if (Array.isArray(data) ) {
                setPendientes(data);
            } else {
                console.error('Data is not an array:', data);
            }


        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const obtenerTicketResueltos = async () => {
        try {
            const response = await fetch('https://json-server-examen-uf-4.vercel.app/ticketsResueltos', { method: 'GET' })
            
            const data = await response.json();

            console.log('data', data);
            if (Array.isArray(data) ) {
                setResueltos(data);
            } else {
                console.error('Data is not an array:', data);
            }


        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <GlobalContext.Provider value={{ pendientes, setPendientes,resueltos, setResueltos, obtenerTicketPendientes, obtenerTicketResueltos }}> 
            {children}
        </GlobalContext.Provider>
    )    
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}
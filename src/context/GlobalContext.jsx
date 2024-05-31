import { useState, useContext, createContext } from "react";
import tickets from '../ticket.json'

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [ dades, setDades ] = useState(tickets) // ME GUARDO EL JSON ENTERO PARA HACER LAS CARTAS
    const [ dataHistoria, setDataHistoria]  = useState()

    const actualizarHistoria = async (dataHistoria) => {
        try {
            const response = await fetch(`https://json-server-examen-uf-4.vercel.app/dades/${dataHistoria.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataHistoria)
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.statusText}`)
            }

            const data = await response.json()
            console.log('Dato actualizada:', data)

            await obtenerHistoria();
        } catch (error) {
            console.error('Error actualizando la dato:', error)
        }
    }

    const obtenerHistoria = async () => {
        try {
            const response = await fetch('https://json-server-examen-uf-4.vercel.app/dades', { method: 'GET' });
            const data = await response.json();
            
            if (Array.isArray(data)) {
                setDades(data);
            } else {
                console.error('Data is not an array:', data);
            }

            console.log('DataGet: ', data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const borrarHistoria = async (id) => {
        try {
            const response = await fetch(`https://json-server-examen-uf-4.vercel.app/dades/${id}`, { method: 'DELETE' });
            
            if (!response.ok) {
                throw new Error('Error al borrar la dato');
            }
                
            setDades(prevdades => prevdades.filter(dato => dato.id !== id));
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const anadirHistoria = async ()  =>{
        try {
            const response = await fetch(`https://json-server-examen-uf-4.vercel.app/dades`, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataHistoria)
            });
            
            if (response.ok) {
                const data = await response.json();
                setDades(prevdades => [...prevdades, data]);
                console.log('Dato añadida:', data);
            } else {
                console.error('Error al borrar la dato');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <GlobalContext.Provider value={{ dades, setDades, obtenerHistoria, actualizarHistoria, borrarHistoria, anadirHistoria }}>
            {children}
        </GlobalContext.Provider>
    )    
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}
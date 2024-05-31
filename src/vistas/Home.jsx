import { useState, useEffect } from "react";
import TablaPendientes from "../componentes/TablaPendientes";
import TablaResueltos from "../componentes/TablaResueltos";
import { useGlobalContext } from "../context/GlobalContext";

export default function Home() {
    const { dades, obtenerTicket } = useGlobalContext()
    const [ pendientes, setPendientes] = useState([])
    const [ resueltos, setResueltos] = useState([])
    
    useEffect(() => {
        async function getTickets() {
            await obtenerTicket()

            setPendientes(dades[0].ticketsPendientes);
            setResueltos(dades[1].ticketsResueltos);
        }
        
        getTickets()
    }, [])


    return (
        <div className="container mt-5">
            <h1>Administración de incidencias</h1>

            <TablaPendientes pendientes={pendientes}/>
            <TablaResueltos resueltos={resueltos}/>
        </div>
    )
}
